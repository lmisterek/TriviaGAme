
// Create a json array of questions with answer choices and correct answers
var quiz = [{
		
		"question": "The numerals used by today's mathematicians were developed in ...",
		"answers": ["Rome", "Arabia", "France", "Greece", "England"],
		"correct": "Rome"
	}
	,
	{
		"question": "What set of positive integers satisfies the equation, a squared + b squared = c squared?",
		"answers": ["trigonometric identities", "Cartesian coordinates", "Pythagorean triples", "Fibonacci sequences", "ordered pairs"],
		"correct": "Pythagorean triples"
	},

	{
		"question": "Which ancient Egyptian unit of measurement was set as the distance between the elbow and the tip of the middle finger?",
		"answers": ["cubit", "stone", "karat", "quire", "parsec"],
		"correct": "cubit"
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
  		var answer = ($(this).attr('for'));
  		
  		// check answers
  		checkAnswer(answer);

  		// update statistics

  		// display for correct answer

  		// display for

  		// update new quesion
  		pointer++;

  		// Offer a new question as long as questions remain
  		if (pointer < quiz.length)
  			newQuestion(); 

	});

    


  

    // ********* FUNCTIONS ***************************************************//


    // Insert text into the buttons
    function insertButtons(array){

    		 $("label[for=ritema]").html(array[0]);
    		 $("label[for=ritemb]").html(array[1]);
    		 $("label[for=ritemc]").html(array[2]);
    		 $("label[for=ritemd]").html(array[3]);
    		 $("label[for=riteme]").html(array[4]);
    }

    // insert Text into an html element
    function insertText(element, text) {
    	$(element).html(text);
    }

    // check user answer - if the user is correct, then return true
    function checkAnswer(guess) {
    	console.log(guess);
    	// get correct answer
    	// compare values
    	//if (guess == )
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

    	// start countdown
    	countdown(num);

    	// insert questions
    	insertText("#Mathquestion", quiz[pointer].question);
    	
    	// insert Buttons
    	insertButtons(quiz[pointer].answers);
    }


};