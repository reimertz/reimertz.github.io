var header = document.getElementsByClassName('small-header')[0],
	headerOffset = $(header).offset().top,
	fixedHeader = document.getElementsByClassName('fixed-small-header')[0],
	isFixed = false;
window.addEventListener("scroll", function(e) {
	if (e.currentTarget.scrollY >= headerOffset && !isFixed) {
		fixedHeader.classList.add('is-fixed');
		isFixed = true;
		return;
	} else if (e.currentTarget.scrollY <= headerOffset && isFixed) {
		fixedHeader.classList.remove('is-fixed');
		isFixed = false;
	}
});