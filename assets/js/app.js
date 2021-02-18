$(function () {

    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffSet = $(window).scrollTop();



    /* fixed header */
    checkScroll(scrollOffSet);

    $(window).on("scroll", function () {

        scrollOffSet = $(this).scrollTop();

        checkScroll(scrollOffSet);

    });

    function checkScroll(scrollOffSet) {
        
        if (scrollOffSet >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* smooth scroll */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffSet = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500);

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");

    });

    /* menu nav mobile */

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $(this).toggleClass("active");

    });


    /* accordion collapse */

    $("[data-collapse]").on("click", function (event) {

        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        /*
        $(blockId).slideToggle();
        */
    });

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});