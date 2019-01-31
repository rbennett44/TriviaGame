// alert("The link is working");

//VARIABLES
//================================================================
var pos = 0, 
test, 
test_status, 
question, 
choice, 
choices, 
chA, 
chB, 
chC,
chD, 
correct = 0;

//the counter for the count-down
var counter = 30;
var intervalid; 

   var questions = [
       ["Who is the current Prime Minister?", "Pierre Trudeau", "Kim Cambell", "Justin Trudeau", "Brian Mulroney", "C"],
       ["What is the capital of Canada?", "Ottawa", "Montreal", "Toronto", "Winnipeg", "A"],
       ["What city is the coldest in the world for its population?", "Neepawa", "Winnipeg", "Montreal", "Vancouver", "B"],
       ["Are Canadians cool?", "Most of the time", "Absolutely", "Depends on how close they are to a hockey game", "All the above", "A"],
       ["What are the official languages of Canada?", "English and French", "Englsih only", "French only", "English and British", "A"],
       ["How many provinces does Canada have?", "10", "12", "15", "5", "A"],
       ["Which sport was invented in Canada?", "Skiing", "Buffalo Races", "Ice Hockey", "Baseball", "C"],
       ["What do Canadians call Macaroni and Cheese?", "Cheese", "Macaroni", "Kraft Dinner", "That delicious yellow stuff", "C"],
       ["What Canadian franchise is famous for selling donuts?", "Dunkin' Donuts", "Tim Hortons", "Safeway", "McDonalds", "B"],
       ["What do tourists buy most in Canada?", "Maple Syrup", "Sweaters", "Snow", "Water", "A"]

   ];

$(document).ready(function() {
    $("#start").click(function() {
        counter--;
        var sTime = setInterval(function() {
            if(counter === 0) {
                $("#show-number").html(counter);

            } 
        }, 1000 * 30);
    });
});
   function status(x) {
       return document.getElementById(x);
   }
   
   function renderQuestion() {
       test = status("test");
       if(pos >= questions.length) {
           $("#test").html("<h2>You got "+correct+ " of "+questions.length+" questions correct</h2>")
        //    test.innerHTML = "<h2>You got "+correct+ " of "+questions.length+" questions correct</h2>";
           $("#test_status").html("Test Completed");
        //    status("test_status").innerHTML = "Test Completed";
           pos = 0;
           correct = 0;
           return false
       }
       $("#test_status").html("Question "+(pos+1)+" of "+questions.length);
    //    status("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
       question = questions[pos][0];
       chA = questions[pos][1];
       chB = questions[pos][2];
       chC = questions[pos][3];
       chD = questions[pos][4]
       test.innerHTML = "<h3>"+question+"</h3>";
       test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
       test.innerHTML += "<button onclick='checkAnswer()'>Sumbmit Answer</button>"; 
   }
   function checkAnswer() {
       choices = document.getElementsByName("choices");
       for(var i = 0; i < choices.length; i++) {
           if(choices[i].checked) {
               choice = choices[i].value;
           }
       }
       if(choice == questions[pos][5]) {
           correct++;
       }
       pos++;
       renderQuestion();
   }
    

   //Setting the timer
    $('#start').on("click", run);

    function run() {
        clearInterval(intervalid);
        intervalid = setInterval(decrement, 1000);
    };

   function decrement() {
    number--;
    $('#show-number').html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
    }
   };

   function stop() {
    clearInterval(intervalid);
   };


   window.addEventListener("load", renderQuestion, false);