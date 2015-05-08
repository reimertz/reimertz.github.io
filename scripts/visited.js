/*
 * visited.js
 * (c) 2014 Pierre Reimertz
 * reimertz.co / @reimertz
 * may be freely distributed under the MIT license.
 */
(function(exports, html, body) {
	'use strict';
	var _link,
		_defaults = {
			tagId: 'i-know-what-you',
			visitedThreshold: 0.15,
			unvisitedThreshold: 0.15,
			calibrationMaxTime: 10000,
			maxRetries: 10
		},
		isSafari = navigator.vendor.indexOf("Apple") == 0 && /\sSafari\//.test(
			navigator.userAgent),
		_vPerf = {
			mean: undefined,
			mPoints: [],
			threshold: 0
		},
		_uPerf = {
			mean: undefined,
			mPoints: [],
			threshold: 0
		},
		_sampling = undefined,
		_counter = 0,
		_switcher = false,
		_ready = true,
		_currentURL = '',
		_visitedURL = window.location.href,
		_unvisitedURL = _visitedURL.replace("://", "://w"),
		_unvisitedURL2 = _unvisitedURL.replace("://", "://w");

	function _appendCSS() {
		var style = document.createElement("style");
		style.innerHTML =
			'#i-know-what-you{transition:none!important;opacity:1!important;color:#000!important;pointer-events:none!important;position:fixed!important;visibility:hidden!important;width:0!important;height:0!important;stroke:#000!important;fill:#000!important}#i-know-what-you:visited{stroke:#FEFEFE!important;fill:#FEFEFE!important}';
		style.type = "text/css";
		style.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(style);
	}

	function _appendHTML() {
		var link = document.createElement('a');
		link.id = _defaults.tagId;
		document.getElementsByTagName("body")[0].appendChild(link);
		_link = document.getElementById(_defaults.tagId);
	}

	function _appendSVGElements(amount) {
		while (amount > 0) {
			var svg = document.createElement('svg');
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			svg.setAttribute('version', '1.0');
			svg.setAttribute('viewBox', '0 0 100 100');
			svg.setAttribute('width', '100pt');
			svg.setAttribute('height', '100pt');
			svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
			var p1 = document.createElement("path");
			var p2 = document.createElement("path");
			var p3 = document.createElement("path");
			p1.setAttribute('d',
				"M447 1073 c-61 -20 -134 -86 -169 -150 -17 -30 -36 -96 -51 -170 -18 -90 -37 -147 -75 -229 -73 -159 -155 -432 -141 -471 5 -13 4 -25 -1 -28 -6 -4 -10 -10 -10 -16 0 -14 144 -11 158 3 9 9 12 9 12 0 0 -9 70 -12 289 -11 283 2 289 2 299 23 6 12 11 15 11 7 1 -10 4 -11 15 -2 11 10 16 8 21 -9 5 -17 13 -21 43 -18 l37 3 9 70 c6 46 5 110 -3 190 -6 66 -14 197 -16 290 -6 217 -10 236 -55 252 l-35 12 33 0 c30 1 33 3 26 24 -30 99 -105 190 -187 228 -52 23 -143 24 -210 2z m187 -166 c24 -11 32 -23 46 -74 17 -64 12 -99 -12 -75 -15 15 -82 16 -109 2 -13 -8 -19 -21 -19 -45 0 -45 28 -63 103 -67 31 -2 57 -4 57 -6 0 -2 -7 -17 -16 -35 l-15 -32 26 28 c19 21 23 35 19 54 -4 15 -3 24 2 20 5 -3 8 11 6 33 -2 21 1 41 7 44 7 5 10 -16 7 -66 -1 -40 0 -85 5 -100 5 -19 0 -41 -17 -79 -23 -49 -23 -52 -4 -34 20 18 20 18 20 -9 0 -30 -21 -75 -56 -122 -13 -17 -24 -38 -24 -47 0 -15 -31 -42 -77 -66 -19 -10 -22 -9 -17 4 5 11 2 14 -12 8 -11 -3 -22 -10 -25 -15 -3 -5 -29 -6 -58 -2 -38 5 -51 10 -47 20 3 9 -2 14 -14 14 -11 0 -20 5 -20 11 0 6 -6 16 -13 24 -7 7 -19 39 -26 70 -9 38 -16 53 -21 45 -6 -9 -13 5 -23 41 -19 70 -20 114 -5 158 7 20 11 41 10 47 -1 6 8 10 20 9 13 -1 23 -3 23 -5 0 -1 20 -3 44 -4 39 -2 46 1 62 28 11 17 19 38 19 47 0 24 -43 58 -78 62 -55 6 -62 24 -24 58 18 16 29 29 25 29 -5 1 3 7 17 15 14 7 35 11 48 8 13 -3 22 -1 22 6 0 15 107 13 144 -2z"
			)
			p2.setAttribute('d',
				"M549 596 c13 -14 20 -30 16 -36 -6 -9 -9 -9 -15 0 -4 6 -30 13 -59 15 -39 2 -53 -1 -61 -13 -5 -10 -10 -12 -10 -4 0 6 -4 12 -9 12 -5 0 -8 -11 -7 -23 1 -17 6 -23 19 -19 27 7 20 -6 -13 -23 -37 -19 -40 -19 -40 3 -1 16 -1 16 -11 0 -5 -10 -16 -15 -24 -12 -20 8 -20 -20 0 -36 9 -7 13 -15 10 -18 -6 -7 14 -32 26 -32 5 0 9 7 9 15 0 18 -3 17 37 6 18 -5 35 -6 38 -1 3 4 20 6 37 4 18 -2 40 -4 48 -5 34 -4 80 2 80 10 0 19 -92 34 -177 28 -51 -3 -80 -1 -72 4 8 5 22 9 32 9 9 0 26 9 38 21 14 14 29 19 45 16 13 -2 21 0 18 4 -3 5 1 9 8 10 7 1 24 2 37 2 13 1 29 10 35 20 9 14 6 22 -18 42 -37 32 -46 32 -17 1z"
			);
			p3.setAttribute('d',
				"M895 650 c6 -69 18 -512 16 -562 -2 -36 22 -88 40 -88 12 0 12 246 -1 340 -30 239 -43 327 -51 345 -5 13 -7 0 -4 -35z"
			);
			var g = document.createElement("g");
			g.setAttribute('transform', 'translate(0,100) scale(0.1,-0.1)');
			g.appendChild(p1);
			g.appendChild(p2);
			g.appendChild(p3);
			svg.appendChild(g);
			_link.appendChild(svg);
			amount--;
		}
	};

	function _switch() {
		_counter++;
		((_switcher ^= true)) ? (_link.href = _currentURL) : (_link.href =
			_unvisitedURL2);
	}
	if (isSafari) {
		_switch = function() {
			_counter++;
			_link.style.display = 'none';
			((_switcher ^= true)) ? (_link.href = _currentURL) : (_link.href =
				_unvisitedURL2);
			_link.style.display = 'block';
		}
	}

	function _sampler() {
		_sampling.mPoints.push(_counter);
		_counter = 0;
	}

	function _mean(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum / array.length;
	}

	function calibrate(done) {
		if (!_ready) return 'not ready yet';
		var url = _visitedURL,
			calibrationController,
			switchInterval,
			samplingInterval,
			takingTooLong;
		_sampling = _uPerf,
			_ready = false;

		function controller() {
			stopCurrentCycle();
			_sampling.mean = _mean(_sampling.mPoints);
			_currentURL = (_sampling == _vPerf) ? _unvisitedURL : _visitedURL;
			_sampling = (_sampling == _vPerf) ? _uPerf : _vPerf;
			if (Math.abs(_vPerf.mean - _uPerf.mean) >= (Math.max(_vPerf.mean, _uPerf.mean) /
					2)) {
				var range = (_uPerf.mean - _vPerf.mean);
				_vPerf.threshold = _vPerf.mean + range * _defaults.visitedThreshold;
				_uPerf.threshold = _uPerf.mean - range * _defaults.unvisitedThreshold;
				_ready = true;
				clearTimeout(takingTooLong);
				if (done) return done(null, {
					vPerformance: _vPerf,
					uPerformance: _uPerf
				});
				return;
			} else if (_vPerf.mPoints.length == _uPerf.mPoints.length) {
				_vPerf.mean = undefined;
				_uPerf.mean = undefined;
				_vPerf.mPoints = [];
				_uPerf.mPoints = [];
			}
			_appendSVGElements(100);
			startCycle();
		}

		function abortCalibration() {
			clearTimeout(calibrationController);
			stopCurrentCycle();
			if (done) return done(
				'visited: calibration aborted due to hitting calibrationMaxTime', null
			);
		}

		function stopCurrentCycle() {
			clearInterval(switchInterval);
			clearInterval(samplingInterval);
		}

		function startCycle() {
			_counter = 0;
			switchInterval = setInterval(_switch, 0);
			samplingInterval = setInterval(_sampler, 50);
			calibrationController = setTimeout(controller, 200);
		}
		takingTooLong = setTimeout(abortCalibration, _defaults.calibrationMaxTime);
		startCycle();
	}

	function _urlIterator(array, done) {
		var index,
			retries,
			results = [],
			switchInterval,
			samplingInterval,
			iteratorController;

		function startCycle(i, r) {
			index = i || 0;
			retries = r || 0;
			_counter = 0;
			_currentURL = array[index];
			_sampling = {
					mean: undefined,
					mPoints: []
				},
				switchInterval = setInterval(_switch, 0);
			samplingInterval = setInterval(_sampler, 50);
			iteratorController = setTimeout(controller, 200);
		}

		function controller() {
			var status, m;
			clearInterval(switchInterval);
			clearInterval(samplingInterval);
			m = _mean(_sampling.mPoints);
			if (m >= _uPerf.threshold) {
				if (array[index].indexOf('https') == -1) {
					array[index] = array[index].replace('http://', 'https://');
					return startCycle(index);
				}
				status = 'unvisited';
			} else if (m <= _vPerf.threshold)
				status = 'visited';
			else {
				if (retries <= _defaults.maxRetries) return startCycle(index, retries +
					1);
				status = 'uncertain';
			}
			results.push({
				url: array[index],
				status: status
			});
			if (array[index + 1]) {
				return startCycle(index + 1);
			}
			if (!done) return;
			return done(null, results);
		};
		startCycle();
	}

	function check(obj, done) {
		if (!_ready) return 'not ready yet';
		if (obj instanceof Array) return _urlIterator(obj, done);
		if (typeof obj === 'string') return _urlIterator([obj], done);
		else return done('invalid argument', null);
	}
	var visited = {
		check: check,
		calibrate: calibrate,
		uPerformance: _uPerf,
		vPerformance: _vPerf
	}
	exports.visited = visited;
	_appendCSS();
	_appendHTML();
	// calibrate(function(err, performance){
	//   if(err) return console.log(err);
	//   console.log(performance);
	// });
})(window, document.getElementsByTagName("html")[0], document.getElementsByTagName(
	'body')[0]);