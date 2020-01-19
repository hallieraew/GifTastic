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


// need array of strings for category to cover with buttons - maybe mood? happy, sad, angry, curious, disgusted etc.
// set var for mood
// var for storing giphy url
// ajax call which gets json data
// .then response function which tells what to do with json data 
    // in response function need to save image url to image var
    // "" to save rating to rating var
    // create var for image tag
    // set attr for image tag url src and alt text
    // prepend image var to image tag - will have images tag in div
    // IF number of images is less than 10 ^ do this 10 times
// loop over array and create buttons for each with data value of each mood
// each button will pull from giphy api
// click event for button clicks which will wrap around ajax call and other tasks above
// click event for submit button - take text from search box and add to topic array
    // does this click event also include calling the function which we called above to essentially run through this process again? we create a button and append images to html

// other stuff:
    // need to clear DOM of previous images when user selects different button or submit
// need to include ANOTHER click event for starting and pausing GIFs - want to pull them in static and then click to an animated state and back to stopped

// Class assignments to check out - pausing gifs solution and cat button