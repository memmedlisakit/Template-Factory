$(document).ready(function () {
    $('#main-slider .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        nav: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $("#main-slider .owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $("#main-slider .owl-next").html('<i class="fa fa-chevron-right"></i>');

    // services items
    $(".item-head", this).mouseover(function () {
        $(this).children(".bos-item").fadeIn();
    })
    $(".item-head", this).mouseleave(function () {
        $(this).children(".bos-item").fadeOut();
    })

    // popup video
    $(".who-img .fa-play").click(function () {
        $(".who-img .popup-video").fadeIn();
    })
    $(".who-img .fa-times").click(function () {
        $(".who-img .popup-video").fadeOut();
    });


    // speisalists slider
    $('#spesialists .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $("#spesialists .owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $("#spesialists .owl-next").html('<i class="fa fa-chevron-right"></i>');

    // author slider
    $('#patinets .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateOut: "fadeOut",
        autoplay: true,
        smartSpeed: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $("#patinets .owl-next").html('<i class="fa fa-chevron-circle-right"></i>');
    $("#patinets .owl-prev").html('<i class="fa fa-chevron-circle-left"></i>')

    // partners
    $("#partners .owl-carousel").owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })

    // back up button
    $(window).scroll(function (event) {
        if (pageYOffset > 500) {
            $(".back-up").fadeIn();
        } else {
            $(".back-up").fadeOut();
        }

    })
    $(".back-up").click(function () {
        $("body").animate({ scrollTop: 0 }, 1000);
    })



});



// for map
function initMap() {
    var uluru = { lat: 40.3878386335921, lng: 49.85088229179382 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
