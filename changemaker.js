var logedInUserId="";
var loggedInUserScore = 0;


$(document).ready(function(){
    $(".hide").hide();
    $("#calculate").on("click",function(){
        $("#cloud").show();
        $("#cloud").animate({"height":"150%", "width":"150%","left":"-30%", "top":"-25%"},1000);
        $("#cloud").delay(400).fadeOut(400);
        $("body").css({"background-image":"url(http://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1499279662.jpg)","background-size":"100%"});
        $("#search").show();
        $(this).hide();
        $("#title").css("color","green")
    });
    $("#cancelshow").on("click",function(){
       $(this).parent().hide();
    });
    $("#home").on("click",function(){
        location.reload();
    });
    $("#signin").on("click", function(){
        showenters();
        $("#email").attr("placeholder","Email");
        $("#password").attr("placeholder","Password");
        $("#entername").text("Sign In");
        $("#enterbutton").attr('data',1);
    });
    $("#createacc").on("click", function(){
        $("#enterbutton").attr('data',2);
        $("#email").attr("placeholder","Email");
        $("#password").attr("placeholder","Password");
        $("#entername").text("Create Account");
        showenters();
    });

    $("#enterbutton").on("click",function(){
        var amount=$("#enterbutton").attr('data');
        console.log(amount);
        var email=$("#email").val();
        var password=$("#password").val();
        if(amount==1){
            getuser(email);
        }else if(amount==2){
            console.log("eee");
            adduser(email,password);
        } else {
            console.log("error!");
        }
        $("#mask").hide();
        $("#enter").hide();
    });
    $("#cancel").on("click",function(){
       $("#enter").hide();
       $("#mask").hide();
    });

});




function displaypoint(amount,name){
    $("#showstats").show();
    $("#statsintro").text("This meal from "+ name+" will reward you "+amount+" trees as you will have saved "+(amount*2.5)+" lbs of CO2, "+(amount*24)+" ft2 of land, and "+(amount*133)+" gallons of water");
    document.getElementById("displaytrees").innerHTML="";
    for(var i=0;i<amount;i++){
        document.getElementById("displaytrees").innerHTML+="<i class=\"fa fa-tree\" style='color:darkgreen;font-size:60px'></i>";
    }
    $("#validate").on("click",function(){
        addfield(amount);
    })

}

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
            console.log("usercreated");
            logedInUserId = data._id;
            console.log(data);
            console.log(logedInUserId);

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
            console.log("usergotten");
            console.log(data);
            logedInUserId = data._id;
            loggedInUserScore = data.score;
            console.log(logedInUserId);

        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/methpain/api/users/' + email
    });

}


function addfield(amount) {
    console.log("jigd");

    if (loggedInUserScore > 0) {
        $.ajax({
            type: 'PUT',
            dataType: 'json',
            data: JSON.stringify({
                "score": (amount + loggedInUserScore)
            }),
            success: function (data) {
                console.log(data);
            },
            error: function () {
                alert("failed");
            },
            url: 'https://slkidsbackend.herokuapp.com/methpain/api/users/' + logedInUserId
        });
    }

    $.ajax({
        type: 'PUT',
        dataType: 'json',
        data: JSON.stringify({
            "score": amount
        }),
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/methpain/api/users/' + logedInUserId
    });
}

function showenters(){
    $("#mask").show();
    $("#enter").show();
}


var anoosh="";
var kalen="";
var mission="";

