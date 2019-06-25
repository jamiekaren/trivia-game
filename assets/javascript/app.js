console.log("working...");


let tonySound = new Audio("assets/sounds/avengers02.mp3");

// set some variables for the timer, starts when button is clicked
//display timer on page
// Look at in-class activity to see how this was done again.
// How to save questions for trivia, by Objects or an array of objects?


//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Playing theme music');
});