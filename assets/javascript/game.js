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