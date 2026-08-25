# PROMPT — PUPUT BIRTHDAY HAIKYUU WEBSITE

## 1. ROLE

Anda adalah seorang **Senior Front-End Developer, UI/UX Designer, dan Creative Web Animator**.

Tugas Anda adalah membangun sebuah website ulang tahun interaktif untuk seseorang bernama **PUPUT**, dengan tema anime **Haikyuu!!** dan olahraga volleyball.

Website ini dibuat sebagai hadiah ulang tahun yang bersifat personal, playful, lucu, dan sedikit menjahili penerima melalui tombol hadiah yang sengaja dibuat sulit diklik.

---

# 2. INFORMASI UTAMA

Nama: **PUPUT**

Tanggal lahir: **25 Agustus 2007**

Usia: **19 tahun**

Tanggal ulang tahun: **25 Agustus**

Anime favorit: **Haikyuu!!**

Tema utama:

- Haikyuu!!
- Volleyball
- Anime
- Birthday
- Friendship
- Playful prank
- Celebration

---

# 3. TEKNOLOGI WAJIB

Gunakan hanya:

- HTML5
- CSS3
- Vanilla JavaScript

JANGAN menggunakan:

- React
- Next.js
- Vue
- Angular
- Svelte
- Tailwind CSS
- Bootstrap
- jQuery
- Node.js
- Backend
- Database
- API eksternal
- Authentication
- Firebase
- Supabase

Website harus dapat berjalan hanya dengan membuka:

`index.html`

---

# 4. KONSEP WEBSITE

Website memiliki beberapa tahap/scene.

## SCENE 1 — LANDING PAGE

Ketika website pertama kali dibuka, tampilkan halaman pembuka bertema volleyball anime.

Elemen:

- Background bertema lapangan volleyball.
- Bola volleyball sebagai elemen visual utama.
- Nuansa anime olahraga.
- Judul:
  **"HEY, PUPUT! 🏐"**
- Subtitle:
  **"Ada sesuatu buat kamu..."**
- Tombol besar:
  **"KLIK UNTUK MEMBUKA"**

Tombol harus memiliki hover animation.

Ketika tombol diklik:

- Mainkan transition.
- Bola volleyball dapat bergerak/terbang.
- Background berubah.
- Masuk ke birthday scene.

---

# 5. SCENE 2 — BIRTHDAY REVEAL

Tampilkan ucapan ulang tahun secara dramatis.

Contoh:

> HAPPY BIRTHDAY, PUPUT! 🎉

Kemudian:

> 19 TAHUN! 🏐🔥

Kemudian:

> 25 AGUSTUS 2007

Tambahkan ucapan utama yang hangat dan personal.

Contoh konsep:

> Selamat ulang tahun yang ke-19, Puput! 🎉
>
> Semoga di umur yang baru ini semua hal baik datang menghampiri kamu.
> Semoga makin bahagia, makin kuat, makin sukses, dan semua impian kamu bisa tercapai.
>
> Jangan lupa tetap semangat seperti tim Karasuno yang nggak pernah menyerah! 🏐🔥
>
> Have a great 19th birthday, Puput! ❤️

Teks boleh dibuat lebih playful dan tidak terlalu formal.

---

# 6. ANIMASI BIRTHDAY

Gunakan CSS animation dan JavaScript.

Animasi yang dapat digunakan:

- Volleyball bouncing.
- Confetti.
- Floating particles.
- Text reveal.
- Fade in.
- Scale in.
- Slide in.
- Shake.
- Glow.
- Background movement.
- Flying volleyball.
- Spark effects.

Jangan membuat animasi terlalu berat.

Prioritaskan:

- Smooth animation.
- Performance.
- Mobile compatibility.

---

# 7. HAIKYUU STYLE

Website harus terasa terinspirasi oleh anime volleyball seperti Haikyuu!!.

Gunakan elemen seperti:

- Volleyball court.
- Jersey number.
- Scoreboard.
- Net volleyball.
- Volleyball.
- Speed lines.
- Sports typography.
- Energetic motion.
- Orange/black/white visual direction.

Jangan membuat website terlihat seperti halaman fan wiki.

Website harus terasa seperti:

**"Anime birthday surprise."**

---

# 8. KARAKTER DAN DATA DUMMY

Gunakan data lokal/dummy.

Contoh struktur JavaScript:

```javascript
const birthdayData = {
    name: "PUPUT",
    age: 19,
    birthDate: "25 Agustus 2007",
    anime: "Haikyuu!!",
    theme: "Volleyball"
};
```

Jika membutuhkan data karakter Haikyuu, simpan dalam JavaScript/local data.

Contoh:

```javascript
const haikyuuCharacters = [
    {
        name: "Hinata",
        number: 10,
        position: "Middle Blocker"
    },
    {
        name: "Kageyama",
        number: 9,
        position: "Setter"
    }
];
```

Data tersebut hanya digunakan sebagai elemen dekoratif/interaktif.

Tidak perlu database.

---

