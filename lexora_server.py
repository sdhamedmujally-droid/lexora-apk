#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Lexora Local Web & Offline Audio Caching Server (Port 3000)
Automatically downloads and saves word & sentence MP3s into ./offline_audio/
so they work 100% offline forever on your computer!
"""
import os
import sys
import json
import re
import urllib.request
import urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = 3000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(BASE_DIR, "offline_audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

def safe_filename(key):
    cleaned = re.sub(r"[^a-zA-Z0-9_\-]", "_", key or "audio")
    return cleaned[:120] + ".mp3"

class LexoraHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/__audio_cache__":
            params = urllib.parse.parse_qs(parsed.query)
            key = params.get("key", [""])[0]
            target_url = params.get("url", [""])[0]
            fname = safe_filename(key)
            fpath = os.path.join(AUDIO_DIR, fname)

            # 1. If already saved on disk in ./offline_audio/, serve immediately (works 100% offline!)
            if os.path.exists(fpath) and os.path.getsize(fpath) > 300:
                try:
                    with open(fpath, "rb") as f:
                        data = f.read()
                    self.send_response(200)
                    self.send_header("Content-Type", "audio/mpeg")
                    self.send_header("Content-Length", str(len(data)))
                    self.send_header("Cache-Control", "public, max-age=31536000, immutable")
                    self.end_headers()
                    self.wfile.write(data)
                    return
                except Exception:
                    pass

            # 2. Otherwise download from target_url, save permanently to ./offline_audio/, and serve
            if target_url:
                try:
                    req = urllib.request.Request(
                        target_url,
                        headers={
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                            "Accept": "audio/mpeg,audio/*;q=0.9,*/*;q=0.8"
                        }
                    )
                    with urllib.request.urlopen(req, timeout=8) as resp:
                        data = resp.read()
                        if data and len(data) > 300:
                            with open(fpath, "wb") as f:
                                f.write(data)
                            self.send_response(200)
                            self.send_header("Content-Type", "audio/mpeg")
                            self.send_header("Content-Length", str(len(data)))
                            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
                            self.end_headers()
                            self.wfile.write(data)
                            return
                except Exception:
                    pass

            self.send_response(404)
            self.end_headers()
            return

        if parsed.path == "/__audio_stats__":
            try:
                files = [f for f in os.listdir(AUDIO_DIR) if f.endswith(".mp3") and os.path.getsize(os.path.join(AUDIO_DIR, f)) > 300]
                payload = json.dumps({"count": len(files), "keys": [f[:-4] for f in files]}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers()
                self.wfile.write(payload)
                return
            except Exception:
                pass

        return super().do_GET()

    def log_message(self, format, *args):
        pass

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    print("========================================================")
    print("  Lexora English Lab - Local Server & Offline Audio Engine")
    print(f"  URL: http://localhost:{PORT}")
    print(f"  Offline Audio Folder: {AUDIO_DIR}")
    print("========================================================")
    server = ThreadingHTTPServer(("0.0.0.0", PORT), LexoraHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
