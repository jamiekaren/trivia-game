console.log("working...");


let tonySound = new Audio("assets/sounds/avengers02.mp3");

// set some variables for the timer, starts when button is clicked
//display timer on page
// Look at in-class activity to see how this was done again.
// How to save questions for trivia, by Objects or an array of objects?

let questions = [
    {
        id: 0,
        question_text: "Who is the strongest Avenger?",
        possible_answers: ["Hulk", "Thor", "Black Widow", "Scarlet Witch"],
        correct_answer: 0,
        selfPopulate: function() {
            
            // Create id variable for the answer section of each question
            let answerHtmlId = "q" + this.id + "ans";
            
            // Create a div to hold each question and its answers
			$("#start").append("<div id=" + answerHtmlId + "><h3>"+ this.question_text +"</h3></div></br>");
            
            // Iterate over possible_answers
            this.possible_answers.forEach(function (answer) {
                $("#" + answerHtmlId + "").append("<input type=\"radio\" name=\"same\">" + answer + "")
            });
        }
        

    }

]

let answers = [];
let correct = 0;
let wrong = 0;
let blank = 0;

//setting time variable to 30 seconds...
let time = 30;


//A countdown function...
// If timer is greater than 0, run countdown where time - 1, sets a timeout of 500 milliseconds?? 
// GameOver works when set in countdown under time!


function countDown() {

    // if (time > 0) {
    //     setTimeout(countDown, 1000);
    // }
    // setGameOver();
    // time--;

    // $("#counter").html("You have " + time + " seconds remaining left to answer.");
    // console.log(time);
    
	// Set an interval
	let interval = setInterval(function() {
        
        // Update the UI every 1000 milliseconds (1 second)
		$("#counter").html("You have " + time + " seconds remaining left to answer.");
        
        // Check to see if counter is 0
		if (time <= 0) {
            
			// Change UI to reflect time-over
			setGameOver();
			
			// Counter is 0 so we should stop counting 
            clearInterval(interval);
        }

        // Subtract 1 unit from the counter
		time --;

    }, 1000);
};

let questionHTML = '';
//Iterates through object for questions and appends them to the start div
function startGame() {

    //goes through entire object
    questions.forEach(function (object) {
        object.showButtons();
    });


};

//Game Over function and end of timer
function setGameOver() {

    if (time === 0) {
        $("#start").empty();
        $("#start").append("You got " + " questions wrong."
            + "<br>" + "You got " + "questions correct."
            + "<br>" + "You didn't answer " + " questions.");
        console.log("Game over!");

    };



};

//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();

    startGame();
    countDown();

});
