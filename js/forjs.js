// var gotoup = document.getElementsByClassName('around-angle')[0];

document.onscroll = function() {

    if (window.scrollY >= 100) { // To Show Button
        gotoup.style.opacity = "1";
        gotoup.style.cursor = "pointer"
    } else {

        gotoup.style.opacity = "0";
    }
    gotoup.onclick = function() { // When Click on the buttom Go To Up

        var Smoothy = setInterval(function() {
            window.scrollTo(0, window.scrollY - 100)
            if (window.scrollY <= 0)
                clearInterval(Smoothy)

        }, 20);
    }
};
/////motion go to section in the page
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {});
            }
        }
    });
//*//


// multi sliders
$(document).ready(function() {
    if ($(window).width() > 767) {


    } else {

    }
});

//
// owl-slider
$('.parent-slider-box').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 1000

});


$('.center-owl').owlCarousel({
    rtl: true,
    center: true,
    items: 2,
    loop: true,
    dots: false,
    nav: true,
    video: false,

});
$('.speed-one-owl').owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    dots: true,
    nav: true,
});
$('.braoez').owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
});

$(document).ready(function() {
    // Declare Carousel jquery object
    var owl = $('.owl-carousel');




    // add animate.css class(es) to the elements to be animated
    function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function() {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

            $elem.addClass($animationType).one(animationEndEvent, function() {
                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }

    // Fired before current slide change
    owl.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, 'out');
    });

    // Fired after current slide has been changed
    var round = 0;
    owl.on('changed.owl.carousel', function(event) {

        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");

        setAnimation($elemsToanim, 'in');
    })

    owl.on('translated.owl.carousel', function(event) {
        console.log(event.item.index, event.page.count);

        if (event.item.index == (event.page.count - 1)) {
            if (round < 1) {
                round++
                console.log(round);
            } else {
                owl.trigger('stop.owl.autoplay');
                var owlData = owl.data('owl.carousel');
                owlData.settings.autoplay = false; //don't know if both are necessary
                owlData.options.autoplay = false;
                owl.trigger('refresh.owl.carousel');
            }
        }
    });

});
//
$(document).ready(function() {
    $(".div-multisize-imgs").mouseover(function() {
        $(".div-multisize-imgs").removeClass("div-multisize-imgs-big");
        $(this).addClass("div-multisize-imgs-big");
    });
});
$(document).ready(function() {
    $(".btn-sent-talab , .btn-veiw-products-2").click(function() {
        $(".overlay-pop").removeClass("display-none");
        $(".pop-up").removeClass("display-none");
        $("body").addClass("overflowY-hidden");
        $("body").addClass("border-body");
    });
});
$(document).ready(function() {
    $(".btn-cancel , .overlay-pop").click(function() {
        $(".overlay-pop").addClass("display-none");
        $(".pop-up").addClass("display-none");
        $("body").removeClass("overflowY-hidden");
        $("body").removeClass("border-body");
    });
});
$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $(".overlay-pop").addClass("display-none");
        $(".pop-up").addClass("display-none");
        $("body").removeClass("overflowY-hidden");
        $("body").removeClass("border-body");
    }
});
// 
$(document).ready(function() {
    $(".collapse-mobile").click(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(document).ready(function() {
    $(".collapse-mobile").dblclick(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(document).ready(function() {
    $(".collapse-mobile").click(function() {
        $(".menu-mobile").toggleClass("menu-mobile-block");


    });
});
// $(document).ready(function() {
//     $(".part-print").click(function() {
//         $(this).addClass("part-print-block");
//     });
// });
$(document).ready(function() {
    $(".part-print").click(function() {
        $(this).toggleClass("part-print-block");
    });
});