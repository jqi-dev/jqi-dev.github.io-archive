var didScroll;
var lastScrollTop = 0;
var delta = 5;
var minWidth = 1000;

$(window).scroll(function(event){
    if ($(window).outerWidth() > minWidth) { // disable scroll hide if window < minimum width
      didScroll = true;
    }
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    let st = $(this).scrollTop();
    let navbarHeight = $('header').outerHeight();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').css("top", -navbarHeight)
    } else {
        // Scroll Up
        $('header').css("top", 0)
    }

    lastScrollTop = st;
}
