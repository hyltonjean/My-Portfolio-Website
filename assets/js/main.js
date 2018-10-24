$(document).ready(function() {
	$(function() {
		$('.nav-icon').click(function() {
			$('body').toggleClass('nav-is-open');
		});
	});
});
$('#year').text(new Date().getFullYear());
particlesJS.load('particles-js', '/assets/js/particles.json', function() {});
