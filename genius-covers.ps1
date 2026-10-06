<#
  genius-covers.ps1
  -----------------------------------------------------------------
  Finds album covers on Genius for every album that has no Spotify link
  and no cover: line, saves each one as a 500 px JPG in images\genius\,
  and lists them in js\genius-covers.js, which the site reads.

  RUN (from the website folder, in PowerShell):
    powershell -ExecutionPolicy Bypass -File .\genius-covers.ps1

  The first time, it asks for your Genius "Client Access Token" and keeps it
  on this computer only (in your user folder, never in the website folder),
  so it can't end up on GitHub.

  Try it on a few albums first:
    powershell -ExecutionPolicy Bypass -File .\genius-covers.ps1 -Limit 20

  Albums it couldn't find are remembered and skipped next time. To ask again:
    powershell -ExecutionPolicy Bypass -File .\genius-covers.ps1 -Retry

  Use a different token (e.g. after making a new one on Genius):
    powershell -ExecutionPolicy Bypass -File .\genius-covers.ps1 -NewToken

  Safe to stop (Ctrl+C) and rerun: what it found so far is kept.
  Afterwards, upload js\genius-covers.js and the images\genius\ folder.
#>
param(
  [int]$Limit = 0,
  [switch]$Retry,
  [switch]$Redo,
  [switch]$NewToken,
  [int]$Size = 500,
  [int]$Quality = 85,
  [int]$DelayMs = 300,
  [string]$ApiBase = 'https://api.genius.com',
  [string]$StateDir = (Join-Path $HOME '.the-shape-of-music-to-come')
)

