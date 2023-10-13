let text = document.querySelector("#text");
let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");

let speechSynthesis = window.speechSynthesis;

let utterance;

playBtn.addEventListener("click", () => {
  let inpText = text.value;

  if (inpText.trim() != "") {
    console.log(utterance, inpText);
    //   checking if the utterance is paused so it can be resumed
    if (utterance) {
      speechSynthesis.resume();
    } else {
      utterance = new SpeechSynthesisUtterance(inpText);
      // changing value of utterance value to null after it ends
      utterance.addEventListener("end", () => {
        utterance = null;
        //   changing the play/resume btn innerText
        playBtn.innerText = "Play";
      });
      speechSynthesis.speak(utterance);
      //   changing the play/resume btn innerText
      playBtn.innerText = "Resume";
    }
  }
});

pauseBtn.addEventListener("click", () => {
  if (utterance) {
    speechSynthesis.pause();
  }
});
