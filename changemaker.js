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
        var email=$("#email").text();
        var password=$("#password").text();
        if(amount==1){
            getuser(email);
        }else{
            adduser(email,password);
        }
        $("#mask").hide();
        $("#enter").hide();
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
            runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/[appName]/api/users'
    });
}


function getuser(email){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        success: function(data){
            runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/[appName]/api/users/' + email
    });

}

function showenters(){
    $("#mask").show();
    $("#enter").show();
}

// function setupdropdowns(){
//     for(var i=0;i<Listofkinds.length;i++){
//         var name= Listofkinds[i];
//         $("#first").append("<div class='dropdown'><button class='dropbtn'>"+name+"</button><div class='dropdown-content' id='first'></div></div>")
//     }
//
// }