$ErrorActionPreference = 'Stop'
try { [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12 } catch {}

$site      = $PSScriptRoot
$albumsDir = Join-Path $site 'albums'
$outJs     = Join-Path $site 'js\genius-covers.js'
$outDir    = Join-Path $site 'images\genius'
New-Item -ItemType Directory -Force -Path $StateDir, $outDir | Out-Null
$tokenFile = Join-Path $StateDir 'genius-token.txt'
$missFile  = Join-Path $StateDir 'genius-not-found.txt'
$utf8 = New-Object System.Text.UTF8Encoding($false)

# ---------- names: compare loosely (capitals, accents, punctuation, "The", (brackets) don't matter) ----------
function Get-Loose([string]$s) {
  if (-not $s) { return '' }
  $s = $s.Normalize([Text.NormalizationForm]::FormD) -replace '\p{Mn}', ''
  $s = $s.ToLowerInvariant() -replace '&', ' and ' -replace '[\(\[][^\)\]]*[\)\]]', ' '
  $s = ($s -replace '[^a-z0-9 ]+', '' -replace '\s+', ' ').Trim()
  return ($s -replace '^(the|a|an) ', '')
}
function Get-Key([string]$artist, [string]$album) { return (Get-Loose $artist) + '|' + (Get-Loose $album) }
function Get-Slug([string]$s) {
  $s = $s.Normalize([Text.NormalizationForm]::FormD) -replace '\p{Mn}', ''
  $s = ($s.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
  if ($s.Length -gt 90) { $s = $s.Substring(0, 90).Trim('-') }
  return $s
}
function Test-SameTitle([string]$a, [string]$b) {        # "Nevermind" ~ "Nevermind (Remastered)"
  $a = Get-Loose $a; $b = Get-Loose $b
  if (-not $a -or -not $b) { return $false }
  if ($a -eq $b) { return $true }
  return ($a.Length -gt 4 -and $b.Length -gt 4 -and ($a.StartsWith($b + ' ') -or $b.StartsWith($a + ' ')))
}
function Test-SameArtist([string]$a, [string]$b) {       # "Jimi Hendrix" ~ "The Jimi Hendrix Experience"
  $a = Get-Loose $a; $b = Get-Loose $b
  if (-not $a -or -not $b) { return $false }
  return ($a -eq $b -or (' ' + $a + ' ').Contains(' ' + $b + ' ') -or (' ' + $b + ' ').Contains(' ' + $a + ' '))
}
function ConvertTo-JsString([string]$s) { return '"' + ($s -replace '\\', '\\' -replace '"', '\"') + '"' }

# ---------- the token ----------
$Token = ''
if (-not $NewToken -and (Test-Path -LiteralPath $tokenFile)) { $Token = ([IO.File]::ReadAllText($tokenFile)).Trim() }
if (-not $Token) {
  Write-Host ''
  Write-Host 'Paste your Genius Client Access Token (genius.com/api-clients > Generate Access Token)' -ForegroundColor Cyan
  Write-Host '(it stays on this computer, in' $StateDir ')'
  $Token = (Read-Host 'Token').Trim()
  if (-not $Token) { Write-Host 'No token, nothing to do.' -ForegroundColor Yellow; exit 1 }
}

function Invoke-Genius([string]$path) {
  for ($try = 1; $try -le 4; $try++) {
    Start-Sleep -Milliseconds $DelayMs
    try {
      return Invoke-RestMethod -Uri ($ApiBase + $path) -Headers @{ Authorization = "Bearer $Token" } -TimeoutSec 30 -UseBasicParsing
    } catch {
      $code = 0
      try { if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode } } catch {}
      if ($code -eq 401 -or $code -eq 403) { throw 'TOKEN' }
      if ($code -eq 404) { return $null }
      if ($try -eq 4) { throw }
      Write-Host ("    (Genius said {0}; waiting {1}s and trying again)" -f $(if ($code) { $code } else { 'no answer' }), (5 * $try)) -ForegroundColor DarkYellow
      Start-Sleep -Seconds (5 * $try)
    }
  }
}

# check the token before doing anything else
try { $null = Invoke-Genius '/search?q=test' }
catch {
  if ("$_" -eq 'TOKEN') {
    Write-Host "`nGenius refused that token." -ForegroundColor Red
    Write-Host 'Use the CLIENT ACCESS TOKEN (genius.com/api-clients > your app > Generate Access Token),'
    Write-Host 'not the Client ID or Client Secret. Then run again with -NewToken.'
    if (Test-Path -LiteralPath $tokenFile) { Remove-Item -LiteralPath $tokenFile -Force }
    exit 1
  }
  Write-Host "`nCouldn't reach Genius: $($_.Exception.Message)" -ForegroundColor Red
  exit 1
}
[IO.File]::WriteAllText($tokenFile, $Token, $utf8)

# ---------- what we already have ----------
$found = [ordered]@{}     # key -> @{ Artist; Album; Cover }
if (-not $Redo -and (Test-Path -LiteralPath $outJs)) {
  $text = [IO.File]::ReadAllText($outJs, $utf8)
  foreach ($m in [regex]::Matches($text, '\{\s*artist:\s*"((?:[^"\\]|\\.)*)",\s*album:\s*"((?:[^"\\]|\\.)*)",\s*cover:\s*"([^"]+)"\s*\}')) {
    $a = $m.Groups[1].Value -replace '\\(.)', '$1'; $al = $m.Groups[2].Value -replace '\\(.)', '$1'
    if (Test-Path -LiteralPath (Join-Path $site $m.Groups[3].Value)) {
      $found[(Get-Key $a $al)] = @{ Artist = $a; Album = $al; Cover = $m.Groups[3].Value }
    }
  }
}
$missed = New-Object System.Collections.Generic.HashSet[string]
if (-not $Retry -and -not $Redo -and (Test-Path -LiteralPath $missFile)) {
  foreach ($line in [IO.File]::ReadAllLines($missFile, $utf8)) { if ($line) { [void]$missed.Add($line) } }
}

# ---------- every album that still needs a cover ----------
$todo = New-Object System.Collections.Generic.List[object]
$seen = New-Object System.Collections.Generic.HashSet[string]
foreach ($f in (Get-ChildItem -LiteralPath $albumsDir -Filter '*.js' -File | Sort-Object Name)) {
  if ($f.Name -match 'playlists') { continue }                        # your own playlists have their own covers
  $text = [IO.File]::ReadAllText($f.FullName, $utf8)
  $pattern = '\{\s*artist:\s*"((?:[^"\\]|\\.)*)",\s*album:\s*"((?:[^"\\]|\\.)*)",\s*released:\s*"[^"]*",\s*spotify:\s*"([^"]*)"([^}]*)\}'
  foreach ($m in [regex]::Matches($text, $pattern)) {
    $artist = ($m.Groups[1].Value -replace '\\(.)', '$1').Trim()
    $album  = ($m.Groups[2].Value -replace '\\(.)', '$1').Trim()
    if (-not $artist -or -not $album -or $album -eq 'Podcast') { continue }
    if ($m.Groups[3].Value.Trim()) { continue }                      # has a Spotify link: Spotify's cover is used
    if ($m.Groups[4].Value -match 'cover:\s*"[^"]+"') { continue }    # has its own cover: line
    $key = Get-Key $artist $album
    if ($found.Contains($key) -or $missed.Contains($key) -or -not $seen.Add($key)) { continue }
    $todo.Add([pscustomobject]@{ Artist = $artist; Album = $album; Key = $key; File = $f.Name })
  }
}
$total = $todo.Count
if ($Limit -gt 0 -and $todo.Count -gt $Limit) { $todo = $todo.GetRange(0, $Limit) }
Write-Host ''
Write-Host ("{0} album(s) to look up on Genius{1}. Already found: {2}. Skipped as not on Genius: {3}." -f `
  $total, $(if ($todo.Count -lt $total) { " (this run: $($todo.Count))" } else { '' }), $found.Count, $missed.Count) -ForegroundColor Cyan
if (-not $todo.Count) { Write-Host 'Nothing new to look up.'; }

# ---------- one album -> a Genius cover address ----------
function Find-GeniusCover($artist, $album) {
  $various = $artist -match '^various( artists)?$'
  $bare = ($album -replace '\s*[\(\[][^\)\]]*[\)\]]', '').Trim()
  if (-not $bare) { $bare = $album }
  $queries = if ($various) { @($bare) } else { @("$artist $bare", $bare) }
  $checked = @{}
  foreach ($q in $queries) {
    $res = Invoke-Genius ('/search?q=' + [uri]::EscapeDataString($q))
    if (-not $res) { continue }
    $n = 0
    foreach ($hit in @($res.response.hits)) {
      if ($hit.type -ne 'song' -or -not $hit.result) { continue }
      $song = $hit.result
      if (-not $various -and -not (Test-SameArtist $song.primary_artist.name $artist)) { continue }
      if ($checked.ContainsKey([string]$song.id)) { continue }
      $checked[[string]$song.id] = 1
      $n++; if ($n -gt 4) { break }
      $full = Invoke-Genius ('/songs/' + $song.id)
      if (-not $full) { continue }
      $al = $full.response.song.album
      if (-not $al -or -not $al.cover_art_url -or $al.cover_art_url -match 'default') { continue }
      if (-not (Test-SameTitle $al.name $album)) { continue }
      if ($various -and $al.artist -and $al.artist.name -and $al.artist.name -notmatch 'various') { continue }
      return [string]$al.cover_art_url
    }
  }
  return $null
}

# ---------- pictures: 500 px JPG (or the original, if this computer can't convert) ----------
$canConvert = $false
try {
  Add-Type -AssemblyName System.Drawing
  $jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  if ($jpeg) { $canConvert = $true }
} catch {}
# (the converting is its own function, only ever called when this computer can convert)
function Save-Jpeg([string]$inPath, [string]$outPath) {
  $src = $null; $bmp = $null; $g = $null; $params = $null
  try {
    $src = [System.Drawing.Image]::FromFile($inPath)
    $w = [Math]::Min($Size, $src.Width); $h = [int][Math]::Round($src.Height * $w / $src.Width)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $w, $h)
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
    $bmp.Save($outPath, $jpeg, $params)
  } finally {
    if ($params) { $params.Dispose() }; if ($g) { $g.Dispose() }; if ($bmp) { $bmp.Dispose() }; if ($src) { $src.Dispose() }
  }
}
function Save-Picture([string]$inPath, [string]$outPath) {
  if ($canConvert) {
    try { Save-Jpeg $inPath $outPath; return } catch {}       # couldn't convert this one: keep the original
  }
  Copy-Item -LiteralPath $inPath -Destination $outPath -Force
}

# ---------- saving progress (after every few finds, and at the end) ----------
function Save-Progress {
  $lines = foreach ($e in $found.Values) {
    '  { artist: ' + (ConvertTo-JsString $e.Artist) + ', album: ' + (ConvertTo-JsString $e.Album) + ', cover: ' + (ConvertTo-JsString $e.Cover) + ' },'
  }
  $head = "/* Covers found on Genius by genius-covers.ps1 (run it on your computer; see README, `"Covers from Genius`").`n" +
          "   The pictures themselves are in images/genius/. Don't edit by hand: rerun the script.`n" +
          "   To stop using one cover, delete its line. */`n"
  [IO.File]::WriteAllText($outJs, $head + "window.GENIUS_COVERS = [`n" + (($lines | Sort-Object) -join "`n") + "`n];`n", $utf8)
  [IO.File]::WriteAllLines($missFile, [string[]]@($missed), $utf8)
}

