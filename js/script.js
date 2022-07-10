var btns = document.getElementById('addButton');
var par = document.getElementById('hid');
  btns.onclick = function(){
  console.log(par);
  par.classList.remove("hidden");
  btns.style.display = "none";
}; 


particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(window).scroll(function () {
  if($(window).scrollTop() > 150) {
    
    $('#navigation-panel').css('background-color', 'rgba(255, 255, 255, 0.95)');
   } 
  else {

   $('#navigation-panel').css('background-color', 'transparent');
   }
  });



function myFunction(x) {
  x.classList.toggle("change");
    }
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
};

$(document).ready(function(){
  $('.img-slider').slick({
  	arrows: true,
	  dots: true,
	  easing: 'ease',
	  autoplay: true,
	  draggable:false,
	  waitForAnimate: true,
	  slidesToShow: 3
	 });
	 $('.center').slick({
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
		});
	});
function openSkills(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    if(cityName == 'learned'){
    	document.getElementById('defaultOpen').style.color = "#FEC62E";
    }
    else{
    	document.getElementById('defaultOpen').style.color = "#262626";
    }

    if (cityName == 'notlearned') {
    	document.getElementById('notlnd').style.color = "#FEC62E";
    }
    else{
    	document.getElementById('notlnd').style.color = "#262626";
    }
    
}

document.getElementById("defaultOpen").click();

$(document).ready(function(){
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
  });
});


