
// ********* GOLOBAL VARIABLES **********************************************//
// Create a json array of questions with answer choices and correct answers
var quiz = [{
		
		"question": "The numerals used by today's mathematicians were developed in ...",
		"choices": ["Rome", "Arabia", "France", "Greece", "England"],
		"correct": "a",
    "answer": "Rome"
	}
	,
	{
		"question": "What set of positive integers satisfies the equation, a squared + b squared = c squared?",
		"choices": ["trigonometric identities", "Cartesian coordinates", "Pythagorean triples", "Fibonacci sequences", "ordered pairs"],
		"correct": "c",
    "answer": "Pythagorean triples"
	},

	{
		"question": "Which ancient Egyptian unit of measurement was set as the distance between the elbow and the tip of the middle finger?",
		"choices": ["cubit", "stone", "karat", "quire", "parsec"],
		"correct": "a",
    "answer": "cubit"
	}

]

var buttonIds = ["label[for=ritema]", "label[for=ritemb]", "label[for=ritemc]", "label[for=ritemd]", "label[for=riteme]"  ]

var images = { "thumbsup":"<img src='assets/images/congrats.gif' alt='Thumbs UP' id='thumbsup' style='width:304px;height:228px;'>",
				"tears":"<img src='assets/images/sadface.gif' alt='Crying Sad face' id='tears' style='width:304px;height:228px;'>",
        "timeUp": "<img src='assets/images/timeUp.png'; alt='Time UP' id='timeUp' style= 'width:304px;height:228px;'>"}

// html for displaying correct answer
var htmlAnswer = "<div class='page-header'><h1>The correct answer was:  </h1><p id = 'correctAnswer'/></div>";



window.onload = function() {


	// ********* INITIAL SETTINGS **********************************************//
	
	// hide the form
	$("form").hide();

  // hide the stats
  $("#stats").hide();

	// do not start counting until a question pops up
	var countNow = false;

	// question pointer
	var pointer = -1;

	// number of seconds for each question
	var num = 1;

	// number of correct choices
	var numCorrect = 0;
	var numWrong = 0;
	
	
  // ********* SCRIPT LOGIC **********************************************//
  
  if ($("#timer") === "0") {
    console.log("Time up!");
  }


  // ********* EVENT LISTENERs **********************************************//
    
    //  Start button
    var btn = document.getElementById("btn");
    
    btn.onclick = function() {
        $("form").show();
        newQuestionPage();     
    };

        //  Start button
    var restart = document.getElementById("restart");
    
    restart.onclick = function() {

        reset();
        $("form").show();
        newQuestionPage();     
    };

    // Uncheck the radio button after inputting answer
    $( "input[type='radio']" ).click(function() {
  		this.checked = false;
  	});


    $(".radio-item label").on("click", function(event) {

    	// get the multiple choice value off of the radio item label id
  		var response = ($(this).attr('for').slice(-1));
  		
      // get the label of the correct answer
  		correctResponse = quiz[pointer].answer;
  		
  		// If the player selects the correct answer, show a screen congratulating them for 
  		// choosing the right option. After a few seconds, display the next question -- do this 
  		// without user input.
  		if(isCorrect(response)) {

        // Hide the form and display the image
  			$("form").hide();
        $("#timer").hide();
        $(".answerDisplay").show();
        $(".answerDisplay").html(images.thumbsup);

  			// show the new question after 2 seconds
  			setTimeout(function(){
  	
            $(".answerDisplay").hide();
            $("form").show();
  					newQuestionPage(); 
			   }, 2500);

  			numCorrect++;
		}

		 
		//If the player chooses the wrong answer, tell the player they selected the wrong option 
    //and then display the correct answer. Wait a few seconds, then show the next question.
		else if	(!isCorrect(response) && countNow){
        $("form").hide();
        $("#timer").hide();
        $(".answerFeedback").show();
        $(".answerFeedback").html(images.tears);
  			
  			// show the correct answer
  			setTimeout(function(){
          $(".answerFeedback").hide();
          $(".answerDisplay").show();
  				$(".answerDisplay").html(htmlAnswer);
  				$("#correctAnswer").html(correctResponse);

			}, 2500);

  			// show the new question after 2 seconds
  			setTimeout(function(){
  					$("form").show();
            $(".answerDisplay").hide();
  					newQuestionPage(); 
			}, 5000);

  			numWrong++;

		}
  				
  		


  			
  
	});

  

    // ********* FUNCTIONS ***************************************************//

    // Function to set default values
    function reset() {

      // hide the form
      $("form").hide();

      // hide the stats
      $("#stats").hide();

      // do not start counting until a question pops up
      countNow = false;

      // question pointer
      pointer = -1;

      // number of correct choices
      numCorrect = 0;
      numWrong = 0;

      console.log("completed reset");

    }
    
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
            $("#timer").show();
            
            var time = setInterval(function() {
                if (count > 0) {
                    timer.html(count);
                    count--;

                } else if( count == 0) {
                	timer.html(count);
                  
                  // If the player runs out of time, tell the player that time's up and 
                  // display the correct answer. Wait a few seconds, then show the next question.
                  clearInterval(time);      
                  displayImage();
                  numWrong++;

                }
 
            }, 1000);

        }   
    };

    // creates a new question page for each quiz
    function newQuestionPage() {

    	pointer++; 		// Offer a new question as long as questions remain
    	if (pointer < quiz.length) {
		
    	// stop timer
    	countNow = false;

    	// start countdown
    	countdown(num);

    	// insert questions
    	insertText("#Mathquestion", quiz[pointer].question);
    	
    	// insert Buttons
    	insertButtons(quiz[pointer].choices);
    	
    	}
    
    	else {

    		// stop timer
    		countNow = false;

        // On the final screen, show the number of correct answers, incorrect answers, and an 
        // option to restart the game (without reloading the page). 
        $("form").hide();
        $("#stats").show();

        finishGame();

    	}

		
	}

    function displayImage() {
                  $("form").hide();
                  $("#timer").hide();
                  $(".answerFeedback").show();
                  $(".answerFeedback").html(images.timeUp);

                  // show the correct answer
                  setTimeout(function(){
                    $(".answerFeedback").hide();
                    $(".answerDisplay").show();
                    $(".answerDisplay").html(htmlAnswer);
                    $("#correctAnswer").html(quiz[pointer].answer);

                  },
                  2500
                );

                  setTimeout(function(){
                   $(".answerDisplay").hide();
                   $("form").show(); 
                   newQuestionPage();
                   

                  },
                  5000
                );

           } 
  function finishGame() {
      $("#wins").html(numCorrect);
      $("#losses").html(numWrong);

  }                     

};