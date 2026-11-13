@echo off
chcp 65001 >nul
title Lexora APK - GitHub Auto Uploader
echo ====================================================================
echo   Lexora English Lab - Capacitor Android APK GitHub Builder
echo ====================================================================
echo.
set /p REPO_URL="الصق رابط مستودع GitHub الفارغ هنا (مثال https://github.com/username/lexora-apk.git): "
if "%REPO_URL%"=="" (
    echo لم يتم إدخال الرابط!
    pause
    exit /b
)
git init
git add -A
git commit -m "Build Lexora Android APK via Capacitor"
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force
echo.
echo ====================================================================
echo   تم رفع المشروع بنجاح! افتح تبويب Actions أو Releases في GitHub
echo   لتحميل ملف Lexora-English-Lab.apk الجاهز للتثبيت على هاتفك!
echo ====================================================================
pause
