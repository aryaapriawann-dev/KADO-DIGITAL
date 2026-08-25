/* ============================================================
   PUPUT — Birthday Volleyball Surprise · script.js
   Semua data lokal/dummy. Tanpa framework, tanpa backend.
   ============================================================ */

"use strict";

// ---------------- DATA LOKAL ----------------
const birthdayData = {
  name: "PUPUT",
  age: 19,
  birthDate: "25 Agustus 2007",
  anime: "Haikyuu!!",
  theme: "Volleyball"
};

const haikyuuCharacters = [
  { name: "Hinata",   number: 10, position: "Middle Blocker" },
  { name: "Kageyama", number: 9,  position: "Setter" }
];

// Pesan prank berdasarkan jumlah percobaan — PERSIS urutan PRD FR-09
const prankMessages = {
  1: "Eh hampir! 😭",
  2: "Belum boleh!",
  3: "HAHAHA 😂",
  4: "Kejar terus 😎",
  5: "Hadiah masih jauh...",
  10: "NYERAH AJA LAH 😂"
};
const WIN_EVERY = 7; // tiap percobaan ke-7 tombol diam → bisa kedapetan (desktop & mobile)

// ---------------- ELEMEN ----------------
const sceneLanding = document.getElementById("sceneLanding");
const sceneReveal  = document.getElementById("sceneReveal");
const sceneCard    = document.getElementById("sceneCard");
const btnOpen      = document.getElementById("btnOpen");
const btnToCard    = document.getElementById("btnToCard");
const volleyball   = document.getElementById("volleyballMain");
const speedLines   = document.getElementById("speedLines");
const btnGift      = document.getElementById("btnGift");
const giftZone     = document.getElementById("giftZone");
const prankMsgEl   = document.getElementById("prankMsg");
const winOverlay   = document.getElementById("winOverlay");
const winAttempts  = document.getElementById("winAttempts");
const btnRestart   = document.getElementById("btnRestart");
const btnAudio     = document.getElementById("btnAudio");

let attempts = 0;
let lastOffsetX = 0, lastOffsetY = 0; // posisi kabur terakhir (offset dalam gift-zone)

// ---------------- UTIL ----------------
function showScene(scene) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  scene.classList.add("active");
}

function fireSpeedLines() {
  speedLines.classList.remove("fire");
  void speedLines.offsetWidth; // restart animation
  speedLines.classList.add("fire");
}

// Partikel mengambang sederhana
function spawnParticles(containerId, count) {
  const box = document.getElementById(containerId);
  if (!box || box.childElementCount > 0) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = Math.random() * 6 + 3;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (Math.random() * 8 + 7) + "s";
    p.style.animationDelay = (Math.random() * 6) + "s";
    if (Math.random() > 0.5) p.style.background = "rgba(255,255,255,0.35)";
    box.appendChild(p);
  }
}

// ---------------- SCENE 1 → 2 : TRANSITION ----------------
btnOpen.addEventListener("click", () => {
  fireSpeedLines();
  volleyball.classList.add("fly");
  btnOpen.disabled = true;

  setTimeout(() => {
    showScene(sceneReveal);
    startConfetti();
  }, 900);
});

// ---------------- SCENE 2 → 3 : BIRTHDAY CARD ----------------
btnToCard.addEventListener("click", () => {
  fireSpeedLines();
  setTimeout(() => {
    showScene(sceneCard);
    spawnParticles("particlesCard", 18);
    resetGiftButton();
  }, 350);
});

