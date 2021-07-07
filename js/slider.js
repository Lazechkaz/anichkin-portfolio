$(document).ready(function () {
	$('.slider-for').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: true,
	 fade: true,
	 asNavFor: '.slider-nav',
	 responsive:[
	 {
	 	breakpoint: 991,
   settings: {
     arrows: false
   }
	 }
	 ]
	});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  focusOnSelect: true
	});
});