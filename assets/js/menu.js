// MENU ITEMS INIT ONLY

// Init Hamburger & Menu Overlay
$(document).ready(function() {
	$('.icon').click(function() {
		$('.icon').toggleClass('active');
		$('.overlay').toggleClass('active');
		$('.menu').toggleClass('active');
	});
});
