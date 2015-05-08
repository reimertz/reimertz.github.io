Zepto(function($) {
	window.requestAnimFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};

	function initBgAnimation($bgElements) {
		var nrOfElements = $bgElements.length,
			current = 0,
			next = ((current + 1) === nrOfElements) ? 0 : current + 1,
			opacity = 0,
			deltaTime = 0;

		function drawRotatingTopSection(delta) {
			opacity += 0.004;
			if (opacity >= 1) {
				current = ((current + 1) === nrOfElements) ? 0 : current + 1;
				next = ((current + 1) === nrOfElements) ? 0 : current + 1;
				opacity = 0;
				setTimeout(function() {
					window.requestAnimFrame(drawRotatingTopSection);
				}, 2000);
			} else {
				$bgElements[current].style.opacity = 1 - opacity;
				$bgElements[next].style.opacity = opacity;
				setTimeout(function() {
					window.requestAnimFrame(drawRotatingTopSection);
				}, 10);
			}
		}
		setTimeout(function() {
			window.requestAnimFrame(drawRotatingTopSection);
		}, 5000);
	}
	setTimeout(function() {
		var backgrounds = document.querySelectorAll('.fade-grounds section');
		if (backgrounds) {
			initBgAnimation(backgrounds);
		}
	}, 10);
});