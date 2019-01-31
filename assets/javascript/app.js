//This is for the Canadian Trivia game
//Have a start button that will start the game


//Link with index
$("#startGame").on("click", function() {
    // console.log("You just started the game.");
    // $("#startGame").remove();
    // for(var i = 0; i < questions.length; i++) {
    //     $("#subwrapper").append("<h2>"+ questions[i].question + "</h2>");
    //     for(var j = 0; j < questions[i].answers.length; j++) {
    //         $("#subwrapper").append("<input type='radio' name='question-" +i+"' value='" +questions[i].answers[j]+ "'>" + questions[i].answers[j])
    //     };
    // };
    game.start();
});

var questions = [{
    question: "Who is the current Prime Minister of Canada?",
    answers: ["Pierre Trudeau", "Kim Cambell", "Justin Trudeau", "Brian Mulroney"],
    correctAnswer: "Justin Trudeau"
},
{question: "What is the capital of Canada?",
answers: ["Ottawa", "Montreal", "Toronto", "Winnipeg"],
correctAnswer: "Ottawa"},

{question: "What city is the coldest in the world for its population?",
answers: ["Neepawa", "Winnipeg", "Montreal", "Vancouver"],
correctAnswer: "Winnipeg"},

{question: "Are Canadians cool?",
answers: ["Most of the time", "Absolutely", "Depends on how close they are to a hockey game", "All the above"],
correctAnswer: "Absolutely"},

{question: "What are the official languages of Canada?",
answers: ["English and French", "English only", "French only", "English and British"],
correctAnswer: "English and French"},

{question: "Which sport was invented in Canada?",
answers: ["Skiing", "Buffalo Races", "Hockey", "Baseball"],
correctAnswer: "Hockey"},

{question: "What do Canadians call macaroni and cheese?",
answers: ["Cheese", "Macaroni", "Kraft Dinner", "That delicious yellow stuff"],
correctAnswer: "Kraft Dinner"},

{question: "What Canadian franchise is famous for selling donuts?",
answers: ["Dunkin' Donuts", "Tim Hortons", "Safeway", "McDonalds"],
correctAnswer: "Dunkin' Donuts"},

{question: "How many provinces does Canada have?",
answers: ["5", "12", "15", "10"],
correctAnswer: "10"},

{question: "What do tourists buy most in Canada?",
answers: ["Maple Syrup", "Sweaters", "Snow", "Water"],
correctAnswer: "Maple Syrup"}
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30, 
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Your time is up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        
            $("#startGame").remove();
            for (var i = 0; i < questions.length; i++) {
                $("#subwrapper").append("<h2>"+ questions[i].question + "</h2>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $("#subwrapper").append("<input type='radio' name='question-" +i+"' value='" +questions[i].answers[j]+ " '>" + questions[i].answers[j])
                };
            };
        
        
    },
    done: function() {
        $.each($('input[name="question-0]":checked'),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'),function() {
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'),function() {
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8]":checked'),function() {
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9]":checked'),function() {
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>You're finished, eh?</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length-(this.incorrect + this.correct))+ "</h3>");
    }
}; 