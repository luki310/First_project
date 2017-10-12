(function($) {
    var  div = $(".show-content");
    div.on("showContent", function() {
        $(this).addClass("visible");
    });
    $(window).on("load", function() {
        div.trigger("showContent");
    });
})(jQuery);