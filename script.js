/**
 * ========================================================
 * CUTE BIRTHDAY SURPRISE - JAVASCRIPT
 * Full Interactivity, Web Audio API Music Box & SFX,
 * Canvas Confetti Cannon, and Romantic Mini-Games
 * ========================================================
 */

// --- 1. SOUND & MUSIC ENGINE (Web Audio API - 100% Offline & Reliable) ---
let audioCtx = null;
let isMusicPlaying = false;
let melodyInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a sweet music box note
function playTone(freq, type = 'sine', duration = 0.4, delay = 0, volume = 0.15) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

// Sound Effects
function sfxSparkle() {
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
  notes.forEach((freq, idx) => {
    playTone(freq, 'triangle', 0.35, idx * 0.06, 0.12);
  });
}

function sfxPop() {
  playTone(400, 'sine', 0.1, 0, 0.2);
  playTone(800, 'triangle', 0.15, 0.04, 0.15);
}

function sfxBlowCandle() {
  const ctx = getAudioContext();
  if (!ctx) return;
  // Soft gentle breath
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(250, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.4);
  gain.gain.setValueAtTime(0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.45);

  setTimeout(sfxSparkle, 300);
}

function sfxFanfare() {
  const melody = [
    { f: 523.25, d: 0.15 }, // C5
    { f: 659.25, d: 0.15 }, // E5
    { f: 783.99, d: 0.15 }, // G5
    { f: 1046.50, d: 0.45 } // C6
  ];
  let time = 0;
  melody.forEach(note => {
    playTone(note.f, 'sine', note.d, time, 0.22);
    time += 0.16;
  });
}

// Romantic Birthday Music Box Sequence
const hbdMelody = [
  // Happy Birthday notes
  { f: 261.63, d: 0.3 }, // C4
  { f: 261.63, d: 0.3 }, // C4
  { f: 293.66, d: 0.6 }, // D4
  { f: 261.63, d: 0.6 }, // C4
  { f: 349.23, d: 0.6 }, // F4
  { f: 329.63, d: 1.0 }, // E4

  { f: 261.63, d: 0.3 }, // C4
  { f: 261.63, d: 0.3 }, // C4
  { f: 293.66, d: 0.6 }, // D4
  { f: 261.63, d: 0.6 }, // C4
  { f: 392.00, d: 0.6 }, // G4
  { f: 349.23, d: 1.0 }, // F4

  { f: 261.63, d: 0.3 }, // C4
  { f: 261.63, d: 0.3 }, // C4
  { f: 523.25, d: 0.6 }, // C5
  { f: 440.00, d: 0.6 }, // A4
  { f: 349.23, d: 0.6 }, // F4
  { f: 329.63, d: 0.6 }, // E4
  { f: 293.66, d: 0.8 }, // D4

  { f: 466.16, d: 0.3 }, // Bb4
  { f: 466.16, d: 0.3 }, // Bb4
  { f: 440.00, d: 0.6 }, // A4
  { f: 349.23, d: 0.6 }, // F4
  { f: 392.00, d: 0.6 }, // G4
  { f: 349.23, d: 1.2 }  // F4
];

function startMusicBox() {
  if (isMusicPlaying) return;
  isMusicPlaying = true;
  updateMusicButton();

  let noteIndex = 0;
  function scheduleNextNote() {
    if (!isMusicPlaying) return;
    const note = hbdMelody[noteIndex];
    // Gentle music box sound with subtle harmonic
    playTone(note.f, 'sine', note.d * 1.2, 0, 0.12);
    playTone(note.f * 2, 'triangle', note.d * 0.8, 0, 0.04);

    noteIndex = (noteIndex + 1) % hbdMelody.length;
    melodyInterval = setTimeout(scheduleNextNote, note.d * 750);
  }

  scheduleNextNote();
}

function stopMusicBox() {
  isMusicPlaying = false;
  if (melodyInterval) {
    clearTimeout(melodyInterval);
    melodyInterval = null;
  }
  updateMusicButton();
}

function updateMusicButton() {
  const btn = document.getElementById('music-toggle');
  if (!btn) return;
  const label = btn.querySelector('.music-label');
  const icon = btn.querySelector('.icon');
  if (isMusicPlaying) {
    label.textContent = 'Music: On 🎵';
    icon.textContent = '🎶';
    btn.style.borderColor = '#ff758f';
  } else {
    label.textContent = 'Music: Off';
    icon.textContent = '🎵';
    btn.style.borderColor = 'transparent';
  }
}

