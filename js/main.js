$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".preloader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    new WOW().init();
    if ($(window).scrollTop() >= 10) {
        $(".fixed-header").addClass("scroll");
    } else {
        $(".fixed-header").removeClass("scroll");
    }
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 1000, 'swing');
    });
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arro_top").fadeIn(500) : $(".arro_top").fadeOut(500);
        if ($(this).scrollTop() >= 40) {
            $(".fixed-header").addClass("scroll");
        } else {
            $(".fixed-header").removeClass("scroll");
        }
    });
    $(".arro_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    /////////////////////
    if ($(window).width() > 767) {
        $(".item-owl .store").unwrap();
    }
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    });
    /////////offers Slider/////////
    $('.offers-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],

        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    });
    //////////
    $(".left-foot").click(function () {
        var x = $(this).parent().siblings();
        $(x[1]).slideToggle("500");
        $(this).toggleClass("active");
    });
    //////////
    $(".left-line").click(function () {
        $(".pop-cop .cop-details").slideToggle("500");
        $(this).toggleClass("active");
    });
    /////////
    $(".code").click(function () {
        $(".mo-modal").fadeIn("300");
        $(".pop-cop").addClass("open");
        $('body,html').toggleClass("overflow");
    });
    $(".sms-open").click(function () {
        $(".sms-modal").fadeIn("300");
        $(".pop-cop").addClass("open");
        $('body,html').toggleClass("overflow");
    });
    $(".share-open").click(function () {
        $(".share-modal").fadeIn("300");
        $(".pop-cop").addClass("open");
        $('body,html').toggleClass("overflow");
    });
    $(".pop-cop .code").click(function () {
        e.preventDefault();
    });
    $(".thanx-page .code").click(function () {
        $('body,html').removeClass("overflow");
    });
    $(".mo-modal").click(function () {
        $(".mo-modal").fadeOut("400");
        $(".pop-cop").removeClass("open");
        $('body,html').toggleClass("overflow")
    });
    $(".sms-modal").click(function () {
        $(".sms-modal").fadeOut("400");
        $(".pop-cop").removeClass("open");
        $('body,html').toggleClass("overflow")
    });
    $(".share-modal").click(function () {
        $(".share-modal").fadeOut("400");
        $(this).find(".pop-cop").removeClass("open");
        $('body,html').toggleClass("overflow")
    });
    $(".pop-cop").click(function (e) {
        e.stopPropagation();
    });
    $(".close-btn").click(function () {
        $(".mo-modal").fadeOut("400");
        $(".sms-modal").fadeOut("400");
        $(".share-modal").fadeOut("400");
        $(".pop-cop").removeClass("open");
        $('body,html').toggleClass("overflow")
    });
    /////////
    $(".collpse-title").click(function () {
        $(".mo-collapse").slideToggle("500");
        $(this).toggleClass("active");
    });
    ////////////////////////////////
    $('.top-cats').owlCarousel({
        items: 6,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            767: {
                items: 4,
            },
            991: {
                items: 5,
            },
            1220: {
                items: 6
            }
        }
    });
    ////////////////////////////////
    $('.top-stores').owlCarousel({
        items: 7,
        margin: 11,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 3,
            },
            480: {
                items: 3,
            },
            767: {
                items: 4,
            },
            991: {
                items: 5,
            },
            1220: {
                items: 7
            }
        }
    });
    ////////////////////////////

    if ($(window).width() <= 767) {
        $(".mo-dropdown .nav-anchor").click(function () {
            $('.mega').slideToggle("500");
            $('.mega-over').fadeToggle("300");
            $(this).toggleClass("open");
        });

        $(".mega-over").click(function () {
            $('.mega').slideToggle("500");
            $('.mega-over').fadeToggle("300");
            $(".mo-dropdown").toggleClass("open");
        });
        $(".famous-stores .stores").addClass("owl-carousel");
        $('.famous-stores .stores').owlCarousel({
            items: 3,
            margin: 8,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
        });
        $(".half-item .item").unwrap();

        $(".related").addClass("famous-blog");
        $(".famous-blog").removeClass("related");
        $(".famous-blog").addClass("owl-carousel");
        $('.famous-blog').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
        });
        $(".images").addClass("owl-carousel");
        $('.images').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
        });
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })





    const menu = document.querySelector('.header');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
        if (menu.className.indexOf('active') === -1) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    })
    $('.nav-tgl').click(function () {
        $('body,html').toggleClass("overflow")
    });




    var options = {

        url: "js/data.json",

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        },

        theme: "square"
    };

    $(".search-input").easyAutocomplete(options);
});