$("#content").scroll(function() {
    if ($("#content").scrollTop() > 200) {
        $('header').addClass('menu-shrink');
        $('html').addClass('menu-shrink-outer-components');
    } else {
        $('header').removeClass('menu-shrink');
        $('html').removeClass('menu-shrink-outer-components');
    }
});

$(".mobilehamburger").click(function(){
    $(document.body).toggleClass("showHamburgerMenu");
});