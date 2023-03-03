// Get the toggle button element
const toggleButton = document.getElementById("toggle-button");
// Get the result paragraph element
const resultParagraph = document.getElementById("result");

// Create a SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set the properties of the SpeechRecognition object
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

// Set a flag to indicate whether speech recognition is currently running
let isRecognitionRunning = false;

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
  if (!isRecognitionRunning) {
    // Start the speech recognition
    recognition.start();
    toggleButton.textContent = "Stop Speech Recognition";
    toggleButton.classList.add("stop"); // Add the stop class
    isRecognitionRunning = true;
  } else {
    // Stop the speech recognition
    recognition.stop();
    toggleButton.textContent = "Start Speech Recognition";
    toggleButton.classList.remove("stop"); // Remove the stop class
    isRecognitionRunning = false;
  }
});

// Add an event listener for the result event
recognition.addEventListener("result", (event) => {
  // Get the transcript from the event results
  const transcript = event.results[0][0].transcript;

  // Log the transcript to the console
  console.log(transcript);
  // Display the transcript on the page
  resultParagraph.textContent = transcript;
});
