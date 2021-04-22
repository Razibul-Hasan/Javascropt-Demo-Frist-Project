let in_pot = document.querySelector("#input_box");
let out_pot = document.querySelector("#out_button");

out_pot.addEventListener('click', function() {
    let result = in_pot.value;
    let utterance = new SpeechSynthesisUtterance(result);
    speechSynthesis.speak(utterance);
})