<#
  prepare-images.ps1
  -----------------------------------------------------------------
  Makes web-sized copies of your pictures for the site. Two jobs:

  1) ROOM PICTURES (the 1920x1080 room images), renamed to the names
     the site expects:
       images\rooms\<name>.jpg          full size (for the room page)
       images\rooms\thumbs\<name>.jpg   640 px wide (for the directory)
     Matching ignores spaces, dashes, punctuation and capitals, so
     "Indie Rock  Alternative Rock.png" and "Indie Rock Alternative Rock.png"
     both work. Anything it can't match is listed at the end.

  2) PLAYLIST COVERS: every picture in images\playlists-covers\ becomes
       images\playlists\<name>.jpg      600 px square-ish, a few dozen KB
     <name> is the file name in lower case with dashes, e.g.
       "Angst & Anthems_ Gritty Rock Collage.png"
         -> images\playlists\angst-anthems-gritty-rock-collage.jpg
     At the end it checks albums\playlists.js and lists any playlist
     whose cover is still missing.

  PNG -> JPG cuts each picture from several MB to a few hundred KB (or less),
  so visitors aren't downloading hundreds of MB.

  RUN (from the website folder, in PowerShell):
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1

  It looks for the room pictures in Downloads\The Shape of Music to Come images,
  and if that folder isn't there, in the site's own images folder.
  If your room pictures are somewhere else:
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1 -Source "D:\path\to\images"

  Preview everything without writing anything:
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1 -DryRun

  Only the playlist covers (skip the room pictures):
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1 -CoversOnly
#>
param(
  [string]$Source = '',
  [string]$Dest   = (Join-Path $PSScriptRoot 'images\rooms'),
  [string]$Covers = (Join-Path $PSScriptRoot 'images\playlists-covers'),
  [string]$CoverDest = (Join-Path $PSScriptRoot 'images\playlists'),
  [int]$FullWidth = 1920,
  [int]$ThumbWidth = 640,
  [int]$CoverWidth = 600,
  [int]$Quality = 84,
  [switch]$DryRun,
  [switch]$CoversOnly
)

$ErrorActionPreference = 'Stop'

if (-not $Source) {
  $Source = Join-Path $HOME 'Downloads\The Shape of Music to Come images'
  if (-not (Test-Path -LiteralPath $Source)) { $Source = Join-Path $PSScriptRoot 'images' }
}

# key = file name lower-cased with everything except a-z and 0-9 removed
$map = [ordered]@{
  'theshapeofmusictocome0'                          = 'storefront'
  'theshapeofmusictocome'                           = 'storefront'
  'indierockalternativerock'                        = 'indie-alt'
  'bluesearlyrbrocknroll'                           = 'blues'
  'classicalorchestral'                             = 'classical'
  'classicalorchestra'                              = 'classical'
  'electronic'                                      = 'electronic'
  'electronicdancehousetechnobigbeat'               = 'electronic-dance'
  'electronicidmambientglitchexperimental'          = 'electronic-idm'
  'electronictriphopdowntempo'                      = 'electronic-trip-hop'
  'electronicbassbreakbeatjunglednbdubstepukg'      = 'electronic-bass'
  'experimentalrockpostrocknoiserock'               = 'experimental-rock'
  'folksingersongwriteramericanacountry'            = 'folk'
  'grunge90saltrock'                                = 'grunge'
  'hiphop'                                          = 'hip-hop'
  'hiphophiphop'                                    = 'hip-hop-crate'
  'hiphopconsciouspoliticalhiphop'                  = 'hip-hop-conscious'
  'hiphopexperimentalindustrialabstract'            = 'hip-hop-experimental'
  'industrialebm'                                   = 'industrial'
  'jazz'                                            = 'jazz'
  'latinworld'                                      = 'latin'
  'latinglobal'                                     = 'latin'
  'metal'                                           = 'metal'
  'metaltraditionalnwobhmpowerprog'                 = 'metal-traditional'
  'metalthrash'                                     = 'metal-thrash'
  'metaldeathmetalgrind'                            = 'metal-death'
  'metalblackatmosphericpostblack'                  = 'metal-black'
  'metaldoomsludgestonerpostmetal'                  = 'metal-doom'
  'metalmetalcoremathcore'                          = 'metal-metalcore'
  'metalgroovealtnurap'                             = 'metal-groove'
  'popsynthpopartpop'                               = 'pop'
  'postpunknewwavegothicrock'                       = 'post-punk'
  'punkrockhardcorepunkposthardcore'                = 'punk'
  'punkrockhardcorepunkposthardcorepunkrock'        = 'punk-punk-rock'
  'punkrockhardcorepunkposthardcorehardcorepunkposthardcore' = 'punk-hardcore'
  'rbsoulfunk'                                      = 'rnb'
  'rbsoulfunkrbsoulfunk'                            = 'rnb-crate'
  'rbsoulfunkneosoul'                               = 'rnb-neo-soul'
  'reggaedubdancehall'                              = 'reggae'
  'reggaedubdacehall'                               = 'reggae'
  'rockclassicrockrootsrockbluesrock'               = 'rock'
  'ska2toneskapunk'                                 = 'ska'
  'soundtrackscore'                                 = 'soundtrack'
  'halloween'                                       = 'halloween'
  'halloween0'                                      = 'halloween-crate'
  'halloweencompilations'                           = 'halloween-compilations'
  'halloweenplaylists'                              = 'halloween-playlists'
  'halloweenstagescreen'                            = 'halloween-stage-screen'
  'halloweenstagescreenspokenword'                  = 'halloween-stage-screen-spoken-word'
  'halloweenstagescreensoundeffects'                = 'halloween-stage-screen-sound-effects'
  'halloweenpodcastsbroadcasts'                     = 'halloween-podcasts'
  'podcastsbroadcasts'                              = 'podcasts'
  'stagescreen'                                     = 'stage-screen'
  'stagescreenspokenword'                           = 'stage-screen-spoken-word'
  'stagescreensoundeffects'                         = 'stage-screen-sound-effects'
  'playlists'                                       = 'playlists'
}

