// Renungan — Mengapa Kita Hidup?
// Tema, animasi saat scroll, tombol ke atas, progres baca, dan bagikan.

(function () {
    'use strict';

    function safeGet(key) {
        try { return window.localStorage.getItem(key); } catch (e) { return null; }
    }
    function safeSet(key, value) {
        try { window.localStorage.setItem(key, value); } catch (e) { /* abaikan: mode privat */ }
    }

    // ---------- Theme Toggle ----------
    // Default: gelap. Pilihan tersimpan menang; kalau belum ada, ikuti sistem.
    var themeBtn = document.getElementById('themeBtn');
    var body = document.body;
    var savedTheme = safeGet('theme');

    if (savedTheme === 'light') {
        body.classList.add('light');
    } else if (savedTheme === 'dark') {
        body.classList.remove('light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.add('light');
    }

    function syncThemeButton() {
        if (!themeBtn) return;
        var isLight = body.classList.contains('light');
        themeBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        themeBtn.setAttribute('aria-label', isLight ? 'Ganti ke mode gelap' : 'Ganti ke mode terang');
    }
    syncThemeButton();

    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            body.classList.toggle('light');
            safeSet('theme', body.classList.contains('light') ? 'light' : 'dark');
            syncThemeButton();
        });
    }

    // ---------- Animasi saat scroll ----------
    var fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeElements.forEach(function (el) { observer.observe(el); });
    } else {
        // Fallback: tampilkan semua kalau browser lama
        fadeElements.forEach(function (el) { el.classList.add('visible'); });
    }

    // ---------- Tombol Ke Atas + progres baca ----------
    var backToTopBtn = document.getElementById('backToTop');
    var progressBar = document.getElementById('progressBar');

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;

        if (backToTopBtn) {
            if (y > 400) backToTopBtn.classList.add('show');
            else backToTopBtn.classList.remove('show');
        }

        if (progressBar) {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            var pct = max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0;
            progressBar.style.width = pct + '%';
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- Bagikan ----------
    var pageUrl = window.location.href;
    var pageTitle = document.title;
    var shareText = 'Renungan — Mengapa Kita Hidup? Tujuh renungan singkat tentang tujuan penciptaan, ujian, akhirat, amal, tawakal, syukur, dan ilmu yang bermanfaat.';
    var statusEl = document.getElementById('shareStatus');

    function setStatus(msg) {
        if (statusEl) statusEl.textContent = msg;
    }

    var wa = document.getElementById('shareWa');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + pageUrl);

    var tg = document.getElementById('shareTg');
    if (tg) tg.href = 'https://t.me/share/url?url=' + encodeURIComponent(pageUrl) + '&text=' + encodeURIComponent(shareText);

    var copyBtn = document.getElementById('copyLink');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            function done() {
                setStatus('Tautan disalin. Silakan tempel di WhatsApp, Telegram, atau grup mana pun.');
                copyBtn.textContent = 'Tautan Disalin ✓';
                setTimeout(function () { copyBtn.textContent = 'Salin Tautan'; }, 2500);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(pageUrl).then(done, function () { setStatus('Gagal menyalin — salin alamat dari bilah alamat browser.'); });
            } else {
                var ta = document.createElement('textarea');
                ta.value = pageUrl;
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); done(); }
                catch (e) { setStatus('Gagal menyalin — salin alamat dari bilah alamat browser.'); }
                document.body.removeChild(ta);
            }
        });
    }

    var nativeBtn = document.getElementById('shareNative');
    if (nativeBtn) {
        if (!navigator.share) {
            nativeBtn.style.display = 'none';
        } else {
            nativeBtn.addEventListener('click', function () {
                navigator.share({ title: pageTitle, text: shareText, url: pageUrl })
                    .catch(function () { /* pengguna membatalkan — bukan error */ });
            });
        }
    }
})();
