# PRD — PUPUT BIRTHDAY HAIKYUU WEBSITE

## 1. PRODUCT OVERVIEW

### Product Name

**PUPUT Birthday Surprise**

### Product Type

Interactive static birthday website.

### Platform

Web browser.

### Target Device

- Desktop.
- Laptop.
- Tablet.
- Smartphone.

### Target User

PUPUT.

### Purpose

Membuat pengalaman ulang tahun digital yang personal, menyenangkan, bertema anime volleyball, dan memiliki unsur prank.

---

# 2. USER STORY

Sebagai PUPUT,

saya ingin membuka website hadiah ulang tahun yang bertema anime favorit saya,

sehingga saya mendapatkan pengalaman ulang tahun yang unik dan menyenangkan.

---

# 3. CORE INFORMATION

| Data | Value |
|---|---|
| Nama | PUPUT |
| Umur | 19 |
| Tanggal lahir | 25 Agustus 2007 |
| Ulang tahun | 25 Agustus |
| Anime favorit | Haikyuu!! |
| Tema | Volleyball |
| Database | Tidak ada |
| Backend | Tidak ada |
| Framework | Tidak ada |

---

# 4. PRODUCT GOALS

Website harus:

1. Terlihat menarik.
2. Memiliki nuansa Haikyuu/volleyball.
3. Memberikan ucapan ulang tahun personal.
4. Memiliki animasi.
5. Memiliki interaksi.
6. Memiliki prank button.
7. Bisa berjalan tanpa backend.
8. Bisa dibuka langsung melalui `index.html`.

---

# 5. NON-GOALS

Website tidak membutuhkan:

- Login.
- Register.
- Database.
- Backend.
- API.
- Payment.
- Admin.
- CMS.
- Dashboard.
- User account.
- Analytics.
- Server.

---

# 6. USER FLOW

```text
USER OPENS WEBSITE
        ↓
LANDING SCREEN
        ↓
"KLIK UNTUK MEMBUKA"
        ↓
CLICK
        ↓
OPENING ANIMATION
        ↓
BIRTHDAY REVEAL
        ↓
"HAPPY BIRTHDAY PUPUT"
        ↓
19 YEARS OLD
        ↓
BIRTHDAY CARD
        ↓
"KLAIM HADIAH"
        ↓
USER TRIES TO CLICK
        ↓
BUTTON ESCAPES
        ↓
PRANK
```

---

# 7. FEATURE REQUIREMENTS

## FR-01 — Landing Screen

Website harus menampilkan landing screen ketika pertama kali dibuka.

Komponen:

- Heading.
- Subtitle.
- Volleyball.
- CTA button.
- Background animation.

CTA:

**KLIK UNTUK MEMBUKA**

---

# 8. FR-02 — Opening Animation

Ketika CTA diklik:

1. Button menghilang.
2. Volleyball bergerak.
3. Speed lines muncul.
4. Screen transition.
5. Birthday scene muncul.

Durasi ideal:

**1–3 detik.**

Jangan membuat user menunggu terlalu lama.

---

# 9. FR-03 — Birthday Reveal

Tampilkan:

```text
HAPPY BIRTHDAY

PUPUT

19 YEARS OLD

25 AGUSTUS 2007
```

Setiap elemen muncul secara bertahap.

---

# 10. FR-04 — Birthday Message

Website harus memiliki ucapan utama.

Contoh:

> Selamat ulang tahun yang ke-19, Puput! 🎉
>
> Semoga di umur yang baru ini kamu selalu diberikan kebahagiaan, kesehatan, kesuksesan, dan banyak hal baik.
>
> Semoga semua yang kamu inginkan bisa tercapai.
>
> Tetap semangat, tetap kuat, dan jangan pernah menyerah.
>
> Seperti di Haikyuu!! — jatuh boleh, tapi bangkit lagi harus! 🏐🔥
>
> Happy 19th Birthday, Puput! ❤️

Teks dapat dimodifikasi oleh developer jika diperlukan.

---

# 11. FR-05 — Anime Theme

Gunakan elemen visual yang mengingatkan kepada anime volleyball.

Contoh:

- Volleyball.
- Court.
- Net.
- Scoreboard.
- Jersey number.
- Speed lines.
- Energetic typography.

Data karakter jika diperlukan harus bersifat lokal/dummy.

---

# 12. FR-06 — Birthday Card

Card harus berisi:

- Birthday title.
- Nama.
- Umur.
- Tanggal lahir.
- Birthday message.
- Decorative anime elements.
- Gift button.

---

# 13. FR-07 — Gift Prank

Button:

**🎁 KLAIM HADIAH**

Behavior:

Jika mouse/touch mendekati button:

```text
MOVE BUTTON
```

Button berpindah ke posisi random.

Constraint:

```text
0 <= X <= viewportWidth - buttonWidth

0 <= Y <= viewportHeight - buttonHeight
```

