/* Site behaviour: mobile navigation, publication filters, footer year. */
(function () {
  'use strict';

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  function setNav(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(!nav.classList.contains('is-open'));
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) setNav(false);
    });
  }

  /* ---- Publication filters ---------------------------------------------- */
  var filterBar = document.querySelector('.pub-filters');

  if (filterBar) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var buttons = Array.prototype.slice.call(filterBar.querySelectorAll('button'));

    filterBar.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) return;

      var type = button.dataset.filter;

      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === button));
      });

      items.forEach(function (item) {
        item.hidden = !(type === 'all' || item.dataset.type === type);
      });
    });
  }

  /* ---- Footer year ------------------------------------------------------- */
  var year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
