(function () {
  'use strict';

  const nav       = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');

  // -----------------------------------------------
  // 1. Navbar blur on scroll
  // -----------------------------------------------
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // -----------------------------------------------
  // 2. Mobile hamburger toggle
  // -----------------------------------------------
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-mobile a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -----------------------------------------------
  // 3. Active nav link — URL-based for multi-page
  // -----------------------------------------------
  (function setActiveNav() {
    const path = window.location.pathname;

    // Normalise: strip trailing slash, get last segment
    const segment = path.replace(/\/$/, '').split('/').pop() || '';

    document.querySelectorAll('[data-section]').forEach(function (link) {
      const section = link.dataset.section;
      let isActive  = false;

      if (section === 'about'   && segment === 'about.html')   isActive = true;
      if (section === 'contact' && segment === 'contact.html') isActive = true;
      if (section === 'projects') {
        // active on projects.html, projects/index.html, or any projects/* detail page
        isActive = segment === 'projects.html' || path.includes('/projects/');
      }

      link.classList.toggle('active', isActive);
    });
  })();

  // -----------------------------------------------
  // 4. Scroll-triggered fade-in (IntersectionObserver)
  // -----------------------------------------------
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  }

})();
