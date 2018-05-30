var addresses=[{lat:37.8713659, lng: -122.26756360000002},{lat:37.87024, lng: -122.26711999999998},{lat:37.873984,
    lng: -122.268834}, {lat:37.872238, lng: -122.268868} ];
var names=["Saigon","Halal Guys","Sweet Green", "Tender Green"];

function initMap() {
    var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];


    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:37.8715926, lng: -122.272747},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles,
        zoom: 15
    });



    var infowindow1 = new google.maps.InfoWindow({
        content: "Saigon<br><button>Calculate</button>"
    });
    var marker1 = new google.maps.Marker({  position:{lat:37.8713659, lng: -122.26756360000002} ,content:"Saigon", map: map});
    marker1.addListener('click', function() {
        infowindow1.open(map,marker1);
    });


    var infowindow2 = new google.maps.InfoWindow({
        content: "Halal Guys<br><button>Calculate</button>"
    });
    var marker2 = new google.maps.Marker({  position: {lat:37.87024, lng: -122.26711999999998},content:"Halal Guys", map: map});
    marker2.addListener('click', function() {
        infowindow2.open(map,marker2);
    });


    var infowindow3 = new google.maps.InfoWindow({
        content: "Bongo Burger<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker3 = new google.maps.Marker({  position: {lat:37.8702814, lng: -122.26645589999998},content:"Bongo Burger", map: map});
    marker3.addListener('click', function() {
        infowindow3.open(map,marker3);
    });


    var infowindow4 = new google.maps.InfoWindow({
        content: "Sweet Green<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker4 = new google.maps.Marker({  position: {lat:37.873984, lng: -122.268834},content:"Sweet Green", map: map});
    marker4.addListener('click', function() {
        infowindow4.open(map,marker4);
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: "Tender Green<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker5 = new google.maps.Marker({  position: {lat:37.872238, lng: -122.268868},content:"Tender Green", map: map});
    marker5.addListener('click', function() {
        infowindow5.open(map,marker5);
    });

}