function Get-Key([string]$name) {
  return ($name.ToLowerInvariant() -replace '[^a-z0-9]', '')
}
# playlist cover names: "Angst & Anthems_ Gritty Rock Collage" -> "angst-anthems-gritty-rock-collage"
function Get-Slug([string]$name) {
  $s = $name.Normalize([Text.NormalizationForm]::FormD) -replace '\p{Mn}', ''   # accents off
  return (($s.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-'))
}

# ---------- converting (shared by both jobs) ----------
$canConvert = $false
if (-not $DryRun) {
  try {
    Add-Type -AssemblyName System.Drawing
    $jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    if (-not $jpeg) { throw 'no JPEG encoder' }
    $canConvert = $true
  } catch {
    Write-Host "`nThis machine can't convert images ($($_.Exception.Message)); copying the originals instead." -ForegroundColor Yellow
    Write-Host "They'll still display (browsers read the real format), just heavier to load."
  }
}

function Save-Jpeg([string]$inPath, [string]$outPath, [int]$maxWidth) {
  $src = $null; $bmp = $null; $g = $null; $attrs = $null; $params = $null
  try {
    $src = [System.Drawing.Image]::FromFile($inPath)
    $w = [Math]::Min($maxWidth, $src.Width)
    $h = [int][Math]::Round($src.Height * $w / $src.Width)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $attrs = New-Object System.Drawing.Imaging.ImageAttributes
    $attrs.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)   # no dark edge on resize
    $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $g.DrawImage($src, $rect, 0, 0, $src.Width, $src.Height, [System.Drawing.GraphicsUnit]::Pixel, $attrs)
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
    $bmp.Save($outPath, $jpeg, $params)
  } finally {
    if ($params) { $params.Dispose() }
    if ($attrs)  { $attrs.Dispose() }
    if ($g)      { $g.Dispose() }
    if ($bmp)    { $bmp.Dispose() }
    if ($src)    { $src.Dispose() }
  }
}

# one picture -> a JPG; falls back to copying the original if it can't convert
function Write-Picture([string]$inPath, [string]$outPath, [int]$maxWidth) {
  if ($canConvert) {
    try { Save-Jpeg $inPath $outPath $maxWidth; return }
    catch { Write-Host ("  couldn't convert {0}: {1} (copying original)" -f (Split-Path $inPath -Leaf), $_.Exception.Message) -ForegroundColor Yellow }
  }
  Copy-Item -LiteralPath $inPath -Destination $outPath -Force
}

# =================================================================
# 1) room pictures
# =================================================================
if ($CoversOnly) {
  Write-Host "`n(Room pictures skipped: -CoversOnly.)"
} elseif (-not (Test-Path -LiteralPath $Source)) {
  Write-Host "`nCan't find the room pictures folder, so skipping the rooms:" -ForegroundColor Yellow
  Write-Host "  $Source"
  Write-Host '  (run again with -Source "C:\path\to\your\images" if they are somewhere else)'
} else {
  $files = Get-ChildItem -LiteralPath $Source -File | Where-Object { $_.Extension -match '^\.(png|jpe?g|webp)$' }
  $plan = @()
  $unmatched = @()
  foreach ($f in $files) {
    $key = Get-Key $f.BaseName
    if ($map.Contains($key)) { $plan += [pscustomobject]@{ File = $f; Slug = $map[$key] } }
    else { $unmatched += $f.Name }
  }

  # if two files claim the same slug (e.g. "Latin World" and "Latin Global"), keep the newest
  $plan = @($plan | Group-Object Slug | ForEach-Object {
    $_.Group | Sort-Object { $_.File.LastWriteTime } -Descending | Select-Object -First 1
  })

  Write-Host ""
  Write-Host ("ROOM PICTURES from {0}" -f $Source) -ForegroundColor Cyan
  Write-Host ("Matched {0} image(s):" -f $plan.Count)
  foreach ($p in ($plan | Sort-Object Slug)) {
    Write-Host ("  {0,-40} <- {1}" -f ($p.Slug + '.jpg'), $p.File.Name)
  }

  if ($DryRun) {
    Write-Host "(Dry run: nothing written.)"
  } elseif ($plan.Count) {
    $thumbDir = Join-Path $Dest 'thumbs'
    New-Item -ItemType Directory -Force -Path $Dest, $thumbDir | Out-Null
    foreach ($p in $plan) {
      Write-Picture $p.File.FullName (Join-Path $Dest ($p.Slug + '.jpg')) $FullWidth
      Write-Picture $p.File.FullName (Join-Path $thumbDir ($p.Slug + '.jpg')) $ThumbWidth
    }
    Write-Host ("Saved to {0}" -f $Dest) -ForegroundColor Green
  }

  $found = @($plan | ForEach-Object { $_.Slug })
  $expected = $map.Values | Select-Object -Unique
  $missing = $expected | Where-Object { $found -notcontains $_ }
  if ($missing) {
    Write-Host "`nNo picture for these rooms yet (fine: they borrow a parent's picture):" -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host "  $_" }
  }
  if ($unmatched) {
    Write-Host "`nDidn't recognise these files (rename them, or add a line to `$map):" -ForegroundColor Yellow
    $unmatched | ForEach-Object { Write-Host "  $_" }
  }
}

