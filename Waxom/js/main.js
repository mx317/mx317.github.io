$(function() {

	/* Header Fixed */

	var header = $('.header'),
		IntroHeight = $('.intro').innerHeight(),
		scrollOffset = $(window).scrollTop();

	function checkScroll(scrollOffset) {
		if ( scrollOffset >= IntroHeight ) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}
	}

	checkScroll(scrollOffset);

	$(window).on('scroll', function() {
		var scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	/* Menu */

	$('.menu').on('click', function(event) {
		event.preventDefault();
		
		$('.menu__line').toggleClass('menu__line--active');
		$('.header__nav').slideToggle();
	});

	$(window).resize(function() { // resizing show/hide menu
		var windowWidth = $(this).width();

		if (windowWidth >= 992) {
			$('.header__nav').css('display', 'flex');
		} else {
			$('.header__nav').css('display', 'none');
		}
	});

	$(document).mouseup(function(event) {
		var div = $('.header__nav + .menu');
		
		if (!div.is(event.target) && div.has(event.target).length === 0 && $(window).width() <= 992) {
			$('.header__nav').hide();
			$('.menu__line').removeClass('menu__line--active');
		}	
	});

	/* Anchor scroll */

	$('.header__link').on('click', function(event){
		event.preventDefault();

		var blockId = $(this).attr('data-scroll'),
			blockOffset = $(blockId).offset().top;

		$('body, html').animate ({
			scrollTop: blockOffset
		}, 1000);		

		$('.header__nav a').removeClass('header__link--active');
		$(this).addClass('header__link--active');
		$('.menu__line').removeClass('menu__line--active');
		
	});

	/* Intro slider */
	$('.intro__item').css('opacity', '1');
	$('.intro__inner').slick({
		lazyLoad: 'progressive', 
		accessibility: false,
		adaptiveHeight: true,
		dots: true,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnFocus: false,
		appendArrows: $('.intro'),
		appendDots: $('.intro')
 	});



	/* Posts slider*/
	$('.card__slider').slick({
	  adaptiveHeight: true,
	  accessibility: false,
	  arrows: true,
	  infinite: false,
	  autoplay: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplaySpeed: 2500,
	  pauseOnFocus: false,
	  accessibility: false,
	  responsive: [
    	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
      	  }
    	},
    	{
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
    	  }
    	}
	 ]
}); 

	/* Projects */

	$('.project__filter-btn').on('click', function(event){
		event.preventDefault();

		$('.project__filter-btn').removeClass('project__filter-btn--active');
		$(this).addClass('project__filter-btn--active');

		var filter = $(this).attr('data-filter');
			filterAll = $('.project__filter-btn:first-child').attr('data-filter');
	
	/* Hide/show projects*/ 
	if (filter != filterAll) {
	   $('.card__inner').hide();
	   $('[data-id="'+ filter +'"]').show();
	} else {
		$('.card__inner').show();
	}
});

	/* Fancybox video  */

	$('[data-fancybox]').fancybox({
	 	youtube : {
		    controls : 1,
	        showinfo : 1
	    }
	});		


});		
		
		
			


