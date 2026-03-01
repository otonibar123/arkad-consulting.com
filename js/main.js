/* ========================================
   Arkad Consulting — Scripts
   ======================================== */

/* --- Reveal au scroll --- */
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('reveal--visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

/* --- Smooth scroll pour les ancres --- */
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* --- Page nav : état actif au scroll --- */
var sections = document.querySelectorAll('section[id]');
var pageNavLinks = document.querySelectorAll('.page-nav__link');

window.addEventListener('scroll', function () {
  var current = '';
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  pageNavLinks.forEach(function (link) {
    link.classList.remove('page-nav__link--active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('page-nav__link--active');
    }
  });
});

/* --- Formulaire de contact (simulation) --- */
var contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var btn = contactForm.querySelector('.form__submit .btn');
  btn.textContent = '\u2713 Message envoyé';
  btn.classList.add('btn--sent');
});