# =================================================================
# 2) playlist covers
# =================================================================
Write-Host ""
if (-not (Test-Path -LiteralPath $Covers)) {
  Write-Host "No playlist covers folder ($Covers), so skipping the covers." -ForegroundColor Yellow
} else {
  $coverFiles = @(Get-ChildItem -LiteralPath $Covers -File | Where-Object { $_.Extension -match '^\.(png|jpe?g|webp)$' })
  Write-Host ("PLAYLIST COVERS from {0}: {1} picture(s)" -f $Covers, $coverFiles.Count) -ForegroundColor Cyan
  if (-not $DryRun -and $coverFiles.Count) { New-Item -ItemType Directory -Force -Path $CoverDest | Out-Null }
  foreach ($f in $coverFiles) {
    $name = (Get-Slug $f.BaseName) + '.jpg'
    Write-Host ("  {0,-52} <- {1}" -f $name, $f.Name)
    if (-not $DryRun) { Write-Picture $f.FullName (Join-Path $CoverDest $name) $CoverWidth }
  }
  if ($DryRun) { Write-Host "(Dry run: nothing written.)" }
  elseif ($coverFiles.Count) { Write-Host ("Saved to {0}" -f $CoverDest) -ForegroundColor Green }
}

# check: every cover the playlist files ask for, and whether it's there
$wanted = @()
foreach ($js in @(Get-ChildItem -Path (Join-Path $PSScriptRoot 'albums') -Filter '*playlists*.js' -File -ErrorAction SilentlyContinue)) {
  $text = Get-Content -LiteralPath $js.FullName -Raw -Encoding UTF8
  foreach ($m in [regex]::Matches($text, 'album:\s*"((?:[^"\\]|\\.)*)"[^}]*?cover:\s*"images/playlists/([^"]+)"')) {
    $wanted += [pscustomobject]@{ Title = $m.Groups[1].Value; File = $m.Groups[2].Value }
  }
}
if ($wanted.Count) {
  $have = @()
  if ($DryRun) {
    # dry run: compare against the names the covers folder would produce
    if (Test-Path -LiteralPath $Covers) { $have = @(Get-ChildItem -LiteralPath $Covers -File | ForEach-Object { (Get-Slug $_.BaseName) + '.jpg' }) }
  } elseif (Test-Path -LiteralPath $CoverDest) {
    $have = @(Get-ChildItem -LiteralPath $CoverDest -File | ForEach-Object { $_.Name })
  }
  $lost = @($wanted | Where-Object { $have -notcontains $_.File })
  if ($lost.Count) {
    Write-Host ("`n{0} playlist(s) have no cover yet:" -f $lost.Count) -ForegroundColor Yellow
    $lost | ForEach-Object { Write-Host ("  {0}  (needs images\playlists\{1})" -f $_.Title, $_.File) }
    Write-Host "  Each picture's file name decides its JPG name (listed under PLAYLIST COVERS above). Either rename"
    Write-Host "  the picture in images\playlists-covers to match, or put the name it got into that playlist's"
    Write-Host "  cover: line in albums\playlists.js."
  } else {
    Write-Host ("`nAll {0} playlist covers are in place." -f $wanted.Count) -ForegroundColor Green
  }
}