# ---------- go ----------
$i = 0; $hits = 0; $since = 0
$usedNames = New-Object System.Collections.Generic.HashSet[string]
foreach ($e in $found.Values) { [void]$usedNames.Add([IO.Path]::GetFileName($e.Cover)) }
try {
  foreach ($a in $todo) {
    $i++
    $label = "{0} - {1}" -f $a.Artist, $a.Album
    Write-Host ("[{0}/{1}] {2}" -f $i, $todo.Count, $label) -NoNewline
    $url = $null
    try { $url = Find-GeniusCover $a.Artist $a.Album }
    catch {
      if ("$_" -eq 'TOKEN') { Write-Host "`nGenius stopped accepting the token. Run again with -NewToken." -ForegroundColor Red; break }
      Write-Host ("  ... skipped ({0})" -f $_.Exception.Message) -ForegroundColor DarkYellow
      continue
    }
    if (-not $url) {
      [void]$missed.Add($a.Key)
      Write-Host '  ... not on Genius' -ForegroundColor DarkGray
    } else {
      $name = (Get-Slug $label) + '.jpg'
      $n = 2
      while ($usedNames.Contains($name)) { $name = (Get-Slug $label) + "-$n.jpg"; $n++ }
      $tmp = [IO.Path]::GetTempFileName()
      try {
        Invoke-WebRequest -Uri $url -OutFile $tmp -UseBasicParsing -TimeoutSec 60
        Save-Picture $tmp (Join-Path $outDir $name)
        [void]$usedNames.Add($name)
        $found[$a.Key] = @{ Artist = $a.Artist; Album = $a.Album; Cover = "images/genius/$name" }
        $hits++; $since++
        Write-Host '  ... found' -ForegroundColor Green
      } catch {
        Write-Host ("  ... found, but the picture didn't download ({0})" -f $_.Exception.Message) -ForegroundColor DarkYellow
      } finally {
        Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
      }
    }
    if ($since -ge 10) { Save-Progress; $since = 0 }
  }
} finally {
  Save-Progress
}

Write-Host ''
Write-Host ("Done: {0} new cover(s) this run, {1} in total." -f $hits, $found.Count) -ForegroundColor Green
Write-Host ("Upload js\genius-covers.js and the images\genius folder.")
if ($todo.Count -lt $total) { Write-Host ("{0} album(s) still to look up: run the script again." -f ($total - $todo.Count)) }
