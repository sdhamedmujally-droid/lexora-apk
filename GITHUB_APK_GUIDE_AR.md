# دليل استخراج ملف `Lexora-English-Lab.apk` للهاتف عبر GitHub و Capacitor

تم تجهيز هذا المجلد بالكامل ليحتوي على:
1. **ملفات تطبيق Lexora الأخيرة كاملة** (تعمل مباشرة على الكمبيوتر، وتعمل داخل `www/` لبناء تطبيق الهاتف).
2. **إعدادات Capacitor 6 الكاملة** (`package.json` و `capacitor.config.json`).
3. **ضبط خاص لنظام Android WebView داخل `MainActivity.java`**:
   - تفعيل `setMediaPlaybackRequiresUserGesture(false)` لضمان استمرار قراءة القصص والمحادثات المتواصلة على الهاتف دون توقف بين الجمل.
   - تفعيل `setDomStorageEnabled(true)` و `IndexedDB` لحفظ الصوتيات والإحصائيات على ذاكرة الهاتف للأبد.
4. **ملف البناء التلقائي عبر GitHub Actions** (`.github/workflows/build-apk.yml`) الذي يبني التطبيق ويوقعه رقمياً (`Signed APK`) تلقائياً في دقيقتين!

## خطوات استخراج وتحميل ملف الـ APK على هاتفك (في دقيقتين):

1. افتح موقع [GitHub.com](https://github.com) وأنشئ مستودعاً جديداً (**New Repository**) باسم مثلاً `lexora-apk`.
2. اضغط على **uploading an existing file** (أو ارفع الملفات من جهازك) وارفع جميع الملفات والمجلدات الموجودة داخل هذا الملف المضغوط (بما فيها مجلد `.github` ومجلد `assets` والملفات الرئيسية) ثم اضغط **Commit changes**.
3. بمجرد رفع الملفات، اذهب إلى تبويب **Actions** في أعلى المستودع على GitHub:
   - ستجد عملية البناء **Build Lexora Android APK (Capacitor)** تعمل تلقائياً (تستغرق حوالي دقيقتين فقط).
4. بعد ظهور علامة الصح الخضراء (✓):
   - ادخل على عملية البناء في **Actions** وانزل للأسفل عند قسم **Artifacts** واضغط على **`Lexora-English-Lab-APK`** لتحميل التطبيق، **أو**
   - ادخل على قسم **Releases** في الصفحة الرئيسية للمستودع وحمّل ملف **`Lexora-English-Lab.apk`** مباشرة إلى هاتفك وثبّته!
