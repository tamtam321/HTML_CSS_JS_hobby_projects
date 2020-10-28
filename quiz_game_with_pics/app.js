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

        //show picture
        document.getElementById("picture").src = quiz.getQuestion().pics;

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
    document.getElementById("picture").style.visibility = "hidden";
}

var questions = 
[
    // Személyek
    new Question("pics/pics0.jpg", "Trên ảnh là ai đấy?", ["A) Nguyen Manh Hung", "B) Nguyen Van Tuan", "C) Nguyen Thi Huong", "D) Nguyen Thien Tam"], "Nguyen Thien Tam"),
    
    new Question("pics/pics1.jpg", "Trên ảnh là ai đấy?", ["A) Nguyen Manh Hung", "B) Nguyen Van Tuan", "C) Nguyen Thi Huong", "D) Nguyen Thien Tam"], "Nguyen Manh Hung"),
    
    new Question("pics/pics2.jpg", "Trên ảnh là ai đấy?", ["A) Nguyen Manh Hung", "B) Nguyen Van Tuan", "C) Nguyen Thi Huong", "D) Nguyen Thien Tam"], "Nguyen Thi Huong"),
    
    new Question("pics/pics3.jpg", "Trên ảnh là ai đấy?", ["A) Nguyen Manh Hung", "B) Nguyen Van Tuan", "C) Nguyen Thi Huong", "D) Nguyen Thien Tam"], "Nguyen Van Tuan"),

    new Question("pics/pics4.png", "Trên ảnh là ai đấy?", ["A) Bac Minh", "B) Tibi", "C) Peti", "D) Lang"], "Lang"),

    new Question("pics/pics5.png", "Trên ảnh là ai đấy?", ["A) Lang", "B) Tibi", "C) Thuy", "D) Peti"], "Thuy"),

    new Question("pics/pics6.png", "Trên ảnh là ai đấy?", ["A) Tibi", "B) Nguyen Van Tuan", "C) Peti", "D) Nguyen Thien Tam"], "Tibi"),

    // Színek
    new Question("pics/red.png", "Màu này là màu gì?", ["A) vàng", "B) đỏ", "C) xanh", "D) màu da cam"], "đỏ"),

    new Question("pics/orange.jpg", "Màu này là màu gì?", ["A) vàng", "B) đỏ", "C) xanh", "D) màu da cam"], "màu da cam"),

    new Question("pics/yellow.jpg", "Màu này là màu gì?", ["A) vàng", "B) đỏ", "C) xanh", "D) màu da cam"], "vàng"),

    new Question("pics/blue.png", "Màu này là màu gì?", ["A) vàng", "B) đỏ", "C) xanh", "D) màu da cam"], "xanh"),

    // Számok
    new Question("pics/ten.png", "Số này viết như thế nào?", ["A) trăm", "B) bảy", "C) mười", "D) trăm chín mươi chín"], "mười"),

    new Question("pics/twenty_one.png", "Số này viết như thế nào?", ["A) trăm", "B) bảy", "C) mười", "D) hai mươi mốt"], "hai mươi mốt"),

    new Question("pics/seven.jpg", "Số này viết như thế nào?", ["A) trăm", "B) bảy", "C) mười", "D) hai mươi mốt"], "bảy"),

    new Question("pics/one_hundred_ninety_nine.png", "Số này viết như thế nào?", ["A) trăm", "B) bảy", "C) mười", "D) trăm chín mươi chín"], "trăm chín mươi chín")
];

var quiz = new Quiz(questions);

populate();