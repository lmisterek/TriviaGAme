
// Create a json array of questions with answer choices and correct answers
var quiz = [{
		
		"question": "The numerals used by today's mathematicians were developed in ...",
		"answers": ["Rome", "Arabia", "France", "Greece", "England"],
		"correct": "a"
	}
	,
	{
		"question": "What set of positive integers satisfies the equation, a squared + b squared = c squared?",
		"answers": ["trigonometric identities", "Cartesian coordinates", "Pythagorean triples", "Fibonacci sequences", "ordered pairs"],
		"correct": "c"
	},

	{
		"question": "Which ancient Egyptian unit of measurement was set as the distance between the elbow and the tip of the middle finger?",
		"answers": ["cubit", "stone", "karat", "quire", "parsec"],
		"correct": "a"
	}

]

var buttonIds = ["label[for=ritema]", "label[for=ritemb]", "label[for=ritemc]", "label[for=ritemd]", "label[for=riteme]"  ]





// do not display 


window.onload = function() {


	// ********* INITIAL SETTINGS **********************************************//
	
	// hide the form
	$("form").hide();

	// do not start counting until a question pops up
	var countNow = false;

	// question pointer
	var pointer = 0;

	// number of seconds for each question
	var num = 10;
	
	

    // ********* EVENT LISTENERs **********************************************//
    
    //  Start button
    var btn = document.getElementById("btn");
    
    btn.onclick = function() {
        $("form").show();
        newQuestion();     
    };

    // Once the form is submitted
    $(".radio-item label").click(function( event ) {
  		
    	// get the multiple choice value off of the radio item label id
  		var answer = ($(this).attr('for').slice(-1));
  		
  		// If the answer is correct
  		if(isCorrect(answer)) {

  		}
  		
  		//If the player chooses the wrong answer, tell the player they selected the wrong option 
  		//and then display the correct answer. Wait a few seconds, then show the next question.
  		else if (true) {



  		}
  		
  		// If the player runs out of time, tell the player that time's up and display the 
  		// correct answer. Wait a few seconds, then show the next question.
  		else if (true){

  		}

  		// update statistics

  		// display for correct answer

  		// display for

  		// update new quesion
  		pointer++;

  		// Offer a new question as long as questions remain
  		if (pointer < quiz.length) {

  			// stop timer
  			countNow = false;

  			// provide another question
  			newQuestion(); 

  			// restart countdown	
    		countdown(num);
  		}
  		
  		// On the final screen, show the number of correct answers, incorrect answers, and an 
  		// option to restart the game (without reloading the page).	
  			

	});

    


  

    // ********* FUNCTIONS ***************************************************//


    // Insert text into the buttons
    function insertButtons(array){

    		 for (var i = 0; i < 5; i++){
    		 	$(buttonIds[i]).html(array[i]);
    		 }

    }

    // insert Text into an html element
    function insertText(element, text) {
    	$(element).html(text);
    }

    // check user answer - if the user is correct, then return true
    function isCorrect(guess) {
    	// if the guess is currect, return true
    	if(guess == quiz[pointer].correct)
    		return true;
    	else
    		return false;
    }

    
    function countdown(count) {

    	var timer = $("#timer");
        
        if (!countNow) {
            countNow = true;
            timer.html(count);
            
            var time = setInterval(function() {
                if (count >= 0) {
                    timer.html(count);
                    count--;
                } else {
                    clearInterval(time);
                    //count = arguments[0];
                    countNow = false;
                }
            }, 1000);
        }
    }

    function newQuestion() {

    	// clear checked button
    	$('input:radio').prop('checked', false);

    	// start countdown
    	countdown(num);

    	// insert questions
    	insertText("#Mathquestion", quiz[pointer].question);
    	
    	// insert Buttons
    	insertButtons(quiz[pointer].answers);
    }


};