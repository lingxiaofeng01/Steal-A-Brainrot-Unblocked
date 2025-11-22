@echo off
echo ========================================
echo Pushing to GitHub
echo ========================================
echo.

echo Current commits to push:
git log origin/master..HEAD --oneline
echo.

echo Attempting to push...
git push origin master

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Pushed to GitHub
    echo ========================================
) else (
    echo.
    echo ========================================
    echo FAILED! Could not push to GitHub
    echo ========================================
    echo.
    echo Possible solutions:
    echo 1. Check your internet connection
    echo 2. Try using a VPN or disable VPN
    echo 3. Check if you need to configure a proxy
    echo 4. Try using GitHub Desktop
    echo.
)

pause

