let loader;
function loadNow(opacity) {
	if (opacity <= 0) {
		displayContent();
	} else {
		loader.style.opacity = opacity;
		window.setTimeout(() => {
			loadNow(opacity - 1);
		}, 3300);
	}
}
function displayContent() {
	loader.style.display = 'none';
	document.querySelector('.content').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
	loader = document.getElementById('loader');
	loadNow(1);
});
