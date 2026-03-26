$ErrorActionPreference = 'Stop'

$srcRoot = 'D:\Downloaded Data\ARC STUFF\_extracted'
$dstRoot = 'D:\26WEBProject\ARCBUILDER\public\projects'

$map = @(
  @{ slug='14-verona-st-pallara'; src='14 Verona St, Pallara QLD 4110' },
  @{ slug='25-langford-st'; src='25 Langford St-20260306T065702Z-3-001' },
  @{ slug='3-brooklyn-st-spring-mountain'; src='3 Brooklyn street Spring Mountain-20260306T065822Z-3-001' },
  @{ slug='3-dart-ave-kingston'; src='3 Dart Ave, Kingston QLD 4114' },
  @{ slug='3-stanley-st-mount-gravatt'; src='3 Stanley Street MG-20260306T075741Z-1-001' },
  @{ slug='35-ayesha-place-calamvale'; src='35 Ayesha Place Calamvale-20260306T075751Z-3-001' },
  @{ slug='49-herbert-st'; src='49 Herbert St' },
  @{ slug='8-vineyard-drive-greenbank'; src='8 Vineyard Drive Greenbank _ Photos-20260306T075743Z-3-001' },
  @{ slug='hi-def-project'; src='Spring Mountain' }
)

function Get-HeroRank([string]$name) {
  $n = $name.ToLower()
  if ($n -match 'hero\s*main') { return 0 }
  if ($n -match 'hero\s*image') { return 1 }
  if ($n -match 'hero\s*1') { return 2 }
  if ($n -match 'hero\s*2') { return 3 }
  if ($n -match 'hero') { return 4 }
  return 99
}

foreach ($m in $map) {
  $src = Join-Path $srcRoot $m.src
  $dst = Join-Path $dstRoot $m.slug

  if (-not (Test-Path $src)) {
    throw "Missing source folder: $src"
  }

  if (-not (Test-Path $dst)) {
    throw "Missing destination folder: $dst"
  }

  $all = Get-ChildItem -Path $src -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
      $_.Extension -match '(?i)^\.(jpg|jpeg|png|webp)$' -and
      $_.FullName -notmatch '(?i)\\dnu(\\|$)|\\do\s*not\s*use(\\|$)|construction|progress'
    }

  $hero = $all |
    Where-Object { $_.Name -match '(?i)hero' } |
    Sort-Object @{Expression = { Get-HeroRank $_.BaseName }}, @{Expression = { $_.Name }}

  $other = $all |
    Where-Object { $_.Name -notmatch '(?i)hero' } |
    Sort-Object Name

  $ordered = @($hero) + @($other)
  $hashSeen = @{}
  $selected = New-Object System.Collections.Generic.List[System.IO.FileInfo]

  foreach ($f in $ordered) {
    $h = (Get-FileHash -Algorithm SHA256 -Path $f.FullName).Hash
    if (-not $hashSeen.ContainsKey($h)) {
      $hashSeen[$h] = $true
      [void]$selected.Add($f)
    }
    if ($selected.Count -ge 12) { break }
  }

  if ($selected.Count -eq 0) {
    throw "No usable images found for $($m.slug)"
  }

  if ($selected.Count -lt 12) {
    Write-Output "WARN $($m.slug): only $($selected.Count) unique files found"
  }

  $max = [Math]::Min(12, $selected.Count)
  for ($i = 0; $i -lt $max; $i++) {
    $n = $i + 1
    $out = Join-Path $dst ("gallery-{0:D2}.webp" -f $n)
    ffmpeg -y -loglevel error -i $selected[$i].FullName -vf "scale='min(2200,iw)':-2" -q:v 12 $out
  }

  $heroOut = Join-Path $dst 'hero.webp'
  ffmpeg -y -loglevel error -i $selected[0].FullName -vf "scale='min(2200,iw)':-2" -q:v 10 $heroOut

  Write-Output "Updated $($m.slug): hero=$($selected[0].Name) written=$max"
}
