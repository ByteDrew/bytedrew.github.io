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
