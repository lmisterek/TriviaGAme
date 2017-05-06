
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



console.log($('input[name="ritem"]:checked').val());

// do not display 


window.onload = function() {

	var timer = $("#timer");

    
    var counting = false;
    $("form").hide();

    function countdown(count) {
        
        if (!counting) {
            counting = true;
            timer.html(count);
            
            var time = setInterval(function() {
                if (count >= 0) {
                    timer.html(count);
                    count--;
                } else {
                    clearInterval(time);
                    //count = arguments[0];
                    counting = false;
                }
            }, 1000);
        }
    }

    // ********* EVENT LISTENERs **********************************************//
    
    //  Start button
    var btn = document.getElementById("btn");
    
    btn.onclick = function() {
        countdown(30);
        $("form").show();
       
    };

    insertText("#Mathquestion", quiz[0].question);
    insertButtons(quiz[0].answers);
  

    // ********* EVENT LISTENERs **********************************************//


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
    function checkAnswer() {
    	
    	// get user response
    	console.log($('input[name="ritem"]:checked').val());
    	console.log("This is working");
    	// get correct answer
    	// compare values
    }

    checkAnswer();

};