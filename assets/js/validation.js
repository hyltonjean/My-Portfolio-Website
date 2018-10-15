// CONTACT FORM VALIDATION INIT ONLY

$(document).ready(function() {
	$('.submit').click(function(event) {
		let name = $('.name').val();
		console.log(name);
		let email = $('.email').val();
		let phone = $('.phone').val();
		let message = $('.message').val();
		let statusElm = $('.status');
		statusElm.empty();

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>Email is not valid</div>');
		}

		if (name.length >= 2) {
			statusElm.append('<div>Name is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>Name is not valid</div>');
		}

		if (phone.length >= 7) {
			statusElm.append('<div>Phone is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>Phone is not valid</div>');
		}

		if (message.length >= 10) {
			statusElm.append('<div>Message is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>Message is not valid</div>');
		}
	});
});
