 // Wait for DOM and Lucide to load
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Lucide icons
      lucide.createIcons();

      // State
      let mobileMenuOpen = false;
      let darkMode = localStorage.getItem('darkMode') === 'true';

      // DOM elements
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
          themeIconContainer.innerHTML = '<i data-lucide="moon" class="w-5 h-5" style="color: #a855f7"></i><span class="text-sm">Dark</span>';
          themeToggle.style.background = '#1f2937';
          themeToggle.classList.add('dark-theme');
        } else {
          body.classList.remove('dark');
          body.classList.add('light');
          themeIconContainer.innerHTML = '<i data-lucide="sun" class="w-5 h-5" style="color: #f97316"></i><span class="text-sm">Light</span>';
          themeToggle.style.background = 'linear-gradient(135deg, #f3e8ff, #fed7aa)';
          themeToggle.classList.remove('dark-theme');
        }
        // Re-render icons after theme change
        setTimeout(() => lucide.createIcons(), 50);
      }

      // Toggle mobile menu
      function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenuOpen) {
          sidebar.classList.add('open');
          overlay.classList.add('show');
          document.body.style.overflow = 'hidden';
        } else {
          sidebar.classList.remove('open');
          overlay.classList.remove('show');
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
          icon.style.color = '';
          text.classList.remove('gradient-text');
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
          icon.style.color = 'var(--color-primary)';
          text.classList.add('gradient-text');
        }
      }

      // Navigation handler
      function handleNavClick(e) {
        // Close mobile menu on desktop navigation
        if (window.innerWidth >= 1025 && mobileMenuOpen) {
          toggleMobileMenu();
        }
      }

      // Event listeners
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
      overlay.addEventListener('click', toggleMobileMenu);
      themeToggle.addEventListener('click', toggleDarkMode);
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
      setTimeout(() => lucide.createIcons(), 100);
    });