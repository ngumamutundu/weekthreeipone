const submitAnswer = document.querySelector("#submit_ans")
const quizAnswers = document.querySelectorAll(".ouranswers");
let marks = 0;
quizAnswers.forEach(function (jibu) {
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value)


    });
});
//alert(marks)
submitAnswer.addEventListener("click", function (event) {
    alert("your score is:" + marks)
})