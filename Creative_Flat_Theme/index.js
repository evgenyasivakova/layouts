$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});


jQuery(function ($) {
    function changeColor(selector, colors, time) {
        var curCol = 0,
        timer = setInterval(function () {
            if (curCol === colors.length) curCol = 0;
            $(selector).css("background-color", colors[curCol]);
            curCol++;
        }, time);
    }
    $(window).load(function () {
        changeColor(".blog__info-results-author", ["green", "blue", "red"], 2000);
    });
});


