# DESIGN SYSTEM — PUPUT BIRTHDAY HAIKYUU

## 1. DESIGN CONCEPT

Nama konsep:

**"PUPUT — Birthday Volleyball Surprise"**

Gaya visual:

- Anime sports.
- Energetic.
- Playful.
- Youthful.
- Birthday celebration.
- Sedikit chaotic untuk bagian prank.

Inspirasi utama:

**Haikyuu!! + Volleyball Court + Birthday Party**

Website harus terasa seperti membuka sebuah scene anime, bukan seperti website ulang tahun biasa.

---

# 2. COLOR PALETTE

Gunakan kombinasi warna yang terinspirasi dari atmosfer volleyball dan anime.

### Primary

Orange:

```text
#F97316
```

Digunakan untuk:

- CTA.
- Highlight.
- Volleyball.
- Glow.
- Accent.

### Dark

Black:

```text
#0F0F0F
```

Digunakan untuk:

- Background.
- Header.
- Text contrast.

### Secondary Dark

```text
#1F2937
```

Digunakan untuk:

- Card.
- Panel.
- Overlay.

### White

```text
#FFFFFF
```

Digunakan untuk:

- Text.
- Volleyball.
- Card.

### Light Gray

```text
#E5E7EB
```

Digunakan untuk:

- Secondary text.
- Border.

---

# 3. TYPOGRAPHY

Gunakan font yang memiliki karakter:

- Bold.
- Sporty.
- Energetic.
- Mudah dibaca.

Jika tidak menggunakan font eksternal, gunakan:

```css
font-family: Arial, Helvetica, sans-serif;
```

Untuk heading:

```css
font-weight: 900;
text-transform: uppercase;
letter-spacing: 2px;
```

---

# 4. LANDING PAGE

## Layout

Full viewport:

```text
┌──────────────────────────────┐
│                              │
│          🏐                  │
│                              │
│        HEY, PUPUT!           │
│                              │
│   Ada sesuatu buat kamu...   │
│                              │
│   ┌──────────────────────┐   │
│   │ KLIK UNTUK MEMBUKA   │   │
│   └──────────────────────┘   │
│                              │
│       25 AUGUST 2026         │
│                              │
└──────────────────────────────┘
```

Background dapat berupa:

- Gradient gelap.
- Garis lapangan volleyball.
- Speed lines.
- Floating particles.

---

# 5. VOLLEYBALL ELEMENT

Bola volleyball menjadi elemen visual utama.

Posisi:

- Center.
- Slightly above heading.

Animasi:

```text
bounce
rotate
float
scale
```

Contoh:

```css
animation:
    volleyballBounce 2s ease-in-out infinite;
```

Ketika tombol landing diklik:

```text
🏐
 ↓
 ↗
   ↗
     →
        💥
```

Bola dapat terbang keluar layar sebagai transition.

---

# 6. BUTTON DESIGN

Button utama:

```text
┌────────────────────────────┐
│   🏐 KLIK UNTUK MEMBUKA    │
└────────────────────────────┘
```

Style:

- Rounded.
- Bold.
- High contrast.
- Shadow.
- Hover scale.
- Active scale.

Hover:

```text
scale(1.05)
```

Active:

```text
scale(0.95)
```

---

# 7. BIRTHDAY REVEAL

Gunakan full-screen section.

Contoh:

```text
          ✨

     HAPPY BIRTHDAY

         PUPUT

        🏐

      19 TAHUN

   25 AGUSTUS 2007

          🎉
```

Animasi urutan:

1. Background muncul.
2. Volleyball masuk.
3. "HAPPY BIRTHDAY" muncul.
4. Nama PUPUT muncul.
5. Umur muncul.
6. Confetti muncul.

Gunakan staggered animation.

---

# 8. BIRTHDAY CARD

Card berada di tengah.

