$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
	    $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -110
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});

//Change the tile background colour using the jQuery.Color Plugin
function setTileColour(tile) {
    var desc = $(tile).find(".desc").html();
    if (desc.includes("rain")) {
        jQuery(tile).animate({
            backgroundColor: jQuery.Color("#9B9AB3")
        }, 500);
    } else if (desc.includes("cloud")) {
        jQuery(tile).animate({
            backgroundColor: jQuery.Color("#ddd")
        }, 500);
    } else if (desc.includes("clear")) {
        jQuery(tile).animate({
            backgroundColor: jQuery.Color("#0092D7")
        }, 500);
    } else if (desc.includes("snow")) {
        jQuery(tile).animate({
            backgroundColor: jQuery.Color("#D4E5FF")
        }, 500);
    } else {
        jQuery(tile).animate({
            backgroundColor: jQuery.Color("#fff")
        }, 500);
    }
}