// ---------------- CONFETTI (canvas ringan, auto berhenti) ----------------
function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function fit() { canvas.width = innerWidth; canvas.height = innerHeight; }
  fit();

  const colors = ["#f97316", "#ffffff", "#facc15", "#2563eb", "#e5e7eb"];
  // Jumlah dibatasi agar tidak berat di HP
  const pieces = Array.from({ length: Math.min(90, Math.floor(innerWidth / 8)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    w: Math.random() * 8 + 4,
    h: Math.random() * 5 + 3,
    vy: Math.random() * 2.2 + 1.2,
    vx: Math.random() * 1.4 - 0.7,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.15,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  let running = true;
  setTimeout(() => { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }, 8000);

  (function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const c of pieces) {
      c.y += c.vy;
      c.x += c.vx;
      c.rot += c.vr;
      if (c.y > canvas.height + 12) { c.y = -12; c.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    }
    requestAnimationFrame(draw);
  })();

  addEventListener("resize", fit);
}

// ---------------- PRANK BUTTON (FR-07 / FR-08 / FR-09) ----------------
function moveGiftButton() {
  attempts++;

  // Tombol bergerak RELATIF terhadap gift-zone (di dalam card).
  // Offset acak terbatas → prank tetap jalan tapi gak lari jauh dari card.
  const zone = giftZone.getBoundingClientRect();
  const bw = btnGift.offsetWidth, bh = btnGift.offsetHeight;
  const RANGE_X = Math.max(0, (zone.width - bw) / 2 - 6);
  const RANGE_Y = Math.max(0, zone.height - bh - 30); // sisakan ruang hint bawah

  let nx, ny, tries = 0;
  do {
    nx = Math.random() * RANGE_X * 2 - RANGE_X; // -RANGE..+RANGE dari center
    ny = Math.random() * RANGE_Y;
    tries++;
  } while (tries < 20 && Math.hypot(nx, ny - lastOffsetY) < 55);

  lastOffsetX = nx; lastOffsetY = ny;

  btnGift.style.left = `calc(50% + ${nx}px)`;
  btnGift.style.top  = `calc(100% - ${bh + 22}px + ${ny - RANGE_Y / 2}px)`;
  btnGift.style.transform = "translateX(-50%)";

  btnGift.classList.remove("shake");
  void btnGift.offsetWidth;
  btnGift.classList.add("shake");

  // desain.md §14: teks kecil melayang di posisi BARU tombol, lalu menghilang
  const zr = giftZone.getBoundingClientRect();
  spawnFloatText(zr.left + zr.width / 2 + nx, Math.max(zr.top - 6, 10));

  // Win condition: tiap percobaan ke-N tombol diam sejenak → bisa diklik
  if (attempts % WIN_EVERY === 0) {
    btnGift.classList.add("catchable");
  } else {
    btnGift.classList.remove("catchable");
  }

  showPrankMessage(attempts);
}

// Teks melayang singkat ("EH! 😭" / "HAHAHA 😂" / "KECEPIT GAK? 😭")
function spawnFloatText(x, y) {
  const el = document.createElement("span");
  el.className = "float-text";
  el.textContent = ["EH! 😭", "HAHAHA 😂", "KECEPIT GAK? 😭"][attempts % 3];
  el.style.left = Math.min(Math.max(x, 40), window.innerWidth - 40) + "px";
  el.style.top = Math.max(y, 10) + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

function showPrankMessage(count) {
  const msg = prankMessages[count] ||
    (count % 2 === 0 ? "Masih kejar? 😂" : `Percobaan ke-${count} gagal 😭`);
  prankMsgEl.textContent = msg;
  prankMsgEl.classList.remove("show");
  void prankMsgEl.offsetWidth;
  prankMsgEl.classList.add("show");
}

function resetGiftButton() {
  attempts = 0;
  lastOffsetX = 0;
  lastOffsetY = 0;
  // Kembali ke posisi default: tengah bawah gift-zone (di dalam card)
  btnGift.style.left = "50%";
  btnGift.style.top = "";
  btnGift.style.bottom = "22px";
  btnGift.style.transform = "translateX(-50%)";
}

// Desktop: kabur sekali per hover — JANGAN triple-fire
// (dulu mouseenter+mouseover+pointerenter jalan barengan = 3x kabur dalam
// satu hover → tombol lompat-lompat di bawah kursor, terasa lemot & kursor "hilang")
let lastEscape = 0;
function tryEscape() {
  const now = performance.now();
  if (now - lastEscape < 350) return;      // cooldown 350ms anti spam
  if (btnGift.classList.contains("catchable")) return;
  lastEscape = now;
  moveGiftButton();
}
btnGift.addEventListener("pointerenter", tryEscape);

// Mobile: FIX BUG LAMA — touchstart dulu mengkaburkan tombol sebelum click
// sempat terjadi, sehingga di HP tombol mustahil kedapetan. Sekarang:
// touchstart tetap mengkaburkan (prank), TAPI saat catchable kita biarkan
// event click berjalan normal → overlay kemenangan bisa muncul di mobile.
btnGift.addEventListener("touchstart", (e) => {
  if (btnGift.classList.contains("catchable")) return; // biarkan click jalan
  e.preventDefault();      // cegah click sintetis supaya tidak dobel kabur
  lastEscape = performance.now();
  moveGiftButton();
}, { passive: false });

btnGift.addEventListener("click", () => {
  attempts++;
  winAttempts.textContent =
    `PERCOBAAN KEJAR: ${Math.max(attempts - 1, 0)}× KABUR`;
  winOverlay.classList.add("show");
  burstWinConfetti();
});

btnRestart.addEventListener("click", () => {
  winOverlay.classList.remove("show");
  attempts = 0;
  showScene(sceneLanding);
  volleyball.classList.remove("fly");
  btnOpen.disabled = false;
});

// ---------------- WIN BURST ----------------
function burstWinConfetti() {
  // pakai emoji DOM ringan sebentar
  for (let i = 0; i < 24; i++) {
    const el = document.createElement("div");
    el.textContent = ["🎉", "🏐", "✨", "🔥"][i % 4];
    el.style.cssText = `
      position:fixed;left:${Math.random()*100}vw;top:-40px;font-size:${16+Math.random()*22}px;
      z-index:120;pointer-events:none;
      transition:transform ${1.4+Math.random()}s ease-in, opacity 1.8s ease-in;`;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = `translateY(${innerHeight+80}px) rotate(${(Math.random()-0.5)*360}deg)`;
      el.style.opacity = "0";
    });
    setTimeout(() => el.remove(), 2400);
  }
}

