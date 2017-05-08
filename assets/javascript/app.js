
// Create a json array of questions with answer choices and correct answers
var quiz = [{
		
		"question": "The numerals used by today's mathematicians were developed in ...",
		"choices": ["Rome", "Arabia", "France", "Greece", "England"],
		"correct": "a"
	}
	,
	{
		"question": "What set of positive integers satisfies the equation, a squared + b squared = c squared?",
		"choices": ["trigonometric identities", "Cartesian coordinates", "Pythagorean triples", "Fibonacci sequences", "ordered pairs"],
		"correct": "c"
	},

	{
		"question": "Which ancient Egyptian unit of measurement was set as the distance between the elbow and the tip of the middle finger?",
		"choices": ["cubit", "stone", "karat", "quire", "parsec"],
		"correct": "a"
	}

]

var buttonIds = ["label[for=ritema]", "label[for=ritemb]", "label[for=ritemc]", "label[for=ritemd]", "label[for=riteme]"  ]

var inputIds = ["ritema", "ritemb", "ritemc", "ritemd", "riteme"  ]




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
        newQuestionPage();     
    };

    // Uncheck the radio button after inputting answer
    $( "input[type='radio']" ).click(function() {
  		this.checked = false;
	});


    $(".radio-item label").click(function( event ) {
  		
    	// get the multiple choice value off of the radio item label id
  		var response = ($(this).attr('for').slice(-1));
  		
  		// If the player selects the correct answer, show a screen congratulating them for 
  		// choosing the right option. After a few seconds, display the next question -- do this 
  		// without user input.
  		if(isCorrect(response)) {
  			 
  			//var oldhtml = $("body").html();
  			$("body").html("<img src='assets/images/congrats.gif' alt='Thumbs UP' id='thumbsup' style='width:304px;height:228px;'>");

  			// show the new question after 2 seconds
  			//setTimeout(function(){
  			//		$("body").html(oldhtml);
			//}, 2500);
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

  			// provide another question page with and pass the button id
  			newQuestionPage(); 

  		}
  		
  		// On the final screen, show the number of correct answers, incorrect answers, and an 
  		// option to restart the game (without reloading the page).	
  			

	});

    


  

    // ********* FUNCTIONS ***************************************************//


    // Insert text into the buttons
    function insertButtons(choices){
    	for (var i = 0; i < 5; i++)
    		$(buttonIds[i]).html(choices[i]);
    }

    // insert Text into an html element
    function insertText(element, text) {
    	$(element).html(text);
    }

    // check user answer - if the user is correct, then return true
    function isCorrect(guess) {
    	if(guess == quiz[pointer].correct)
    		return true;
    	else
    		return false;
    }

    // countdown timer
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

    // creates a new question page for each quiz
    function newQuestionPage() {

    	// stop timer
    	countNow = false;

    	// start countdown
    	countdown(num);

    	// insert questions
    	insertText("#Mathquestion", quiz[pointer].question);
    	
    	// insert Buttons
    	insertButtons(quiz[pointer].choices);


		}

		


};