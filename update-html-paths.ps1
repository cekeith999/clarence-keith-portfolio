# PowerShell script to update image paths in index.html from JPG/PNG to WebP

Write-Host "Updating image paths in index.html..." -ForegroundColor Green

$htmlFile = "index.html"
$backupFile = "index.html.backup"

# Create backup of original HTML
if (Test-Path $htmlFile) {
    Copy-Item $htmlFile $backupFile -Force
    Write-Host "Created backup: $backupFile" -ForegroundColor Yellow
} else {
    Write-Host "Error: index.html not found!" -ForegroundColor Red
    exit 1
}

# Read the HTML content
$content = Get-Content $htmlFile -Raw

# Define replacement patterns
$replacements = @{
    '\.jpg' = '.webp'
    '\.jpeg' = '.webp'
    '\.png' = '.webp'
}

$updateCount = 0

# Apply replacements
foreach ($pattern in $replacements.Keys) {
    $replacement = $replacements[$pattern]
    $matches = [regex]::Matches($content, $pattern)
    
    if ($matches.Count -gt 0) {
        $content = $content -replace $pattern, $replacement
        $updateCount += $matches.Count
        Write-Host "Updated $($matches.Count) references from $pattern to $replacement" -ForegroundColor Cyan
    }
}

# Write updated content back to file
Set-Content $htmlFile $content -NoNewline

Write-Host "`nUpdate complete!" -ForegroundColor Green
Write-Host "Updated $updateCount image references in index.html" -ForegroundColor Cyan
Write-Host "Original HTML backed up to: $backupFile" -ForegroundColor Yellow

# Show some examples of changes
Write-Host "`nExample changes made:" -ForegroundColor Magenta
Write-Host "  shoeimages/okshoes.png -> shoeimages/okshoes.webp" -ForegroundColor Gray
Write-Host "  accessoryimages/buldgeglasses (1).jpg -> accessoryimages/buldgeglasses (1).webp" -ForegroundColor Gray
Write-Host "  meimages/Mehead.png -> meimages/Mehead.webp" -ForegroundColor Gray
