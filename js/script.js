(function($) {
    $(document).ready(function() {
        var header = $("header"),
            footer = $(".footer nav"),
            content = $(".content .container .row"),
            hOuterHeight = header.outerHeight(true),
            fOuterHeight = footer.outerHeight(true),
            contentHeight = ($(window).height() - (hOuterHeight + fOuterHeight));

        content.outerHeight(contentHeight);
        console.log("Wysokość header`a: " + hOuterHeight);
        console.log("Wysokość footer`a: " + fOuterHeight);
        console.log("Wysokość okna: " + $(window).height());
        console.log("Wysokość contentu: " + content.outerHeight(true));
    });
})(jQuery);