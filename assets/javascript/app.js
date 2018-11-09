$(document).ready(function () {

    var topic = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur", "Mewtwo", "Pidgey"];

    $("#buttons-view").on("click", ".gif-btn", function () {

        var searchGif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dm4KqCcGOV1oFmA03pKV7WESYtRsWsxt&q=" + searchGif + "&limit=10&offset=0&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            response.data.forEach(function (data, index) {
                var gifDiv = $("<div class='gif'>");
                var rating = response.data[index].rating;
                var imageUrl = response.data[index].images.original.url;
                $('<img src="' + imageUrl + '"height="200px" />' + "<br/>" + "<p>Rating: " + rating + "</p>").appendTo('#images');
                $("#images").append(gifDiv);
            })
        });
    });

    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topic.length; i++) {
            var a = $("<button>");
            a.addClass("gif-btn");
            a.attr("data-name", topic[i]);
            a.text(topic[i]);
            $("#buttons-view").prepend(a);
        }
    }

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var addGif = $("#gif-input").val().trim();
        topic.push(addGif);
        renderButtons();
    });

    $("#resetButton").on("click", function (event) {
        $("<img>").remove();
    })

    renderButtons()

});