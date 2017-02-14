/**
 * Created by Henry on 10.02.17.
 */
$(document).ready(function () {
    $.ajaxSetup({
        cache: false
        //origin : "https://pachj.github.io/random-quote-machine/"
    });

    getQuote();

    $("#new-quote").click(function () {
        getQuote();
        getRandomColor();
    });

    function getQuote() {
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (quote) {
            if ((quote[0].content.length + quote[0].title.length) < 140) {
                $("#quote").html(quote[0].content);
                $("#footer").html(quote[0].title);
            }
            else {
                getQuote();
            }
        });
    }

    function getRandomColor() {
        var colors = ["#29BF12", "#09B2CB", "#F21B3F", "#C4008C"];
        var rand = colors[Math.floor(Math.random() * colors.length)];
        $("#action-box").css("background-color", rand);
        document.body.style.setProperty('--dot-color', rand);
    }
});



