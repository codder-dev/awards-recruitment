
/* Final carousel visibility safeguard */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.hero-flyer-background, .hero-flyer-track, .hero-flyer-slide').forEach(function (el) {
    el.style.visibility = 'visible';
    el.style.opacity = '1';
  });
});