// ---------------- LIGHTBOX SURAT UCAPAN ----------------
const letterLightbox = document.createElement("div");
letterLightbox.className = "letter-lightbox";
letterLightbox.innerHTML =
  '<img src="ucapan.png" alt="Kartu ucapan dari Tsukishima Kei" draggable="false">' +
  "<p>klik di mana saja untuk menutup</p>";
document.body.appendChild(letterLightbox);

function openLetterZoom()  { letterLightbox.classList.add("show"); }
function closeLetterZoom() { letterLightbox.classList.remove("show"); }

document.getElementById("btnZoomLetter").addEventListener("click", openLetterZoom);
document.getElementById("letterCard").addEventListener("click", openLetterZoom);
letterLightbox.addEventListener("click", closeLetterZoom);
addEventListener("keydown", (e) => { if (e.key === "Escape") closeLetterZoom(); });

// ---------------- AUDIO OPSIONAL (WebAudio bip, tanpa file eksternal) ----------------
let audioCtx = null, muted = true;
btnAudio.addEventListener("click", () => {
  muted = !muted;
  btnAudio.textContent = muted ? "🔇" : "🔊";
  if (!muted && !audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
});

// Bip halus saat transisi antar scene (kalau unmute)
[btnOpen, btnToCard].forEach(btn =>
  btn.addEventListener("click", () => playBlip())
);
function playBlip() {
  if (muted || !audioCtx) return;
  try {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.type = "triangle";
    o.frequency.setValueAtTime(660, audioCtx.currentTime);
    o.frequency.exponentialRampToValueAtTime(990, audioCtx.currentTime + 0.12);
    g.gain.setValueAtTime(0.06, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    o.start(); o.stop(audioCtx.currentTime + 0.26);
  } catch (_) { /* audio optional */ }
}

// ---------------- INIT ----------------
spawnParticles("particlesLanding", 16);

// ---------------- PARALLAX KAMERA 3D ----------------
// Gerak mouse = kamera miring sedikit; bg bergerak berlawanan (depth).
// Damped lerp via rAF agar terasa fisik, bukan snap.
(function parallaxCamera() {
  const stage = document.getElementById("stage");
  const bg = document.getElementById("bgImage");
  if (!stage || !bg || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let tx = 0, ty = 0;   // target (-1..1)
  let cx = 0, cy = 0;   // current

  addEventListener("pointermove", (e) => {
    tx = (e.clientX / innerWidth) * 2 - 1;
    ty = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  addEventListener("deviceorientation", (e) => {
    if (e.gamma == null) return;
    tx = Math.max(-1, Math.min(1, e.gamma / 30));
    ty = Math.max(-1, Math.min(1, ((e.beta || 45) - 45) / 30));
  }, { passive: true });

  (function loop() {
    cx += (tx - cx) * 0.06; // damping — interruptible feel
    cy += (ty - cy) * 0.06;
    // Saat scene card aktif, kamera DIKUNCI lurus — stage yang berputar-putar
    // bikin posisi visual tombol geser di bawah kursor (kursor "hilang").
    if (sceneCard.classList.contains("active")) {
      tx = 0; ty = 0;
    }
    // Hanya update DOM kalau perubahannya berarti (>0.01deg).
    // Dulu loop ini nulis style SETIAP FRAME walau diam → repaint terus,
    // bikin klik tombol terasa lemot & hover state kacau.
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ||
        !stage.style.transform) {
      stage.style.transform =
        `rotateY(${cx * 1.4}deg) rotateX(${cy * -1.0}deg)`;
      bg.style.marginLeft = `${cx * -14}px`;
      bg.style.marginTop  = `${cy * -10}px`;
    }
    requestAnimationFrame(loop);
  })();
})();

// Hint kecil di bawah tombol hadiah
const hint = document.createElement("p");
hint.className = "hint";
hint.textContent = "(coba aja klik... kalau bisa 🤭)";
giftZone.appendChild(hint);
