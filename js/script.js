
	particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
$(document).ready(function(){
  $('.img-slider').slick({
  	arrows: true,
	  dots: false,
	  easing: 'ease',
	  autoplay: true,
	  autoplaySpeed: 5000,
	  draggable:true,
	  waitForAnimate: true,
	  prevArrow: '<button class="prev-img arrow-slider"></button>',
   nextArrow: '<button class="next-img arrow-slider"></button>',
  });