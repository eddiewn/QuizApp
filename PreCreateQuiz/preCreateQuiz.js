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



        deloadAnimation();
    }
})




let shrinkRadius = 1000;
function deloadAnimation(){
    const circle = document.createElement("div");
    circle.classList.add("spotlight");
    mainTag.appendChild(circle);
    circle.style.setProperty("--r", 1000 + "px");

    shrinkRadius = shrinkRadius - 20;
    circle.style.setProperty("--r", shrinkRadius + "px");

    if (shrinkRadius > 0) {
        requestAnimationFrame(deloadAnimation); 
    }else{
        window.location.href="../CreateQuiz/createQuiz.html"
    }
}

window.addEventListener("load",() =>{
    const circle = document.querySelector(".spotlight");
    let growRadius = 0;
    function loadAnimation(){
        growRadius = growRadius + 30;
        circle.style.setProperty("--r", growRadius + "px");

        if (growRadius < 1000) {
            requestAnimationFrame(loadAnimation);
        }else{
            circle.remove();
        }
    }

    requestAnimationFrame(loadAnimation);
})

    


