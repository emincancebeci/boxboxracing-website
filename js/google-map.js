var map;

function init() {
    var mapOptions = {
        zoom: 13, 
        center: new google.maps.LatLng(40.951798, 29.405701), 
        scrollwheel: false, 
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    { "saturation": "-100" }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": 65 },
                    { "visibility": "on" }
                ]
            },
            {
                "featureType": "poi", 
                "elementType": "all",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": "50" },
                    { "visibility": "simplified" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    { "saturation": "-100" }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "hue": "#ffff00" },
                    { "lightness": -25 },
                    { "saturation": -97 }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // Haritaya BoxBox Racing İşaretçisi (Pin) Koyuyoruz
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.951798, 29.405701),
        map: map,
        title: 'BoxBox Racing HQ',
        icon: 'images/loc.png' 
    });
    
    // Tıklayınca Açılan Baloncuk
    var contentString = '<div id="content">'+
        '<h5 style="color:black;">BoxBox Racing HQ</h5>'+
        '<p style="color:black;">Pit Yolu, Garaj No: 1, İstanbul Park</p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', init);