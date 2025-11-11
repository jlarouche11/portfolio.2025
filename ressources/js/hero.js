var swiper = new Swiper('.home-hero .hero-gallery .hero-gallery-slider', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	allowTouchMove: false,
	slidesPerView: 1,
	centeredSlides: true,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 100,
		modifier: 1,
		scale: 0.9,
		slideShadows: true
	},
	loop: true,
	spaceBetween: 0,
	speed: 700,
	breakpoints: {
		768: {
			slidesPerView: 2,
			coverflowEffect: {
				scale: 0.7
			}
		}
	}
});
