google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
	var mapOptions = {
		center: new google.maps.LatLng(58.3797283, 12.32480320000002),
		zoom: 12,
		zoomControl: false,
		disableDoubleClickZoom: false,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false,
		panControl: false,
		streetViewControl: false,
		draggable: false,
		overviewMapControl: false,
		overviewMapControlOptions: {
			opened: false,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#ababab"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"weight": "0.5"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [{
				"lightness": "59"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text",
			"stylers": [{
				"lightness": "50"
			}, {
				"color": "#a5a5a5"
			}, {
				"weight": "0.01"
			}, {
				"visibility": "on"
			}, {
				"gamma": "1"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"weight": "0.01"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#c7c7c7"
			}, {
				"weight": "0.01"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "geometry.stroke",
			"stylers": [{
				"weight": "0.5"
			}, {
				"color": "#afafaf"
			}, {
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "off"
			}, {
				"lightness": "59"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [{
				"lightness": "-16"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.icon",
			"stylers": [{
				"lightness": "48"
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "administrative.neighborhood",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "off"
			}, {
				"color": "#c4c4c7"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#eaeaea"
			}, {
				"weight": ".5"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"weight": ".75"
			}, {
				"color": "#e4e3e3"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}, {
				"lightness": "20"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"weight": "0.49"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [{
				"lightness": "43"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"saturation": "-41"
			}, {
				"color": "#c8c8c8"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#e1e1e1"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [{
				"lightness": "100"
			}, {
				"gamma": "1.13"
			}, {
				"saturation": "-96"
			}, {
				"visibility": "on"
			}, {
				"color": "#a5a5a5"
			}, {
				"weight": "0.59"
			}]
		}]
	}
	var mapElement = document.getElementById('google-maps');
	map = new google.maps.Map(mapElement, mapOptions);
	marker = new google.maps.Marker({
		icon: 'https://mapbuildr.com/assets/img/markers/ellipse-black.png',
		position: new google.maps.LatLng(58.3797283, 12.32480320000002),
		map: map,
		text: 'I\'m from here'
	});

	function recalculateMapPosition() {
		map.setCenter(mapOptions.center);
		map.panBy(-($(window).width() / 2) + 75, ($(window).height() / 2) - 75);
	}
	$(window).on('resize', recalculateMapPosition);
	recalculateMapPosition();
}