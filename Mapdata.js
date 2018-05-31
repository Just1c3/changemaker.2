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
        content: "<div class='bolden'>Saigon</div>" +
        "<button class='choose' onclick='displaypoint(1,\'Saigon\')'>Veggie Sandwich</button><br><button class='choose'>Tofu Combo Platter</button>"
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

}
