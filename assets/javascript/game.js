var topic = ["happy", "sad", "joy", "anger", "furious", "amazed", "amused", "embarassed", "bored", "confused", "excited", "scared", "shocked"];

console.log(topic);

function createButtons() {

    $("#buttonsHere").empty();

    for (var i = 0; i < topic.length; i++) {

        var a = $("<button>");
        a.addClass("mood");
        a.attr("data-name", topic[i]);
        a.text(topic[i]);

        $("#buttonsHere").append(a);
    }
}

$("#userSearch").on("click", function () {

    var userSearch = $("#userSearch").val();
    var userInput = userSearch;
    
    topic.push(userInput);
    console.log(topic);
    createButtons();
})

createButtons();


$("button").on("click", function () {
    var mood = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RGoL0T73mBwrnkpTnYLyZtUI1FQEuyhR&q=" + mood + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            var results = response.data;

            for (var i = 0; i <= 10; i++) {

                var gifDiv = $("<div>");

                var moodImage = $("<img>");

                // moodImage.attr("src", results[i].images.fixed_height.url);

                moodImage.attr("src", results[i].images.fixed_height_still.url);

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                gifDiv.append(moodImage);
                gifDiv.append(p);

                $("#gifsHere").prepend(gifDiv);
            }
        })

    })
            // $("#gifsHere").on("click", function() {
    
            //     var state = $(this).attr("src", results[i].images.fixed_height_still.url);
    
            //     if (moodImage === state) {
            //       $(this).attr($(this).attr("src", results[i].images.fixed_height.url));
            //     } else {
            //       $(this).attr("src", $(this).attr("data-still"));
            //       $(this).attr("data-state", "still");
            //     }
            //   });
// var mood = set inside the click function for generating gifs i.e.