```text
┌─────────────────────────────┐
│          🏐                 │
│                             │
│     HAPPY BIRTHDAY          │
│                             │
│         PUPUT               │
│                             │
│       AGE: 19               │
│                             │
│    25 AGUSTUS 2007          │
│                             │
│  Semoga semua impianmu      │
│  tercapai dan selalu        │
│  bahagia! ❤️                │
│                             │
│  ┌───────────────────────┐  │
│  │ 🎁 KLAIM HADIAH        │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

Card:

- Border.
- Shadow.
- Rounded corners.
- Slight glass effect.
- Subtle glow.

---

# 9. HAIKYUU VISUAL ELEMENTS

Gunakan dekorasi:

### Volleyball

```text
🏐
```

### Jersey number

```text
10
9
```

### Scoreboard

Contoh:

```text
┌──────────────────────┐
│ KARASUNO     PUPUT   │
│    24          24    │
└──────────────────────┘
```

Tidak perlu dibuat sebagai sistem pertandingan sungguhan.

Hanya dekorasi.

---

# 10. BACKGROUND

Background tidak boleh terlalu ramai.

Gunakan layer:

```text
Background
    ↓
Court Lines
    ↓
Particles
    ↓
Volleyball
    ↓
Text
    ↓
UI
```

Gunakan pseudo-element:

```css
::before
::after
```

untuk dekorasi.

---

# 11. CONFETTI

Setelah birthday reveal:

- Confetti turun.
- Random position.
- Random rotation.
- Random delay.

Gunakan JavaScript untuk membuat beberapa elemen confetti.

Jangan membuat terlalu banyak elemen sehingga menyebabkan lag.

---

# 12. SPEED LINES

Untuk memberikan nuansa anime sports.

Speed lines dapat muncul saat:

- Opening.
- Volleyball bergerak.
- Birthday reveal.

Gunakan CSS:

```css
transform
opacity
animation
```

---

# 13. PRANK BUTTON DESIGN

Normal:

```text
┌────────────────────┐
│ 🎁 KLAIM HADIAH    │
└────────────────────┘
```

Ketika cursor mendekat:

```text
cursor → 🎁
             ↓
          tombol kabur
```

Button harus:

- `position: fixed` atau `absolute`.
- Tetap berada dalam viewport.
- Memiliki random destination.
- Memiliki transition.
- Tidak menyebabkan layout berubah.

---

# 14. PRANK VISUAL

Setiap kali tombol kabur:

Tambahkan teks kecil:

```text
EH! 😭
```

atau:

```text
HAHAHA 😂
```

atau:

```text
KECEPIT GAK? 😭
```

Teks muncul sebentar kemudian menghilang.

---

# 15. RESPONSIVE DESIGN

### Desktop

Gunakan layout centered.

### Tablet

Kurangi ukuran heading.

### Mobile

Gunakan:

```css
width: 90%;
max-width: 420px;
```

Birthday card harus tetap nyaman dibaca.

Button prank tidak boleh:

- Keluar viewport.
- Terpotong.
- Menyebabkan horizontal scrolling.

---

# 16. ACCESSIBILITY

Pastikan:

- Kontras text cukup.
- Button memiliki text jelas.
- Jangan mengandalkan warna saja.
- Gunakan semantic HTML.
- Tambahkan `aria-label` jika diperlukan.

---

# 17. ANIMATION PRINCIPLE

Animasi harus:

- Smooth.
- Cepat.
- Tidak berlebihan.
- Memiliki timing berbeda.

Gunakan:

```text
ease-out
ease-in-out
cubic-bezier
```

Hindari animasi yang terus menerus pada semua elemen karena dapat membuat website terasa berantakan.

---

# 18. OVERALL MOOD

Target perasaan ketika PUPUT membuka website:

**Opening:**

"Ini website apa?"

↓

**Reveal:**

"HAHA ternyata ucapan ulang tahun."

↓

**Anime animation:**

"Wah keren."

↓

**Birthday card:**

"🥹"

↓

**Klaim hadiah:**

"Oh ada hadiah!"

↓

**Button kabur:**

"LAH?! 😭"

↓

**Prank:**

"ANJIRRRR 😂"

Itulah pengalaman yang harus dibangun.