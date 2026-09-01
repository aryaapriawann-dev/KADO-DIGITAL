# DESIGN SYSTEM — PUPUT BIRTHDAY HAIKYUU

## Konsep
**"PUPUT — Birthday Volleyball Surprise"**
- Gaya: anime sports · energetic · playful · youthful · birthday celebration
- Inspirasi: Haikyuu!! + volleyball court + birthday party
- Website terasa seperti membuka scene anime, bukan website ulang tahun biasa

## Palet warna
| Warna       | Hex       | Penggunaan                          |
|-------------|-----------|--------------------------------------|
| Orange      | `#F97316` | CTA, highlight, volleyball, glow     |
| Hitam       | `#0A0A0A` | Background, header, text contrast    |
| Panel gelap | `#141818` | Card, panel, overlay (semi-transparent) |
| Putih       | `#FFFFFF` | Text, volleyball, card               |
| Abu terang  | `#D4D4D8` | Secondary text, border               |

## Typography
- Font: `Segoe UI`, system-ui, -apple-system, sans-serif
- Heading: `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: -0.02em` (judul besar) atau `0.06–0.3em` (label kecil)
- Ukuran: `clamp()` responsif, max judul landing `84px`, nama reveal `110px`

## Scene & layout
- **Scene 1 — Landing**: bola volleyball 3D + judul "HEY, PUPUT!" + tombol "KLIK UNTUK MEMBUKA" + date kecil
- **Scene 2 — Reveal**: full-screen, teks staggered (Match Point → HAPPY BIRTHDAY → PUPUT → 19 TAHUN → 25 AGUSTUS 2007 → surat + tombol zoom + lanjut)
- **Scene 3 — Card**: glass panel di tengah, ucapan tulisan, tombol "KLAIM HADIAH" (prank)

## Elemen visual
- **Volleyball 3D**: sphere + 3 ring orbit (`preserve-3d`, animasi floating)
- **Scoreboard**: chip glass di atas bola (KARASUNO 24 — 25 PUPUT)
- **Speed lines**: dekorasi anime, muncul saat transisi
- **Particles**: debu/orange dots melayang di landing & card
- **Confetti**: canvas ringan, auto berhenti 8 detik
- **Jersey numbers**: 10 & 9 dekoratif (outline tipis) di reveal

## Tombol
- `.btn-main`: orange solid, rounded 12px, shadow, hover translateY(-2px), active scale(0.97)
- `.btn-gift` (prank): posisi di dalam card, kabur saat hover/touch (`left`/`top` transition), shake animasi, setiap ke-7 diam sejenak (`catchable` → bisa klik)

## Prank
- Tombol "KLAIM HADIAH" kabur saat cursor mendekat
- Teks kecil melayang di posisi baru: "EH! 😭" / "HAHAHA 😂" / "KECEPIT GAK? 😭"
- Pesan prank berdasarkan urutan percobaan (FR-09)
- Win: tiap 7 percobaan tombol catchable → klik muncul overlay "EH... KEDAPETAN?!"

## Card ucapan
- `.letter-card`: foto diputar -2.5deg, washi tape di dua sudut atas, caption quote + tanda tangan
- Lightbox: klik kartu atau tombol zoom → full-screen img, tutup klik mana saja / Escape

## Audio opsional
- WebAudio bip triangle saat transisi scene (kalau tidak mute)

## Responsif & a11y
- Max-width card `min(92vw, 480px)`, padding disesuaikan mobile
- `prefers-reduced-motion: reduce` → animasi 0.01ms
- Semua scene pakai `aria-hidden` pada elemen dekorasi; tombol punya label jelas
