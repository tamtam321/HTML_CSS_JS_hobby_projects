/*Konstruktor*/
function Question(pics, text, choices, answer)
{
    this.pics = pics;

    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

/*Question osztályhoz tartozó fv*/
Question.prototype.correctAnswer = function(my_choice)
{
    return my_choice == this.answer;
}