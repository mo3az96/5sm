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
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".fixed-header").addClass("scroll");
        } else {
            $(".fixed-header").removeClass("scroll");
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
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
    //////////////
    $(".mo-dropdown").click(function () {
        $('.mega').slideToggle("500");
        $('.mega-over').fadeToggle("300");
        $(this).toggleClass("open");
    });
    $(".mega-over").click(function () {
        $('.mega').slideToggle("500");
        $('.mega-over').fadeToggle("300");
        $(".mo-dropdown").toggleClass("open");
    });
    ////////////////////////////////
    if ($(window).width() <= 767) {
        $(".famous-stores .stores").addClass("owl-carousel");
        $('.famous-stores .stores').owlCarousel({
            items: 2,
            margin: 15,
            autoplay: true,
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

    // if ($(window).width() < 992) {
    //     $('.nav-link,.mobile-cont').click(function () {
    //         $('.nav-sec-cont').removeClass("active")
    //         $('body,html').toggleClass("overfollow-fix")
    //     });
    // }
    $('.nav-tgl').click(function () {
        $('body,html').toggleClass("overflow")
    });
});