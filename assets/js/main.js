// Minimal JavaScript for mobile navigation and footer year.
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
