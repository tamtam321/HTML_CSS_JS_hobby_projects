/*Konstruktor*/
function Quiz(questions)
{
    this.score = 0;
    
    // Kérdéseket tároló tömb -> Honnan tudjuk, hogy tömb ? Csak tudjuk ¯\_(ツ)_/¯.
    // Ki kell következtetni a típusát.
    this.questions = questions; 
    this.questionIndex = 0;
}

/*Quiz osztályhoz tartozó fv-ek*/
Quiz.prototype.getQuestion = function() // Getter fv
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function()
{
    return this.questions.length == this.questionIndex;
}

Quiz.prototype.guess = function(my_answer)
{
    if(this.getQuestion().correctAnswer(my_answer))
    {
        this.score++;
    }

    this.questionIndex++;
}