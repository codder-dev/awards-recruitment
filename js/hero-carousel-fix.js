document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('flyerCarousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.flyer-slide'));
    if (!slides.length) return;

    slides.forEach((slide, index) => {
        slide.style.visibility = 'visible';
        slide.style.opacity = '1';
        if (index === 0) slide.classList.add('active');
    });

    // script.js normally owns the timing. This fallback only takes over if
    // its initializer did not run, preventing a blank Home hero.
    setTimeout(function () {
        if (window.totalFlyerSlides) return;
        let current = 0;
        window.__heroCarouselFallback = setInterval(function () {
            const all = Array.from(carousel.querySelectorAll('.flyer-slide'));
            if (!all.length) return;
            const next = (current + 1) % all.length;
            all.forEach((slide, i) => {
                slide.classList.remove('active', 'previous');
                if (i === current) slide.classList.add('previous');
            });
            requestAnimationFrame(() => all[next].classList.add('active'));
            current = next;
        }, 6500);
    }, 500);
});
