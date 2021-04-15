

// DOM SCRIPTING IN INSPECT : STORE AS GLOBAL VARIABLE TO PLAY AROUND WITH ATTRIBUTES

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("There is something with server, come again after sometime")
}


function clickHandler() {
    //input
    var inputText = txtInput.value; 

    //processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
 