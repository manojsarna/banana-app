var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output");

outputDiv.innerText = "Manoj Sarna"

//console.log(txtInput1)

// DOM SCRIPTING IN INSPECT : STORE AS GLOBAL VARIABLE TO PLAY AROUND WITH ATTRIBUTES

btnTranslate.addEventListener("click",clickEventHandler);


function clickEventHandler(){

    console.log("clicked");
    console.log("input",txtInput.value)
    outputDiv.innerText = txtInput.value

}
 