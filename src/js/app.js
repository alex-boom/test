import HP from './helpers';

(function ($) {

	// When DOM is ready
		$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		items: 1,
		nav:true,
		navText : [],
	})

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	})

}(jQuery));