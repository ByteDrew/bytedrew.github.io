const MUSIC_KEY_TIME = 'drewSwampMusicTime';
const MUSIC_KEY_MUTED = 'drewSwampMusicMuted';
const MUSIC_SRC = '../assets/DangerOnTheDanceFloor.mp3';

const audio = new Audio(MUSIC_SRC);
audio.loop = true;
audio.volume = 0.35;
audio.preload = 'auto';

const toggleBtn = document.getElementById('music-toggle');
const muteBtn = document.getElementById('music-mute');
const statusText = document.getElementById('music-status');

function saveState() {
  localStorage.setItem(MUSIC_KEY_TIME, String(audio.currentTime || 0));
  localStorage.setItem(MUSIC_KEY_MUTED, String(audio.muted));
}

function applySavedState() {
  const savedTime = parseFloat(localStorage.getItem(MUSIC_KEY_TIME) || '0');
  const savedMuted = localStorage.getItem(MUSIC_KEY_MUTED) === 'true';

  if (!Number.isNaN(savedTime) && savedTime > 0) {
    audio.currentTime = savedTime;
  }

  audio.muted = savedMuted;
  updateControls();
}

function updateControls() {
  if (!toggleBtn || !muteBtn || !statusText) return;

  toggleBtn.textContent = audio.paused ? '▶ Play music' : '❚❚ Pause music';
  muteBtn.textContent = audio.muted ? '🔇 Unmute' : '🔊 Mute';
  statusText.textContent = audio.muted ? 'Music muted' : 'Music playing';
}

function startPlayback() {
  audio.play().catch(() => {
    statusText.textContent = 'Autoplay is blocked by this browser on this page.';
  });
}

function attachEvents() {
  toggleBtn?.addEventListener('click', async () => {
    if (audio.paused) {
      await audio.play().catch(() => {});
    } else {
      audio.pause();
    }
    updateControls();
    saveState();
  });

  muteBtn?.addEventListener('click', () => {
    audio.muted = !audio.muted;
    updateControls();
    saveState();
  });

  audio.addEventListener('timeupdate', saveState);
  audio.addEventListener('play', updateControls);
  audio.addEventListener('pause', updateControls);
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && audio.paused) {
      audio.play().catch(() => {});
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  applySavedState();
  attachEvents();
  updateControls();
  startPlayback();
});
