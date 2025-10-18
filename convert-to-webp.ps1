# PowerShell script to convert all portfolio images to WebP format
# Requires ImageMagick to be installed

Write-Host "Starting image conversion to WebP format..." -ForegroundColor Green

# Check if ImageMagick is installed
$magickPath = "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe"
if (!(Test-Path $magickPath)) {
    Write-Host "Error: ImageMagick not found at expected location" -ForegroundColor Red
    Write-Host "Please install ImageMagick from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    exit 1
}

try {
    $magickVersion = & $magickPath -version 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "ImageMagick not working"
    }
    Write-Host "ImageMagick found: $($magickVersion[0])" -ForegroundColor Green
} catch {
    Write-Host "Error: ImageMagick is not working properly" -ForegroundColor Red
    exit 1
}

# Define image directories
$imageDirs = @("shoeimages", "accessoryimages", "meimages", "maskimages", "productdesignimages")

# Create backup directory
$backupDir = "original_images_backup"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Created backup directory: $backupDir" -ForegroundColor Yellow
}

$convertedCount = 0
$totalFiles = 0

# Count total files first
foreach ($dir in $imageDirs) {
    if (Test-Path $dir) {
        $files = Get-ChildItem -Path $dir -Include "*.jpg", "*.jpeg", "*.png" -Recurse
        $totalFiles += $files.Count
    }
}

Write-Host "Found $totalFiles images to convert" -ForegroundColor Cyan

# Convert images in each directory
foreach ($dir in $imageDirs) {
    if (!(Test-Path $dir)) {
        Write-Host "Directory $dir not found, skipping..." -ForegroundColor Yellow
        continue
    }
    
    Write-Host "Processing directory: $dir" -ForegroundColor Cyan
    
    $files = Get-ChildItem -Path $dir -Include "*.jpg", "*.jpeg", "*.png" -Recurse
    
    foreach ($file in $files) {
        $inputPath = $file.FullName
        $outputPath = $file.DirectoryName + "\" + $file.BaseName + ".webp"
        
        # Skip if WebP already exists
        if (Test-Path $outputPath) {
            Write-Host "  WebP already exists: $($file.Name)" -ForegroundColor Gray
            continue
        }
        
        try {
            # Create backup
            $backupPath = Join-Path $backupDir $file.Name
            Copy-Item $inputPath $backupPath -Force
            
            # Convert to WebP with high quality
            & $magickPath $inputPath -quality 90 $outputPath
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  Converted: $($file.Name) -> $($file.BaseName).webp" -ForegroundColor Green
                $convertedCount++
            } else {
                Write-Host "  Failed to convert: $($file.Name)" -ForegroundColor Red
            }
        } catch {
            Write-Host "  Error converting $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host "Converted $convertedCount out of $totalFiles images" -ForegroundColor Cyan
Write-Host "Original images backed up to: $backupDir" -ForegroundColor Yellow

if ($convertedCount -gt 0) {
    Write-Host ""
    Write-Host "Next step: Run update-html-paths.ps1 to update image references in index.html" -ForegroundColor Magenta
}