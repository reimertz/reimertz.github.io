var playButton = document.getElementsByClassName('play')[0],
	pauseButton = document.getElementsByClassName('pause')[0],
	video = document.getElementsByTagName('video')[0],
	audio = document.getElementsByTagName('audio')[0],
	body = document.getElementsByTagName('body')[0],
	isPlaying = false;
playButton.addEventListener("click", function(e) {
	if (isPlaying) return;
	body.classList.add('playing');
	isPlaying = true;
	video.play();
	audio.play();
});
pauseButton.addEventListener("click", function(e) {
	if (!isPlaying) return;
	body.classList.remove('playing');
	isPlaying = false;
	video.pause();
	audio.pause();
});