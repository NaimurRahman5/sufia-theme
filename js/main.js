/* =====================================
Template Name: 	Ucorpa
Author Name: Nthemer
Description: Ucorpa is a Multipurpose Corporate HTML5 Theme.
Version:	1.1
========================================*/     
/*=======================================
[Start Activation Code]
=========================================
	* Mobile Menu JS
	* Search JS
	* Home Slider JS
	* Portfolio Slider JS
	* Testimonial Slider JS
	* Clients Slider JS
	* Portfolio Single Slider JS
	* Counter JS
	* Magnific Popup JS
	* Video Popup JS
	* Stellar JS
	* Wow JS JS
	* Scroll Up JS
	* Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function($) {
    "use strict";
     $(document).on('ready', function() {
		
		/*=======================
		  Home Slider JS
		=========================*/ 
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 500,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});
		
		/*=======================
		  Client Slider Slider JS
		=========================*/ 
		$('.client-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:500,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-form').toggleClass('active');
		});
		
		$('.right-bar .add-bar').on( "click", function(){
		$('.sidebar').addClass('active');
		});
		
		$('.cross').on( "click", function(){
			$('.sidebar').removeClass('active');
		});
		
		
		/*=======================
		  CounterUp JS
		=========================*/ 
		$('.counter').counterUp({
			delay: 10,
			time: 1000
			
		});
		

	});
	
})(jQuery);