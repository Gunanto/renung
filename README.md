# Renungan — Mengapa Kita Hidup?

Lima renungan singkat tentang mengapa kita hidup: tujuan penciptaan, hidup sebagai ujian, persiapan akhirat, berbuat baik dan menyayangi, serta berserah diri kepada Allah. Dilengkapi ayat Al-Qur'an (dengan teks Arab), satu hadits, dan doa refleksi hati.

Dibuat untuk dibaca pelan-pelan — dan dibagikan.

## Isi

1. Kita Diciptakan untuk Beribadah — QS Adz-Dzariyat: 56
2. Hidup adalah Ujian
3. Kita Sedang Menuju Akhirat — HR Muslim no. 2858
4. Hidup untuk Berbuat Baik dan Menyayangi
5. Berserah Diri kepada Ketentuan Allah
6. Refleksi Hati + QS Al-An'am: 162

## Fitur

- Tema gelap (default) dan terang, tersimpan di perangkat pembaca; kalau belum memilih, mengikuti pengaturan sistem
- Responsif: nyaman dibaca di HP, tablet, dan laptop
- Navigasi antar-renungan, animasi muncul saat scroll, bilah progres baca, tombol kembali ke atas
- Tombol bagikan: WhatsApp, Telegram, salin tautan, dan bagikan bawaan perangkat (di HP)
- Meta description dan Open Graph, supaya tampil rapi saat tautan dibagikan ke WhatsApp/Telegram
- Tanpa build, tanpa backend, tanpa database — cukup buka `index.html`

## Menjalankan lokal

Buka `index.html` di browser, atau dari terminal di folder ini:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000

## Menerbitkan (GitHub Pages)

1. Salin semua file di folder ini ke repo `Gunanto/renung`, commit, lalu push ke branch `main`.
2. Di GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main, folder: /(root)** → Save.
3. Tunggu 1–2 menit, situs tampil di `https://gunanto.github.io/renung/`.

## Berkas

| Berkas | Fungsi |
| --- | --- |
| `index.html` | Struktur dan isi renungan |
| `style.css` | Seluruh tampilan: tema gelap/terang, kartu, navigasi, responsif |
| `script.js` | Toggle tema, animasi scroll, progres baca, tombol bagikan |
| `favicon.svg` | Ikon situs (bulan sabit emas) |
| `README.md` | Dokumen ini |

## Catatan

Isi bebas dibagikan untuk kebaikan. Mohon jaga keutuhan kutipan ayat dan hadits saat menyalin atau mengutip ulang.

Wallahu a'lam.
