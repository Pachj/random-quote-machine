/**
 * Created by Henry on 10.02.17.
 */
$(document).ready(function () {
    $.getJSON("http://quotesondesign.com/wp-json/posts?origin=http://quotesondesign.com/wp-json/posts&filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $("#quote").html(a[0].content);
        $("#footer").html(a[0].title);
        $.ajaxSetup({
            cache : false
        });
    });

    $("#new-quote").on("click", function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?origin=http://quotesondesign.com/wp-json/posts&filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $("#quote").html(a[0].content);
            $("#footer").html(a[0].title);
            $.ajaxSetup({
                cache : false
            });
        });
    });
});

