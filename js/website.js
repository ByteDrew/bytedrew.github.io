// Wait for DOM and ensure sidebar is loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
  // Initialize when sidebar exists, otherwise wait for sidebar:loaded
  function maybeInit() {
    if (document.getElementById('sidebar')) {
      initializeSite();
    } else {
      window.addEventListener('sidebar:loaded', initializeSite, { once: true });
    }
  }

  function initializeSite() {
    // Initialize Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      lucide.createIcons();
    }

    // State
    let mobileMenuOpen = false;
    let darkMode = localStorage.getItem('darkMode') === 'true';

    // DOM elements (query after sidebar exists)
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('overlay');
    const themeToggle = document.getElementById('themeToggle');
    const themeIconContainer = document.getElementById('themeIconContainer');
    const navLinks = document.querySelectorAll('.nav-link');

    // Initialize theme
    function initTheme() {
      if (darkMode) {
        body.classList.remove('light');
        body.classList.add('dark');
        if (themeIconContainer) themeIconContainer.innerHTML = '<i data-lucide="moon" class="w-5 h-5" style="color: #a855f7"></i><span class="text-sm">Dark</span>';
        if (themeToggle) themeToggle.style.background = '#1f2937';
        if (themeToggle) themeToggle.classList.add('dark-theme');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        if (themeIconContainer) themeIconContainer.innerHTML = '<i data-lucide="sun" class="w-5 h-5" style="color: #f97316"></i><span class="text-sm">Light</span>';
        if (themeToggle) themeToggle.style.background = 'linear-gradient(135deg, #f3e8ff, #fed7aa)';
        if (themeToggle) themeToggle.classList.remove('dark-theme');
      }
      // Re-render icons after theme change
      setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 50);
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
      mobileMenuOpen = !mobileMenuOpen;
      if (!sidebar) return;
      if (mobileMenuOpen) {
        sidebar.classList.add('open');
        if (overlay) overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
      } else {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    }

    // Toggle dark mode
    function toggleDarkMode() {
      darkMode = !darkMode;
      localStorage.setItem('darkMode', darkMode);
      initTheme();
    }

    // Update active nav link based on current page
    function updateActiveNav() {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      navLinks.forEach(link => {
        link.classList.remove('nav-link-active');
        const icon = link.querySelector('.nav-icon');
        const text = link.querySelector('span');
        if (icon) icon.style.color = '';
        if (text) text.classList.remove('gradient-text');
      });

      // Find matching link and activate it
      const activeLink = Array.from(navLinks).find(link => {
        const href = link.getAttribute('href');
        return href === currentPath || href.split('/').pop() === currentPath;
      });

      if (activeLink) {
        activeLink.classList.add('nav-link-active');
        const icon = activeLink.querySelector('.nav-icon');
        const text = activeLink.querySelector('span');
        if (icon) icon.style.color = 'var(--color-primary)';
        if (text) text.classList.add('gradient-text');
      }
    }

    // Navigation handler
    function handleNavClick(e) {
      // Close mobile menu on desktop navigation
      if (window.innerWidth >= 1025 && mobileMenuOpen) {
        toggleMobileMenu();
      }
    }

    // Event listeners (guard when elements may be missing)
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (overlay) overlay.addEventListener('click', toggleMobileMenu);
    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    // Initialize everything
    initTheme();
    updateActiveNav();

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1025 && mobileMenuOpen) {
        toggleMobileMenu();
      }
    });

    // Re-initialize icons after short delay for theme changes
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 100);
  }

  maybeInit();
});