// --- 2. CONFETTI & FIREWORKS ENGINE ---
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor(x, y, isExplosion = false) {
    this.x = x ?? Math.random() * canvas.width;
    this.y = y ?? -10;
    this.size = Math.random() * 8 + 5;
    this.shape = Math.random() > 0.4 ? 'circle' : (Math.random() > 0.5 ? 'heart' : 'rect');
    this.color = ['#ff758f', '#ffb3c1', '#ffd166', '#06d6a0', '#118ab2', '#b5179e', '#fff'][Math.floor(Math.random() * 7)];
    
    if (isExplosion) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.gravity = 0.25;
    } else {
      this.vx = Math.random() * 3 - 1.5;
      this.vy = Math.random() * 3 + 2;
      this.gravity = 0.05;
    }

    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
    this.opacity = 1;
    this.life = isExplosion ? 120 : 300;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.rotation += this.rotationSpeed;
    this.life--;
    if (this.life < 30) {
      this.opacity = this.life / 30;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;

    if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.shape === 'rect') {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
    } else if (this.shape === 'heart') {
      ctx.font = `${this.size * 1.5}px sans-serif`;
      ctx.fillText('💖', -this.size / 2, this.size / 2);
    }

    ctx.restore();
  }
}

function launchConfetti(x = canvas.width / 2, y = canvas.height / 2, count = 75) {
  for (let i = 0; i < count; i++) {
    particles.push(new ConfettiParticle(x, y, true));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.life <= 0 || p.y > canvas.height + 20) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// --- 3. AMBIENT BACKGROUND HEARTS ---
function createAmbientHearts() {
  const container = document.getElementById('bg-decorations');
  if (!container) return;
  const icons = ['💖', '🌸', '✨', '💕', '🥰', '🎈'];
  for (let i = 0; i < 16; i++) {
    const heart = document.createElement('div');
    heart.className = 'ambient-heart';
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = `${Math.random() * 95}%`;
    heart.style.animationDuration = `${8 + Math.random() * 10}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    container.appendChild(heart);
  }
}
createAmbientHearts();

// --- 4. SPARKLE CURSOR TRAIL ---
window.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.85) {
    createCursorSparkle(e.clientX, e.clientY);
  }
});
window.addEventListener('touchmove', (e) => {
  if (e.touches[0] && Math.random() > 0.75) {
    createCursorSparkle(e.touches[0].clientX, e.touches[0].clientY);
  }
});

function createCursorSparkle(x, y) {
  const el = document.createElement('div');
  el.textContent = Math.random() > 0.5 ? '✨' : '💖';
  el.style.position = 'fixed';
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.pointerEvents = 'none';
  el.style.fontSize = '14px';
  el.style.zIndex = '999';
  el.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
  document.body.appendChild(el);

  setTimeout(() => {
    el.style.transform = `translate(${Math.random() * 30 - 15}px, -30px) scale(0)`;
    el.style.opacity = '0';
  }, 10);

  setTimeout(() => el.remove(), 600);
}

// --- 5. STAGE MANAGEMENT & FLOW ---
function showStage(stageId) {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('active');
  });
  const target = document.getElementById(stageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// STAGE 1: Gift Box Unwrap
function openGiftBox() {
  sfxSparkle();
  startMusicBox();

  const lid = document.querySelector('.gift-lid');
  if (lid) {
    lid.style.transform = 'translateY(-60px) rotate(-15deg)';
  }

  launchConfetti(window.innerWidth / 2, window.innerHeight / 2, 80);

  setTimeout(() => {
    showStage('stage-cake');
  }, 700);
}

document.getElementById('gift-box-trigger')?.addEventListener('click', openGiftBox);
document.getElementById('btn-open-gift')?.addEventListener('click', openGiftBox);

// STAGE 2: Blow the Birthday Candle
let candleBlown = false;
function blowCandle() {
  if (candleBlown) return;
  candleBlown = true;

  sfxBlowCandle();
  const candle = document.getElementById('candle');
  candle?.classList.add('blown');

  launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 100);

  setTimeout(() => {
    sfxFanfare();
    document.getElementById('wish-result')?.classList.remove('hidden');
    document.getElementById('btn-to-letter')?.classList.remove('hidden');
  }, 600);
}

document.getElementById('cake-trigger')?.addEventListener('click', blowCandle);
document.getElementById('candle')?.addEventListener('click', blowCandle);
document.getElementById('btn-to-letter')?.addEventListener('click', () => {
  sfxPop();
  showStage('stage-letter');
});

// STAGE 3: Love Letter
document.getElementById('btn-to-memories')?.addEventListener('click', () => {
  sfxSparkle();
  showStage('stage-memories');
});

// STAGE 4: Polaroid Photo Upload
document.querySelectorAll('.file-input').forEach(input => {
  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const targetImgId = e.target.dataset.target;
      reader.onload = function(evt) {
        const img = document.getElementById(targetImgId);
        if (img) {
          img.src = evt.target.result;
          sfxSparkle();
          launchConfetti(window.innerWidth / 2, window.innerHeight / 2, 40);
        }
      };
      reader.readAsDataURL(file);
    }
  });
});

document.getElementById('btn-to-reasons')?.addEventListener('click', () => {
  sfxPop();
  showStage('stage-reasons');
});

// STAGE 5: "Reasons Why I Love You" Jar
const reasonsList = [
  "Your sweet smile makes my worst days feel instantly warm and safe. 🌸",
  "The adorable face you make when you get excited about delicious food! 🍰",
  "How caring and gentle your heart is to everyone around you. 💖",
  "Your silly jokes that always manage to make me laugh until my stomach hurts. 😆",
  "The way your hand fits perfectly inside mine. 🤝💕",
  "How deeply you love and support my dreams, always being my #1 cheerleader. ✨",
  "Your cute sleepy voice when you just wake up in the morning. 🥺",
  "Every single quiet cafe moment we spend just talking about everything and nothing. ☕",
  "How your eyes sparkle whenever you talk about things you love. ✨",
  "Because you are not just my girlfriend, you are my best friend and soulmate. 🌷",
  "The warm hugs you give that make all my worries disappear into thin air. 🫂",
  "You make the ordinary moments feel like magical fairytale memories. 🏰",
  "Your patience, your kindness, and the way you always understand me. 💫",
  "Because you are the prettiest girl in every single room you walk into! 👑",
  "Just because you are simply, beautifully, wonderfully YOU! 🥰"
];

let reasonIndex = 0;
let loveCounterValue = 1000;

function drawNextReason() {
  sfxPop();
  const counterEl = document.getElementById('note-counter');
  const textEl = document.getElementById('note-text');
  const loveStatEl = document.getElementById('love-counter');
  const jar = document.getElementById('love-jar-trigger');

  // Wiggle jar
  if (jar) {
    jar.style.transform = 'scale(1.1) rotate(6deg)';
    setTimeout(() => { jar.style.transform = 'scale(1) rotate(0deg)'; }, 200);
  }

  // Next reason
  reasonIndex = (reasonIndex + 1) % reasonsList.length;
  loveCounterValue += 500;

  if (counterEl) counterEl.textContent = `Reason #${reasonIndex + 1}`;
  if (textEl) {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = reasonsList[reasonIndex];
      textEl.style.opacity = '1';
    }, 150);
  }
  if (loveStatEl) {
    loveStatEl.textContent = `${loveCounterValue}%`;
  }

  launchConfetti(window.innerWidth / 2, window.innerHeight * 0.6, 25);
}

