# 🏐 PUPUT Birthday Surprise — Haikyuu Edition

Website ulang tahun interaktif untuk **PUPUT** (19 tahun, 25 Agustus 2007),
bertema anime **Haikyuu!!** dan volleyball, lengkap dengan tombol hadiah yang
sengaja sulit diklik. 😂

## Cara menjalankan
Tidak perlu npm / server / framework. Cukup buka:

```
index.html
```

di browser apa pun (Chrome/Edge/Firefox), di desktop maupun HP.

## Struktur
```
hbd/
├── index.html      → struktur (3 scene)
├── css/style.css   → visual & animasi (palet orange/black/white)
└── js/script.js    → interaksi (transisi scene, confetti, prank button)
```

## Alur
1. **Landing** — "HEY, PUPUT! 🏐" → klik *KLIK UNTUK MEMBUKA*.
2. **Birthday Reveal** — bola terbang + speed lines + confetti.
3. **Birthday Card** — ucapan personal + tombol **🎁 KLAIM HADIAH** yang
   kabur setiap didekati (mouse/touch). Pesan prank makin lucu tiap percobaan.
4. Kalau PUPUT berhasil mengklik tombolnya → overlay kemenangan muncul. 🎉

## Catatan teknis
- 100% HTML5 + CSS3 + Vanilla JS, tanpa dependency eksternal.
- Semua data lokal (`birthdayData`, karakter dummy) di `js/script.js`.
- Audio opsional (WebAudio bip) via tombol 🔇/🔊 — tanpa autoplay.
- Responsive 320px–1440px+, tombol prank tidak akan keluar viewport.
