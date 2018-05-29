$(document).ready(function(){
    $(".hide").hide();
    $("#calculate").on("click",function(){

        $("#cloud").show();
        $("#cloud").animate({"height":"150%", "width":"150%","left":"-30%", "top":"-25%"},1000);
        $("#cloud").delay(400).fadeOut(1000);
        $("body").css({"background-image":"url(http://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1499279662.jpg)","background-size":"100%"});
        $("#search").show();
        $(this).hide();
        $("#title").css("color","green")
    });


    $("#signin").on("click", function(){
        showenters();
        $("#email").attr("placeholder","Email");
        $("#password").attr("placeholder","Password");
        $("#entername").text("Sign In");
        $("#enterbutton").data("1");
    });
    $("#createacc").on("click", function(){
        $("#enterbutton").data("2");
        $("#email").attr("placeholder","Email");
        $("#password").attr("placeholder","Password");
        $("#entername").text("Create Account");
        showenters();
    });

    $("#enterbutton").on("click",function(){
        var amount=$("#enterbutton").data();
        var email=$("#email").val();
        var password=$("#password").val();
        if(amount==1){
            getuser(email);
        }else{
            adduser(email,password);
        }
        $("#mask").hide();
        $("#enter").hide();
    });
    $("#cancel").on("click",function(){
       $("#enter").hide();
       $("#mask").hide();
    });

});


function adduser(email,password){
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "email": email,
            "password": password
        }),
        dataType: 'json',
        success: function(data){
            console.log(data)
            //runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/methpain/api/users'
    });
}


function getuser(email){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data)
            // runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/methpain/api/users/' + email
    });

}

function showenters(){
    $("#mask").show();
    $("#enter").show();
}

var addresses=[{lat:37.8713659, lng: -122.26756360000002},{lat:37.87024, lng: -122.26711999999998}];
var names=["Saigon","Halal Guys"];

var map;
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


    for(var i=0;i<names.length;i++){
        var infowindow = new google.maps.InfoWindow({
            content: names[i]+"<br><button>Calculate</button>"
        });
            var positioning= addresses[i];
            eval("var marker" + i + " = new google.maps.Marker({  position: positioning,content:names[i], map: map});");
            console.log(marker0);
        eval("marker" + i).addListener('click', function() {
            infowindow.open(map, eval("marker"+i));
        });

    }





}
