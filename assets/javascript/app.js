$(document).ready(function () {

    var gifs = ["Charmander", "Pikachu"];

    $("#buttons-view").on("click", ".gif-btn", function () {

        var searchGif = $("button").attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dm4KqCcGOV1oFmA03pKV7WESYtRsWsxt&q=" + searchGif + "&limit=10&offset=0&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            response.data.forEach(function (data, index) {
                var gifDiv = $("<div class='gif'>");
                var rating = response.data[index].rating;
                var imageUrl = response.data[index].images.original.url;
                $('<img src="' + imageUrl + '" />' + "<br/>" + "<p>Rating: " + rating + "</p>").appendTo('#images');
                $("#images").prepend(gifDiv);
            })
        });
    });

    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < gifs.length; i++) {
            var a = $("<button>");
            a.addClass("gif-btn");
            a.addClass("gif");
            a.attr("data-name", gifs[i]);
            a.text(gifs[i]);
            $("#buttons-view").append(a);
        }
    }

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var addGif = $("#gif-input").val().trim();
        gifs.push(addGif);
        renderButtons();
    });

    renderButtons()

});