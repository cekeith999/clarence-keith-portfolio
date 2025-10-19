# PowerShell script to convert meimages to WebP format
$magickPath = "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe"
$sourceDir = "meimages"
$backupDir = "meimages\backup"

# Create backup directory if it doesn't exist
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force
}

# Define the specific images to convert
$imagesToConvert = @(
    "Full body me.jpg",
    "image000000.JPG",
    "IMG_0844.HEIC",
    "IMG_0947.HEIC", 
    "IMG_2849.HEIC",
    "IMG_3029.jpg",
    "IMG_3850.JPG",
    "IMG_4151.JPG"
)

Write-Host "Converting meimages to WebP format..." -ForegroundColor Green

foreach ($image in $imagesToConvert) {
    $sourcePath = Join-Path $sourceDir $image
    $backupPath = Join-Path $backupDir $image
    
    if (Test-Path $sourcePath) {
        # Create backup
        Copy-Item $sourcePath $backupPath -Force
        Write-Host "Backed up: $image" -ForegroundColor Yellow
        
        # Convert to WebP
        $webpName = [System.IO.Path]::GetFileNameWithoutExtension($image) + ".webp"
        $webpPath = Join-Path $sourceDir $webpName
        
        try {
            & $magickPath $sourcePath -quality 85 $webpPath
            Write-Host "Converted: $image -> $webpName" -ForegroundColor Green
        }
        catch {
            Write-Host "Error converting $image : $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    else {
        Write-Host "File not found: $sourcePath" -ForegroundColor Red
    }
}

Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host "Original files backed up to: $backupDir" -ForegroundColor Cyan
