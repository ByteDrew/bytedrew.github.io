// Load the shared sidebar include and signal when it's ready
document.addEventListener('DOMContentLoaded', async () => {
  const placeholder = document.getElementById('sidebar-placeholder');
  if (!placeholder) return;
  try {
    const resp = await fetch('/includes/sidebar.html');
    if (!resp.ok) throw new Error('Failed to fetch sidebar: ' + resp.status);
    const html = await resp.text();
    placeholder.innerHTML = html;
    // Recreate lucide icons inside loaded content
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
    // Notify other scripts that sidebar is present
    window.dispatchEvent(new Event('sidebar:loaded'));
  } catch (err) {
    console.error('loadSidebar error:', err);
  }
});

// Wait for the sidebar to load
window.addEventListener('sidebar:loaded', () => {
    const audio = document.getElementById('sidebarAudio');
    if (!audio) return;

    // Resume from last saved time
    const savedTime = localStorage.getItem('musicTime');
    if (savedTime) audio.currentTime = parseFloat(savedTime);

    // Resume play/pause state
    const savedPaused = localStorage.getItem('musicPaused');
    if (savedPaused === 'true') audio.pause();

    // Save time and pause/play before leaving page
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPaused', audio.paused);
    });
});
