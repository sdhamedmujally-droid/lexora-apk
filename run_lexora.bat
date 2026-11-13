@echo off
title Lexora English Lab (5000 Words)
echo ========================================================
echo   Lexora English Lab - 5000 Words Complete Edition
echo   Oxford 3000 ^& 5000 (A1 - C1) + Lifetime Offline Audio
echo ========================================================
echo.
echo Starting local server and offline audio engine on http://localhost:3000 ...
start "" "http://localhost:3000"
python "%~dp0lexora_server.py"
if %errorlevel% neq 0 (
    python -m http.server 3000 --directory "%~dp0"
)
pause
