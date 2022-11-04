const submitAnswer = document.querySelector("#submit_ans");
const quizAnswers = document.querySelectorAll(".ouranswers");

let marks = 0;
let total = 0;
quizAnswers.forEach(function (jibu) {
    if (parseInt(jibu.value) > 0) { total += parseInt(jibu.value); }

    else { total = total; }
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value)


    });
});
//alert(marks)
submitAnswer.addEventListener("click", function (event) {
    let score =(marks/total)*100;
    let level = "";


    if (score > 80){
        level += "Excellently Passed, you deserve a full body massage on my bill";
    }

    else if(score >= 50 && score <= 80 ){
        level += "Fairly Passed";
    }

    else{
        level += "Poor performance, Please retake test and see me in my office.";

    }
    alert("You have scored: " + score +"%"+level);

    //$("#final_ans").text(" )


})


