var parent = document.getElementById("questionCreationContainer");


function setupButton(){
var getFiller = document.getElementById("addFillerAnswerButton");



    getFiller.addEventListener("click", () => {
    getFiller.remove();


    const newText = document.createElement("h1");
    newText.textContent = "Filler answer";
    parent.appendChild(newText);

    const newInput =  document.createElement("INPUT");
    newInput.setAttribute("type", "text");
    parent.appendChild(newInput);

    parent.appendChild(document.createElement("br"));


    const newButton = document.createElement("button")
    newButton.id = "addFillerAnswerButton";
    newButton.textContent = "Add Filler Answer";
    parent.appendChild(newButton);

    setupButton();
})
};


setupButton();
