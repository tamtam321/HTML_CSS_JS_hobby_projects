function populate()
{
    if(quiz.isEnded())
    {
        showScores();
    }
    else
    {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestion().text;

        //show choices
        var choices = quiz.getQuestion().choices;
        for(var  i = 0; i < choices.length; i++)
        {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess)
{
    var button = document.getElementById(id);
    button.onclick = function()
    {
        quiz.guess(guess);
        populate();
    }
}

function showProgress()
{
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores()
{
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = 
[
    new Question("Ki látható a képen?", ["Nguyen Manh Hung", "Nguyen Van Tuan", "Nguyen Thi Huong", "Nguyen Thien Tam"], "Nguyen Thien Tam"),
    
    new Question("Ki látható a képen?", ["Nguyen Manh Hung", "Nguyen Van Tuan", "Nguyen Thi Huong", "Nguyen Thien Tam"], "Nguyen Van Tuan"),
    
    new Question("Ki látható a képen?", ["Nguyen Manh Hung", "Nguyen Van Tuan", "Nguyen Thi Huong", "Nguyen Thien Tam"], "Nguyen Manh Hung"),
    
    new Question("Ki látható a képen?", ["Nguyen Manh Hung", "Nguyen Van Tuan", "Nguyen Thi Huong", "Nguyen Thien Tam"], "Nguyen Thi Huong")
];

var quiz = new Quiz(questions);

populate();