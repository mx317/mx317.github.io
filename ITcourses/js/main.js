
$(document).ready(function () {
	// Fixed header__top
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0) {
			$('.header__top').addClass('fixed');
		} else {
			$('.header__top').removeClass('fixed');
		}
	});

	//Burger menu 
	$('.header__burger').click(function (event) {

		$('.header__burger').toggleClass('bg-black');
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Smooth scroll
	$('.menu__list-link').on('click', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			headerHeight = $('.header__top').innerHeight(),
			offsetBlock = $(id).offset().top,
			offset = offsetBlock - headerHeight
		$('body,html').animate({ scrollTop: offset }, 1300)
	});

	// Change price
	$('.course-duration input').on('click', function () {
		var price = $(this).attr('value');
		$(this).closest('.price__item').children('.price-item__price').children('span').text(price)
	});


	// Reademore
	$('.about__content-inner').readmore({
		speed: 250,
		collapsedHeight: 199,
		moreLink: '<a href="#" class="about__read-more">Читать далее</a>',
		lessLink: '<a href="#" class="about__read-more">Свернуть</a>'
	});

	// Popup
	$('.popup-form').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	WOW
	if ($(window).width() <= 991) {
		$(".wow").removeClass("wow");
		$('*').removeClass('animate__animated');
	}
	new WOW().init();
});