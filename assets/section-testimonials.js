document.addEventListener('DOMContentLoaded', function () {
    // Testimonials Carousel Functionality
    const testimonialsContainers = document.querySelectorAll('[id^="testimonialsSlider"]');

    testimonialsContainers.forEach(container => {
        const sectionId = container.id.replace('testimonialsSlider', '');
        const cards = container.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll(`#testimonialsDots${sectionId} .testimonials__dot`);

        let currentIndex = 0;
        let autoSlideInterval;
        let isUserInteracting = false;

        function preloadImages() {
            cards.forEach(card => {
                const img = card.querySelector('img');
                if (img && !img.complete) {
                    const tempImg = new Image();
                    tempImg.src = img.src;
                }
            });
        }

        function showSlide(index, animate = true) {
            cards.forEach((card, i) => {
                card.style.transitionDuration = animate ? '0.5s' : '0s';
                card.classList.toggle('active', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            if (!isUserInteracting) {
                currentIndex = (currentIndex + 1) % cards.length;
                showSlide(currentIndex);
            }
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }

        // Initialize
        if (cards.length > 0) {
            preloadImages();
            showSlide(0, false);
            setTimeout(startAutoSlide, 1000);
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                isUserInteracting = true;
                currentIndex = index;
                showSlide(currentIndex);
                stopAutoSlide();

                setTimeout(() => {
                    isUserInteracting = false;
                    startAutoSlide();
                }, 3000);
            });
        });

        // Keyboard navigation
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
                showSlide(currentIndex);
                stopAutoSlide();
                startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % cards.length;
                showSlide(currentIndex);
                stopAutoSlide();
                startAutoSlide();
            }
        });

        // Pause on hover
        container.addEventListener('mouseenter', () => {
            isUserInteracting = true;
            stopAutoSlide();
        });

        container.addEventListener('mouseleave', () => {
            isUserInteracting = false;
            startAutoSlide();
        });

        // Pause on focus for accessibility
        container.addEventListener('focusin', stopAutoSlide);
        container.addEventListener('focusout', startAutoSlide);
    });
});