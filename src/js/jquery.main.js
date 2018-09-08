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

	// function onScroll(event){
	// 	var scrollPos = $(document).scrollTop();
	// 	$('#js-navigation-menu a[href^="#"]').each(function () {
	// 			var currLink = $(this);
	// 			var refElement = $(currLink.attr("href"));
	// 			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	// 				$('#js-navigation-menu a').removeClass("active");
	// 				currLink.addClass("active");
	// 			}
	// 			else{
	// 					currLink.removeClass("active");
	// 			}
	// 	});
	// }

	//$(document).on("scroll", onScroll);

	// cache the navigation links 
	var $navigationLinks = $('#js-navigation-menu > li > a');
	// cache (in reversed order) the sections
	var $sections = $($("section").get().reverse());

	// map each section id to their corresponding navigation link
	var sectionIdTonavigationLink = {};
	$sections.each(function() {
			var id = $(this).attr('id');
			sectionIdTonavigationLink[id] = $('#js-navigation-menu > li > a[href=\\#' + id + ']');
	});

	// throttle function, enforces a minimum time interval
	function throttle(fn, interval) {
		var lastCall, timeoutId;
		return function () {
			var now = new Date().getTime();
			if (lastCall && now < (lastCall + interval) ) {
					// if we are inside the interval we wait
					clearTimeout(timeoutId);
					timeoutId = setTimeout(function () {
							lastCall = now;
							fn.call();
					}, interval - (now - lastCall) );
			} else {
					// otherwise, we directly call the function 
					lastCall = now;
					fn.call();
			}
		};
	}

	function highlightNavigation() {
		// get the current vertical position of the scroll bar
		var scrollPosition = $(window).scrollTop();

		// iterate the sections
		$sections.each(function() {
				var currentSection = $(this);
				// get the position of the section
				var sectionTop = currentSection.offset().top;

				// if the user has scrolled over the top of the section  
				if (scrollPosition >= sectionTop - 200) {
					// get the section id
					var id = currentSection.attr('id');
					// get the corresponding navigation link
					var $navigationLink = sectionIdTonavigationLink[id];
					// if the link is not active
					if (!$navigationLink.hasClass('active')) {
							// remove .active class from all the links
							$navigationLinks.removeClass('active');
							// add .active class to the current link
							$navigationLink.addClass('active');
					}
					// we have found our section, so we return false to exit the each loop
					return false;
				}
		});
	}

	$(window).scroll( throttle(highlightNavigation,100) );

});