# 9. SCENE 3 — BIRTHDAY CARD

Setelah animasi utama selesai, tampilkan birthday card.

Card berisi:

- Nama PUPUT.
- Usia 19.
- Tanggal ulang tahun.
- Ucapan.
- Elemen volleyball.
- Elemen anime.
- Tombol hadiah.

Contoh:

```text
🏐 HAPPY BIRTHDAY 🏐

PUPUT

19 YEARS OLD

25 AGUSTUS 2007

Semoga hari ini menjadi salah satu
hari terbaik buat kamu.

Keep fighting.
Keep jumping.
Keep believing.

🔥 NEVER GIVE UP! 🔥

[ 🎁 KLAIM HADIAH ]
```

---

# 10. TOMBOL KLAIM HADIAH — PRANK

Ini adalah fitur utama untuk menjahili PUPUT.

Tombol:

**🎁 KLAIM HADIAH**

Pada awalnya tombol terlihat normal.

Ketika cursor mendekati tombol:

- Tombol bergerak.
- Tombol berpindah posisi.
- Tombol tidak boleh mudah diklik.
- Posisi baru harus random.
- Jangan sampai keluar viewport.
- Jangan menyebabkan horizontal scrollbar.
- Tombol dapat bergerak ke kiri/kanan/atas/bawah.

Contoh behavior:

```text
Cursor mendekati tombol

        ↓

🎁 KLAIM HADIAH

        ↓

Tombol kabur

                         🎁 KLAIM HADIAH

        ↓

Cursor mengejar

        ↓

Tombol kabur lagi
```

Gunakan JavaScript.

---

# 11. PRANK ESCALATION

Buat prank semakin lucu.

Percobaan pertama:

> "Eh hampir! 😭"

Percobaan kedua:

> "Belum boleh 😭"

Percobaan ketiga:

> "HAHAHAHA"

Percobaan berikutnya:

> "Hadiahmu terlalu berharga 😎"

Setelah beberapa kali gagal:

> "MASIH MAU NYOBA?! 😂"

Jumlah percobaan dapat dihitung menggunakan JavaScript.

---

# 12. MOBILE SUPPORT

Website harus responsive.

Untuk mobile:

- Tombol tetap bisa berpindah.
- Jangan keluar layar.
- Touch interaction dapat digunakan.
- Layout birthday card menyesuaikan layar.
- Font tidak terlalu besar.
- Animasi tetap smooth.

Untuk mobile, gunakan:

```javascript
touchstart
touchmove
```

jika diperlukan.

---

# 13. AUDIO

Jika menambahkan audio:

- Jangan autoplay dengan suara keras.
- Gunakan tombol mute/unmute.
- Audio harus optional.
- Website tetap berfungsi tanpa audio.

Jika audio eksternal tidak tersedia, jangan bergantung kepada audio.

---

# 14. FILE STRUCTURE

Buat struktur sederhana:

```text
puput-birthday/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   ├── audio/
│   └── icons/
│
└── README.md
```

Tidak perlu folder backend.

Tidak perlu konfigurasi npm.

Tidak perlu package.json.

---

# 15. KODE

Gunakan kode yang:

- Bersih.
- Terstruktur.
- Mudah dibaca.
- Memiliki komentar seperlunya.
- Tidak menggunakan kode berlebihan.
- Tidak menggunakan library eksternal jika tidak diperlukan.

Pisahkan:

HTML → struktur

CSS → visual dan animasi

JavaScript → interaksi

---

# 16. UX FLOW

Flow website:

```text
OPEN WEBSITE
      ↓
LANDING PAGE
      ↓
KLIK UNTUK MEMBUKA
      ↓
TRANSITION
      ↓
BIRTHDAY REVEAL
      ↓
HAPPY BIRTHDAY PUPUT
      ↓
ANIMATION
      ↓
BIRTHDAY CARD
      ↓
KLAIM HADIAH
      ↓
BUTTON KABUR
      ↓
PRANK
```

---

# 17. IMPORTANT RULES

Jangan menambahkan:

- Login.
- Register.
- Database.
- Dashboard.
- Admin panel.
- API.
- Payment.
- Backend.
- Framework.

Ini adalah **website static birthday surprise**.

Prioritas:

1. Visual menarik.
2. Animasi smooth.
3. Tema volleyball/anime.
4. Ucapan personal.
5. Tombol prank.
6. Responsive.
7. Mudah dijalankan.

---

# 18. FINAL REQUIREMENT

Setelah selesai membuat website:

1. Pastikan `index.html` dapat dibuka langsung.
2. Pastikan tidak ada error JavaScript.
3. Pastikan seluruh tombol bekerja.
4. Pastikan animasi berjalan.
5. Pastikan prank button tidak mudah diklik.
6. Pastikan responsive.
7. Pastikan tidak ada dependency framework.
8. Pastikan semua data bersifat lokal/dummy.

Jangan berhenti pada desain atau pseudocode.

**Bangun website yang benar-benar dapat dijalankan.**