// Jacob Phillips, 5.7.2025

// I can't remove any event listeners from the choices, so there may be endless recursion

var container = document.querySelector(".container");
var question = document.querySelector(".question p");
var image = document.querySelector("img");
var answerList = document.querySelector(".answer");
var answer = document.querySelector(".answer p");
var incorrectAnswer = document.querySelector(".incorrect");
var answerA = document.querySelector(".answer p:nth-child(1)");
var answerB = document.querySelector(".answer p:nth-child(2)");
var answerC = document.querySelector(".answer p:nth-child(3)");
var answerD = document.querySelector(".answer p:nth-child(4)");

answerList.addEventListener("click", function global() {
    incorrectAnswer.textContent = "Incorrect answer!";
    return;
}); 
answerD.addEventListener("click", function question1Correct() {
    question.textContent = "Question 2:";
    image.src = "images/children2.jpg";
    image.alt = "3 children running during a sunset toward the camera";
    incorrectAnswer.remove();

    answerA.textContent = "6";
    answerB.textContent = "3";
    answerC.textContent = "9";
    answerD.textContent = "7";
    return;
});

answerB.addEventListener("click", function question2Correct() {
    question.textContent = "Question 3:";
    image.src = "images/children3.jpg";
    image.alt = "9 children running on an empty field";
    incorrectAnswer.remove();

    answerA.textContent = "9";;
    answerB.textContent = "11";
    answerC.textContent = "6";
    answerD.textContent = "7";
});

answerA.addEventListener("click", function question3Correct() {
    var body = document.querySelector("body");

    body.style.backgroundColor = "green";
    body.textContent = "Congratulations! You have completed the quiz!";

    container.remove();
});