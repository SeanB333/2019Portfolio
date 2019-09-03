$(document).ready(function () {
    console.log("ready")
     // scroll events
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("nav").addClass("black")
            $("nav ul li a").addClass("black")
            $(".name").addClass("black")
        }

        else {
            $("nav").removeClass("black")
            $("nav ul li a").removeClass("black")
            $(".name").removeClass("black")
        }
    });

    $("#goToPort").on("click", function(){
        console.log("go prt working");
        $("#landing").empty()
        $("#portfolio").load("portfolio.html")
    })

    $("#goToContact").on("click", function(){
        console.log("go prt working");
        $("#landing").empty()
        $("#info").load("info.html")
    })

    // timeouts and random functions
   setTimeout(function(){
       $("header").css("opacity",1)
   },1000)
     

})


  

