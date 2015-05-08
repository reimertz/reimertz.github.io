document.body.style.opacity = 1;
window.onbeforeunload = function(e) {
	document.body.style.opacity = 0;
	//Fade out audio so we skip the clicks;
	var audios = document.getElementsByTagName("audio");
	if (audios.length == 0) return;
	setInterval(function() {
		for (audio in audios) {
			audio.volume -= 0.05;
		}
	}, 100);
}