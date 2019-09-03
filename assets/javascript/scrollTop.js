function scrollToAbout() {
    if ($("#about").lenght != 0) {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    }
}

function scrollToPort() {
    if ($("#port").lenght != 0) {
        $("html, body").animate({
            scrollTop: $("#port").offset().top
        }, 1000);
    }
}

function scrollToContact() {
    if ($("#contact").lenght != 0) {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000)
    }
}