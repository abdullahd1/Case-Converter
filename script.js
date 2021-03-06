let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveTextFile = document.getElementById("save-text-file");
let text = document.querySelector("textarea");

upperCase.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

lowerCase.addEventListener("click", function (){
    text.value = text.value.toLowerCase();
});

properCase.addEventListener("click", function (){
    let words = text.value.toLowerCase().split(" ");
    // console.log(typeof (words));
    // console.log(words);
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    text.value = words.join(" ");
});

sentenceCase.addEventListener("click", function (){
    // console.log(typeof (sentence));
    // console.log(text.value);
    let sentence = text.value.toLowerCase().split(". ");
    for (let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }
    // console.log(sentence);
    text.value = sentence.join(". ");
})

saveTextFile.addEventListener("click", function (){
    let elment = document.createElement("a");
    elment.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    elment.setAttribute('download', "text.txt");
    elment.style.display = "none";
    document.body.appendChild(elment);
    elment.click();
    document.body.removeChild(elment);
})
