var string =
	'Only the lucky ones have the possibility to appreciate their surroundings and understand how much the world has to give. It is my goal to give every human that right.';
var endString = 'Piérre Reimertz'
var h1 = document.querySelectorAll('main > header > h1')[0];
var addRows = true;
string = string.split('');
endString = endString.split('');
var delayMap = {
	'.': 1000,
	',': 750,
	' ': 50
}

function writeALetter(string, dom) {
	var nextLetter = string.shift();
	var h = document.createElement("text");
	var t = document.createTextNode(nextLetter);
	h.appendChild(t);
	h1.appendChild(h);
	var ms = (delayMap[nextLetter]) ? delayMap[nextLetter] : 100;
	if (string.length > 0) {
		setTimeout(function() {
			writeALetter(string, h1);
		}, ms);
	} else if (addRows == true) {
		addRows = false;
		andBreakingRows(1, endString, h1);
	}
}

function andBreakingRows(remaining, string, dom) {
	var br = document.createElement("br");
	h1.appendChild(br);
	if (remaining-- > 0) {
		setTimeout(function() {
			andBreakingRows(remaining, string, dom);
		}, 300);
	} else {
		writeALetter(endString, dom);
	}
}
writeALetter(string, h1);