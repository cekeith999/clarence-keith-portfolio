@echo off
echo Converting all portfolio images to WebP format...
echo.

REM Run the conversion script
powershell -ExecutionPolicy Bypass -File "convert-to-webp.ps1"

echo.
echo Press any key to continue with HTML path updates...
pause >nul

REM Run the HTML update script
powershell -ExecutionPolicy Bypass -File "update-html-paths.ps1"

echo.
echo All done! Your images have been converted to WebP and HTML has been updated.
echo.
pause
