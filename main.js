$(document).ready(function () {
    const toggleButton = document.getElementById("toggle-button");
    // Get the result paragraph element
    const resultParagraph = document.getElementById("result");    
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = '';
    let recognition = new window.SpeechRecognition();

    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;
    let isRecognitionRunning = false;

toggleButton.addEventListener("click", () => {
  if (!isRecognitionRunning) {
    // Start the speech recognition
    recognition.start();
    toggleButton.textContent = "Stop Speech Recognition";
    toggleButton.classList.add("stop"); // Add the stop class
    isRecognitionRunning = true;
    recognition.interimResults = true;
    recognition.continuous = true;
  } else {
    // Stop the speech recognition
    recognition.stop();
    toggleButton.textContent = "Start Speech Recognition";
    toggleButton.classList.remove("stop"); // Remove the stop class
    isRecognitionRunning = false;
  }
});

recognition.addEventListener("result", (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    resultParagraph.innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
});
});