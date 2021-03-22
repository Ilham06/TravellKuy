// nav
window.addEventListener("scroll", function() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("navAnimate", window.scrollY > 50);
})

// carousel
jQuery(document).ready(function($) {
	"use strict";
	//  TESTIMONIALS CAROUSEL HOOK
	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});
