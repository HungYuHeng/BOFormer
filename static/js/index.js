window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', function() {
    // Simple carousel implementation
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        dots: document.querySelectorAll('.carousel-dot'),
        currentSlide: 0,
        
        init: function() {
            // Add event listeners for navigation
            document.querySelector('.carousel-nav-prev').addEventListener('click', () => this.prevSlide());
            document.querySelector('.carousel-nav-next').addEventListener('click', () => this.nextSlide());
            
            // Add event listeners for dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });
        },
        
        showSlide: function(index) {
            // Hide all slides
            this.slides.forEach(slide => slide.classList.remove('is-active'));
            this.dots.forEach(dot => dot.classList.remove('is-active'));
            
            // Show current slide
            this.slides[index].classList.add('is-active');
            this.dots[index].classList.add('is-active');
            this.currentSlide = index;
        },
        
        nextSlide: function() {
            let nextIndex = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(nextIndex);
        },
        
        prevSlide: function() {
            let prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.showSlide(prevIndex);
        },
        
        goToSlide: function(index) {
            this.showSlide(index);
        }
    };
    
    // Initialize the carousel
    carousel.init();
});
