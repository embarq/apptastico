$(document).ready(function() {
	$('.partners-widget .carousel-items').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1e3,
		cssEase: "ease-out",
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2
	});
	$('.projects-widget .carousel-items').slick({
		appendArrows: $('.projects-widget'),
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2
	});
});