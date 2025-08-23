const continueButton = document.getElementById("continueButton");
const quizName = document.getElementById("quizName");
const quizDescription = document.getElementById("quizDescription");
const mainTag = document.querySelector("main");


continueButton.addEventListener("click", () => {

    if(quizName.value.trim() == "" || quizDescription.value.trim() == ""){
        alert("You are missing some inputs my friend");
    }else{
        sessionStorage.setItem("quizName", quizName.value);
        sessionStorage.setItem("quizDescription", quizDescription.value);



        deloadAnimation("../CreateQuiz/createQuiz.html");
    }
})


window.addEventListener("load",() =>{
    loadAnimation();
})

    