document.getElementById('love-jar-trigger')?.addEventListener('click', drawNextReason);
document.getElementById('btn-to-proposal')?.addEventListener('click', () => {
  sfxSparkle();
  showStage('stage-proposal');
});

// STAGE 6: Playful Proposal & Running "No" Button
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const funnyTip = document.getElementById('funny-tip');

const playfulDodgeQuotes = [
  "Oops, missed me! Try clicking YES instead! 😜",
  "Nope, no escaping! Only YES is allowed! 🥰",
  "Nice try, cutie! But you're stuck with me forever! 💕",
  "Your finger slipped! The YES button is right over there! 👉💖",
  "Error 404: 'No' option not found in my heart! 🌸"
];
let dodgeIndex = 0;

function dodgeNoButton() {
  sfxPop();
  const maxOffset = 130;
  const randomX = (Math.random() - 0.5) * maxOffset * 2;
  const randomY = (Math.random() - 0.5) * maxOffset * 1.5;

  btnNo.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.9)`;

  if (funnyTip) {
    funnyTip.textContent = playfulDodgeQuotes[dodgeIndex % playfulDodgeQuotes.length];
    dodgeIndex++;
  }
}

btnNo?.addEventListener('mouseover', dodgeNoButton);
btnNo?.addEventListener('touchstart', (e) => {
  e.preventDefault();
  dodgeNoButton();
});
btnNo?.addEventListener('click', dodgeNoButton);

// "YES" Click -> Ultimate Celebration!
btnYes?.addEventListener('click', () => {
  sfxFanfare();
  launchConfetti(window.innerWidth / 2, window.innerHeight / 2, 200);
  
  // Multiple firework bursts
  setTimeout(() => launchConfetti(window.innerWidth * 0.25, window.innerHeight * 0.35, 120), 250);
  setTimeout(() => launchConfetti(window.innerWidth * 0.75, window.innerHeight * 0.35, 120), 500);
  setTimeout(() => launchConfetti(window.innerWidth * 0.5, window.innerHeight * 0.25, 150), 750);

  const modal = document.getElementById('celebration-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
});

// Modal Actions
document.getElementById('btn-fireworks')?.addEventListener('click', () => {
  sfxFanfare();
  launchConfetti(Math.random() * window.innerWidth, Math.random() * (window.innerHeight * 0.6), 150);
});

document.getElementById('btn-restart')?.addEventListener('click', () => {
  sfxPop();
  document.getElementById('celebration-modal')?.classList.add('hidden');
  candleBlown = false;
  document.getElementById('candle')?.classList.remove('blown');
  document.getElementById('wish-result')?.classList.add('hidden');
  document.getElementById('btn-to-letter')?.classList.add('hidden');
  if (btnNo) btnNo.style.transform = 'translate(0, 0)';
  showStage('stage-gift');
});

// Music Toggle Button
document.getElementById('music-toggle')?.addEventListener('click', () => {
  if (isMusicPlaying) {
    stopMusicBox();
  } else {
    startMusicBox();
  }
});
