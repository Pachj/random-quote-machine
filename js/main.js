/**
 * Created by Henry on 10.02.17.
 */
$(document).ready(function () {
    $.getJSON("https://quotesondesign.com/wp-json/posts?origin=https://quotesondesign.com/wp-json/posts&filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $("#quote").html(a[0].content);
        $("#footer").html(a[0].title);
        $.ajaxSetup({
            cache : false
        });
    });

    $("#new-quote").on("click", function () {
        $.getJSON("https://quotesondesign.com/wp-json/posts?origin=https://quotesondesign.com/wp-json/posts&filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $("#quote").html(a[0].content);
            $("#footer").html(a[0].title);
            $.ajaxSetup({
                cache : false
            });
        });
    });
});

