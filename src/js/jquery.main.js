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

	$(".collapse__group.active").find(".collapse__group-body").slideDown();

	$('.collapse').on('click', '.collapse__group-header', function(){
		var collapseInner = $(this).parents('.collapse').find('.collapse__group');

		$(this)
			.parent()
			.toggleClass('active');

		$(this)
			.next()
			.slideToggle('slow');

		collapseInner
			.not($(this).parent())
			.removeClass('active');

		collapseInner
			.children('.collapse__group-body')
			.not($(this).next())
			.slideUp("slow");

	});
});