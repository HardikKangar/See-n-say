// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Define the arrays for generating random phrases
var nouns = ['The turkey', 'Mom', 'Dad', 'the dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes', 'forest'];


// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var speakButton = document.querySelector('button');
var button1 = document.getElementById('button1'); // Reference to Button 1
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var textToSpeak = ''; // Empty initial value
var index = 0; // Current index of Array 1

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function generateRandomPhrase() {
	var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
	var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
	var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	var randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
	var randomPlace = places[Math.floor(Math.random() * places.length)];

	textToSpeak = randomNoun + ' ' + randomVerb + ' ' + randomAdjective + ' ' + randomNoun2 + ' ' + randomPlace + '.';
  index++; // Increment the index for the next element in Array 1

  // Reset the index if it exceeds the length of Array 1
  if (index >= nouns.length) {
    index = 0;
  }

  // Update the result paragraph with the generated phrase
  document.getElementById('result').textContent = textToSpeak;

  // Speak the updated phrase
  speakNow(textToSpeak);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
	generateRandomPhrase();
}

button1.onclick = function() {
	generateRandomPhrase();
  };
  
button2.onclick = function() {
generateRandomPhrase();
};

button3.onclick = function() {
generateRandomPhrase();
};

button4.onclick = function() {
generateRandomPhrase();
};

button5.onclick = function() {
generateRandomPhrase();
};