$(document).ready(function () {
    $(".try1").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "5.25rem");
        $(".vehica-menu-hover").css("left", "16.5rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try2").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "22.75rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try3").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "32.25rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try4").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "41.75rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
});

$(document).ready(function () {
    $(".imglogo").mouseenter(function () {
        $(".imagee").attr("src", "Image/CarzMella2.png")
    }).mouseleave(function () {
        $(".imagee").attr("src", "Image/CarzMella.png")
    });
});

$(document).ready(function () {
    $(".btnSOT").mouseenter(function () {
        $(".btnSoT").addClass("btn-warning")
        $(".aSot").addClass("text-dark")
    }).mouseleave(function () {
        $(".btnSoT").removeClass("btn-warning")
        $(".aSot").removeClass("text-dark")
    });
});    

