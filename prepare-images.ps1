<#
  prepare-images.ps1
  -----------------------------------------------------------------
  Copies the 1920x1080 room images from your Downloads folder into
  the site, renamed to the file names the site expects, and saves:
    images\rooms\<name>.jpg          full size (for the room page)
    images\rooms\thumbs\<name>.jpg   640 px wide (for the directory)

  PNG -> JPG cuts each picture from several MB to a few hundred KB,
  so the directory doesn't make visitors download ~150 MB.

  Matching ignores spaces, dashes, punctuation and capitals, so
  "Indie Rock  Alternative Rock.png" and "Indie Rock Alternative Rock.png"
  both work. Anything it can't match is listed at the end.

  RUN (from the website folder, in PowerShell):
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1

  If your images are somewhere else:
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1 -Source "D:\path\to\images"

  Preview the matching without writing anything:
    powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1 -DryRun
#>
param(
  [string]$Source = (Join-Path $HOME 'Downloads\The Shape of Music to Come images'),
  [string]$Dest   = (Join-Path $PSScriptRoot 'images\rooms'),
  [int]$FullWidth = 1920,
  [int]$ThumbWidth = 640,
  [int]$Quality = 84,
  [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

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

if (-not (Test-Path -LiteralPath $Source)) {
  Write-Host "Can't find the image folder:" -ForegroundColor Red
  Write-Host "  $Source"
  Write-Host 'Run again with -Source "C:\path\to\your\images"'
  exit 1
}

$files = Get-ChildItem -LiteralPath $Source -File | Where-Object { $_.Extension -match '^\.(png|jpe?g|webp)$' }
$plan = @()
$unmatched = @()
foreach ($f in $files) {
  $key = Get-Key $f.BaseName
  if ($map.Contains($key)) { $plan += [pscustomobject]@{ File = $f; Slug = $map[$key] } }
  else { $unmatched += $f.Name }
}

# if two files claim the same slug (e.g. "Latin World" and "Latin Global"), keep the newest
$plan = $plan | Group-Object Slug | ForEach-Object {
  $_.Group | Sort-Object { $_.File.LastWriteTime } -Descending | Select-Object -First 1
}

Write-Host ""
Write-Host ("Matched {0} image(s):" -f @($plan).Count) -ForegroundColor Cyan
foreach ($p in ($plan | Sort-Object Slug)) {
  Write-Host ("  {0,-40} <- {1}" -f ($p.Slug + '.jpg'), $p.File.Name)
}

if ($DryRun) {
  Write-Host "`n(Dry run: nothing written.)"
} else {
  $canConvert = $true
  try {
    Add-Type -AssemblyName System.Drawing
    $jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    if (-not $jpeg) { throw 'no JPEG encoder' }
  } catch {
    $canConvert = $false
    Write-Host "`nThis machine can't convert images ($($_.Exception.Message)); copying the originals instead." -ForegroundColor Yellow
    Write-Host "They'll still display (browsers read the real format), just heavier to load."
  }
  $thumbDir = Join-Path $Dest 'thumbs'
  New-Item -ItemType Directory -Force -Path $Dest, $thumbDir | Out-Null

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

  foreach ($p in $plan) {
    $full  = Join-Path $Dest ($p.Slug + '.jpg')
    $thumb = Join-Path $thumbDir ($p.Slug + '.jpg')
    $done = $false
    if ($canConvert) {
      try {
        Save-Jpeg $p.File.FullName $full $FullWidth
        Save-Jpeg $p.File.FullName $thumb $ThumbWidth
        $done = $true
      } catch {
        Write-Host ("  couldn't convert {0}: {1} (copying original)" -f $p.File.Name, $_.Exception.Message) -ForegroundColor Yellow
      }
    }
    if (-not $done) {
      Copy-Item -LiteralPath $p.File.FullName -Destination $full -Force
      Copy-Item -LiteralPath $p.File.FullName -Destination $thumb -Force
    }
  }
  Write-Host ("`nSaved to {0}" -f $Dest) -ForegroundColor Green
}

$found = @($plan | ForEach-Object { $_.Slug })
$expected = $map.Values | Select-Object -Unique
$missing = $expected | Where-Object { $found -notcontains $_ }
if ($missing) {
  Write-Host "`nNo image for these yet (fine: js/shop-map.js has them borrow a parent's picture):" -ForegroundColor Yellow
  $missing | ForEach-Object { Write-Host "  $_" }
}
if ($unmatched) {
  Write-Host "`nDidn't recognise these files (rename them, or add a line to `$map):" -ForegroundColor Yellow
  $unmatched | ForEach-Object { Write-Host "  $_" }
}
