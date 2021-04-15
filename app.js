var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

// DOM SCRIPTING IN INSPECT : STORE AS GLOBAL VARIABLE TO PLAY AROUND WITH ATTRIBUTES

btnTranslate.addEventListener("click",function clickEventHandler(){

        console.log("clicked");
        console.log("input",txtInput.value)

});
 