Dengan demikian button tidak keluar layar.

---

# 14. FR-08 — Anti Click

Button tidak boleh mudah diklik.

Trigger dapat menggunakan:

```javascript
mouseenter
mouseover
pointerenter
touchstart
```

Saat trigger aktif:

```text
randomizePosition()
increaseAttempt()
showFunnyMessage()
```

---

# 15. FR-09 — Prank Counter

Simpan jumlah percobaan.

Contoh:

```javascript
let attempts = 0;
```

Setiap tombol kabur:

```javascript
attempts++;
```

Pesan berdasarkan jumlah:

```text
1 → "Eh hampir! 😭"

2 → "Belum boleh!"

3 → "HAHAHA 😂"

4 → "Kejar terus 😎"

5 → "Hadiah masih jauh..."

10 → "NYERAH AJA LAH 😂"
```

---

# 16. FR-10 — Confetti

Confetti muncul setelah birthday reveal.

Implementasi:

- CSS animation.
- JavaScript generated elements.

Confetti harus otomatis hilang setelah beberapa detik.

---

# 17. FR-11 — Responsive

Website harus berfungsi pada:

```text
320px
375px
390px
430px
768px
1024px
1440px+
```

Tidak boleh terdapat horizontal scrolling yang tidak diperlukan.

---

# 18. FR-12 — Local Data

Semua informasi disimpan dalam JavaScript.

Contoh:

```javascript
const birthdayData = {
    name: "PUPUT",
    age: 19,
    birthDate: "25 Agustus 2007",
    anime: "Haikyuu!!"
};
```

Tidak menggunakan database.

---

# 19. ASSET REQUIREMENT

Folder:

```text
assets/
├── images/
├── audio/
└── icons/
```

Jika tidak tersedia gambar resmi, website harus tetap berfungsi menggunakan:

- CSS shapes.
- Emoji.
- SVG lokal.
- Placeholder lokal.

Website tidak boleh rusak hanya karena gambar eksternal tidak tersedia.

---

# 20. PERFORMANCE

Target:

- Fast loading.
- No unnecessary dependencies.
- No large JavaScript library.
- No heavy animation.
- No continuous expensive DOM operations.

Gunakan `requestAnimationFrame` jika diperlukan untuk animasi yang membutuhkan update posisi secara terus-menerus.

---

# 21. SECURITY

Karena website bersifat static:

- Jangan memasukkan API key.
- Jangan memasukkan credential.
- Jangan menggunakan backend.
- Jangan menggunakan eval().
- Hindari inline script jika tidak diperlukan.

---

# 22. ACCEPTANCE CRITERIA

Project dianggap selesai jika:

### Landing

- [ ] Landing page tampil.
- [ ] Tombol opening bekerja.
- [ ] Volleyball animation bekerja.
- [ ] Transition bekerja.

### Birthday

- [ ] Nama PUPUT tampil.
- [ ] Umur 19 tampil.
- [ ] Tanggal 25 Agustus 2007 tampil.
- [ ] Ucapan ulang tahun tampil.
- [ ] Animasi berjalan.

### Haikyuu Theme

- [ ] Visual volleyball tersedia.
- [ ] Nuansa anime sports terasa.
- [ ] Scoreboard/dekorasi tersedia.
- [ ] Warna sesuai design system.

### Prank

- [ ] Tombol "Klaim Hadiah" tersedia.
- [ ] Tombol bergerak ketika didekati.
- [ ] Tombol tidak keluar viewport.
- [ ] Percobaan dihitung.
- [ ] Pesan prank muncul.
- [ ] Mobile interaction diperhatikan.

### Technical

- [ ] Tidak menggunakan framework.
- [ ] Tidak menggunakan database.
- [ ] Tidak menggunakan backend.
- [ ] Tidak membutuhkan npm.
- [ ] `index.html` dapat dibuka langsung.
- [ ] Tidak terdapat error JavaScript.
- [ ] Responsive.

---

# 23. DEFINITION OF DONE

Project selesai ketika PUPUT dapat:

```text
OPEN WEBSITE
     ↓
CLICK
     ↓
SEE HAIKYUU-STYLE ANIMATION
     ↓
SEE PERSONAL BIRTHDAY MESSAGE
     ↓
SEE 19TH BIRTHDAY CARD
     ↓
SEE "CLAIM GIFT"
     ↓
TRY TO CLICK
     ↓
BUTTON RUNS AWAY 😂
```

Website harus terasa seperti sebuah **digital birthday surprise**, bukan sekadar halaman HTML berisi teks.

---

# 24. FINAL PRODUCT PRINCIPLE

**Simple technology, memorable experience.**

Tidak perlu teknologi rumit.

HTML + CSS + JavaScript sudah cukup.

Fokus utama:

**Visual + Animation + Personal Message + Prank Interaction.**