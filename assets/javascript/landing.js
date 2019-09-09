$(document).ready(function () {

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


  

