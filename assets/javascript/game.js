var topic = ["happy", "sad", "joy", "anger", "furious", "amazed", "amused", "embarassed", "bored", "confused", "excited", "scared", "shocked"];

console.log(topic);

function createButtons() {

    $("#buttonsHere").empty();

    for (var i = 0; i < topic.length; i++) {

        var a = $("<button>");
        a.addClass("mood");
        a.attr("data-mood", topic[i]);
        a.text(topic[i]);

        $("#buttonsHere").append(a);
    }
}

createButtons();

$("#userSearch").on("click", function (event) {

    event.preventDefault();

    var userSearch = $("#userInput").val().trim();
    var userInput = userSearch;

    topic.push(userInput);

    gifSearch(userInput);
    // $("#userInput").val("");
    createButtons();

});

function gifSearch(mood){

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RGoL0T73mBwrnkpTnYLyZtUI1FQEuyhR&q=" + mood + "&limit=25&offset=0&rating=G&lang=en";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
        .then(function (response) {
    
            var results = response.data;
    
            for (var i = 0; i <= 10; i++) {
    
                var gifDiv = $("<div>");
    
                var moodImage = $("<img>");
    
                var moodImageStill = results[i].images.fixed_height_still.url
    
                var moodImageAnimate = results[i].images.fixed_height.url
    
                moodImage.addClass("gif");
                moodImage.attr(
                    {
                        "src": moodImageStill,
                        "data-still": moodImageStill,
                        "data-animate": moodImageAnimate,
                        "data-state": "still"
                    }
                )
    
                var rating = results[i].rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                gifDiv.append(moodImage);
                gifDiv.append(p);
    
                $("#gifsHere").prepend(gifDiv);
            }
    
        });
        
    }
            $(document).on("click", ".gif", function () {
                console.log("clicked")
    
                state = $(this).attr("data-state");
    
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).data("still"));
                    $(this).attr("data-state", "still");
                }
            });


$(document).on("click", ".mood", function () {
    var mood = $(this).attr("data-mood")

    gifSearch(mood);
});
