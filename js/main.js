/**
 * Created by Henry on 10.02.17.
 */
$(document).ready(function () {
    $.ajaxSetup({
        cache : false
        //origin : "https://pachj.github.io/random-quote-machine/"
    });

    getQuote();

    $("#new-quote").click(function () {
        getQuote();
    });

    function getQuote() {
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(quote) {
            $("#quote").html(quote[0].content);
            $("#footer").html(quote[0].title);
        });
    }
});



