
/*  B  U  T  T  O  N  S  */

$("#btn-close-info, #btn-close-x-info-painel").click(function () {
$("#back-info-painel").fadeToggle(200)
});
$("#btn-informative").click(function () {
$("#back-info-painel").fadeToggle(200)
});

$("#btn-close-about-us, #btn-close-x-about-us-painel").click(function () {
$("#back-about-us-painel, .about-us-painel").fadeToggle(200)
});
$("#about-us-menu").click(function () {
$("#back-about-us-painel, .about-us-painel, #menu-back").fadeToggle(300);
$(".menu").css({
    "left": "-80%",
    "transition": ".2s all"
});
});
$("#btn-about-us").click(function () {
$("#back-about-us-painel, .about-us-painel").fadeToggle(300);

});

$("#btn-menu").click(function () {
$(".menu").css({
    "left": "0%",
    "transition": ".2s all"
});
$("#menu-back").fadeIn(200);
});
$("#btn-close-menu, #menu-back").click(function () {
$(".menu").css({
    "left": "-85%",
    "transition": ".2s all"
})
$("#menu-back").fadeOut(200);
});


/*  S  C  R  O  L  L  */

$(".corpo").scroll(function () {
if ($(this).scrollTop() > 50) {
    $(".cab").fadeOut();
    $("#go-top").css({
        "bottom": "30px",
        "transition": "all .6s"
    });
    $("#btn-wp").css({
        "right": "70px",
        "transition": "all .6s"
    });

} else {
    $(".cab").fadeIn();
    $("#go-top").css({
        "bottom": "-60px",
        "transition": "all .6s"
    });
    $("#btn-wp").css({
        "right": "10px",
        "transition": "all .6s"
    });

}
});

$("#go-top").click(function () {
$(".corpo").animate({
    scrollTop: 0
}, 1000);
return false;
});


/*  T  H  E  M  E  S  */

$("#btn-themes").click(function () {
$(".display-theme, #btn-close-themes").fadeIn();
$(this).fadeOut();
});
$("#btn-close-themes").click(function () {
$(".display-theme").fadeOut();
$("#btn-themes").fadeIn();
$(this).fadeOut()
});

$("#dark").click(function () {
$(this).css({
    "border": ".5px solid #ffc2ee",
    "transition": ".3s all"
});
$("#clear").css({
    "border": "none",
    "transition": ".3s all"
});

$(".corpo, .menu, .menu li a").css({
    "background": "#16161d",
    "color": "#bdbdbd",
    "transition": ".3s all"
});

$(".info-facility h5").css({
    "color": "white",
    "transition": ".3s all"
});

$(".social-menu img").css({
    "filter": "invert(0%)",
    "transition": ".5s all"
});

$("ul #arrow-right-menu").css({
    "filter": "invert(100%)",
    "transition": ".5s all"
});

$(".column div").css({
    "background": "#282838",
    "color": "#bdbdbd",
    "box-shadow": "0 0 .1em black",
    "transition": ".3s all"
});

$(".foot").css({
    "background": "black",
    "transition": ".3s all"
});
});

$("#clear").click(function () {
$(this).css({
    "border": ".5px solid #ffc2ee",
    "transition": ".3s all"
});
$("#dark").css({
    "border": "none",
    "transition": ".3s all"
});

$(".corpo, .menu, .menu li a").css({
    "background": "white",
    "color": "#404040",
    "transition": ".3s all"
});

$(".social-menu img").css({
    "filter": "invert(100%)",
    "transition": ".5s all"
});

$("ul #arrow-right-menu").css({
    "filter": "invert(0%)",
    "transition": ".5s all"
});

$(".info-facility h5").css({
    "color": "black",
    "transition": ".3s all"
});

$(".column div").css({
    "background": "white",
    "color": "#404040",
    "box-shadow": "0 0 .3em gray",
    "transition": ".3s all"
});

$(".foot").css({
    "background": "#16161d",
    "transition": ".3s all"
});
});