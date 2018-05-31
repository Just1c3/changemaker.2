var addresses=[{lat:37.8713659, lng: -122.26756360000002},{lat:37.87024, lng: -122.26711999999998},{lat:37.873984,
    lng: -122.268834}, {lat:37.872238, lng: -122.268868},{lat:37.871840, lng: -122.272126}, {lat: 37.869771, lng:-122.266027},
    {lat: 37.870726, lng:-122.268427},{lat: 37.871716,lng:-122.273230}];
var names=["Saigon","Halal Guys","Sweet Green", "Tender Green", "Butcher's Son", "Saturn Cafe", "Flying Falafel","Trader Joe's"];

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
        content: "<div class='bolden'>Saigon</div>" +
        "<button class='choose' onclick='displaypoint(1,&quot;Saigon&quot;)'>Veggie Sandwich</button><br><button class='choose'>Tofu Combo Platter</button>"
    });
    var marker1 = new google.maps.Marker({  position:{lat:37.8713659, lng: -122.26756360000002} ,content:"Saigon", map: map});
    marker1.addListener('click', function() {
        infowindow1.open(map,marker1);
    });



    var infowindow2 = new google.maps.InfoWindow({
        content: "<div class='bolden'>Halal Guys</div>" +
        "<button class='choose'>Falafel Sandwich</button><br><button class='choose'>Falafel Platter</button>"
    });
    var marker2 = new google.maps.Marker({  position: {lat:37.87024, lng: -122.26711999999998},content:"Halal Guys", map: map});
    marker2.addListener('click', function() {
        infowindow2.open(map,marker2);
    });



    var infowindow3 = new google.maps.InfoWindow({
        content: "<div class='bolden'>Bongo Burger</div>" +
        "<button id='bongo1' class='choose'>Veggie Burger</button><br><button id='bongo2' class='choose'>Some Other Thing</divid>"
    });
    var marker3 = new google.maps.Marker({  position: {lat:37.8702814, lng: -122.26645589999998},content:"Bongo Burger", map: map});
    marker3.addListener('click', function() {
        infowindow3.open(map,marker3);
    });



    var infowindow4 = new google.maps.InfoWindow({
        content: "<div class='bolden'>Sweet Green</div>" +
        "<button class='choose'>Item 1</button><br><button class='choose'>Item 2</button>"
    });
    var marker4 = new google.maps.Marker({  position: {lat:37.873984, lng: -122.268834},content:"Sweet Green", map: map});
    marker4.addListener('click', function() {
        infowindow4.open(map,marker4);
    });



    var infowindow5 = new google.maps.InfoWindow({
        content: "<div class='bolden'>Tender Green</div>" +
        "<button class='choose'>Item 1</button><br><button class='choose'>Item 2</button>"
    });
    var marker5 = new google.maps.Marker({  position: {lat:37.872238, lng: -122.268868},content:"Tender Green", map: map});
    marker5.addListener('click', function() {
        infowindow5.open(map,marker5);
    });

    var infowindow6 = new google.maps.InfoWindow({
        content: "Butcher's Son<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker6 = new google.maps.Marker({  position: {lat:37.871840, lng: -122.272126},content:"Butcher's Son", map: map});
    marker6.addListener('click', function() {
        infowindow6.open(map,marker6);
    });

    var infowindow7 = new google.maps.InfoWindow({
        content: "Saturn Cafe<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker7 = new google.maps.Marker({  position: {lat: 37.869771, lng:-122.266027},content:"Saturn Cafe", map: map});
    marker7.addListener('click', function() {
        infowindow7.open(map,marker7);
    });

    var infowindow8 = new google.maps.InfoWindow({
        content: "Flying Falafel<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker8 = new google.maps.Marker({  position: {lat: 37.870726, lng:-122.268427},content:"Flying Falafel", map: map});
    marker8.addListener('click', function() {
        infowindow8.open(map,marker8);
    });

    var infowindow9 = new google.maps.InfoWindow({
        content: "Trader Joe's<br><button>Calculate</button><button id='exit'>x</button>"
    });
    var marker9 = new google.maps.Marker({  position: {lat: 37.871716,lng:-122.273230},content:"Trader Joe's", map: map});
    marker9.addListener('click', function() {
        infowindow9.open(map,marker9);
    });
}

//jgdsiooidsgj//
