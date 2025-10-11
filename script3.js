    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons();
      }

      setTimeout(() => document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('in')), 100);
      setTimeout(() => {
        const nodes = document.querySelectorAll('.reveal-up');
        nodes.forEach((el,i) => setTimeout(()=>el.classList.add('in'), i*120));
      }, 200);
    });

    const nav = document.getElementById('mainNav');
    function onScroll() {
      if (window.scrollY > 50) {
        nav.classList.add('bg-gray-950/95', 'backdrop-blur-lg', 'shadow-lg');
      } else {
        nav.classList.remove('bg-gray-950/95', 'backdrop-blur-lg', 'shadow-lg');
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    function toggleMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle('hidden');
    }
    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);

    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! We will contact you soon.');
        form.reset();
      });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
