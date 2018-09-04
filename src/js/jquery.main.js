$(document).ready(function(){

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	// Collapse
	$('#reviews-carousel').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		navContainerClass: 'reviews__carousel-nav'
	});
});