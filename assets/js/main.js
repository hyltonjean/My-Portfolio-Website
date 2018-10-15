// PRELOADER INIT

// Hide sections
$('section#main').hide();

setTimeout(function() {
	// Hide Preloader
	$('#loader').hide();

	// Show sections
	$('section#main').fadeIn();

	// Get the current year for the copyright
	$('#year').text(new Date().getFullYear());

	// Init Hamburger & Menu Overlay
	$(document).ready(function() {
		$('.icon').click(function() {
			$('.icon').toggleClass('active');
			$('.overlay').toggleClass('active');
			$('.menu').toggleClass('active');
		});
	});

	// Particles-JS
	particlesJS.load('particles-js', '/assets/js/particles.json', function() {
		// console.log('particles.json loaded...');
	});
}, 7000);
