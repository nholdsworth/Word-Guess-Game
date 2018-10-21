/*2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s 
     sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CREATING ME SOME VARIABLES USING LET INSTEAD OF VAR

// Create an array of words
let words = ['Gaunter O\'Dimm', 'Geralt', 'Vessimir', 'Dandelion', 'Lambert'];

/* This is the code to generate a random word from the array and store it in the 
randomWord variable name when key is pressed */
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

//This is an empty array to hold the underscores for my hangman
let underscores = [];

//This is an empty array to hold the letters guessed
let lettersGuessedArray = [];

//Loop through the Array
let arrayLength = words.length;

// This is my variable to keep track of number of wins
let wins = 0;

//This is the number of guesses the user has left before losing
let chancesLeft = 7;

//splits random Word 
let splitWord = randomWord.split('');

/*This Array holds the actual word SPLIT into it's own ARRAY and is not converted to underscores.  
    DOES NOT DISPLAY until the function letterChoice is called which will check to see if 
    the letter guessed is in the current randomWord*/
let randomWordArray = randomWord.split('');

//This variable holds the reference to the 'win counter' id tag in the HTML.
let winCounter = document.getElementById('win-counter');

//This holds a reference to the instructions id in the HTML.
let instructionsText = document.getElementById('instructions');

//This holds a reference to the current word HTML element 
let currentWordText = document.getElementById('current-word');

//This is my picture which I want to change if user wins or loses!
let currentPicture = document.getElementById('current-picture');

//This holds a reference to the letters-guessed HTML element 
let lettersGuessedArray = document.getElementById('letters-guessed');

/*This function splits chosen word into an array. so that each character will then have it's    
    own index which can then be be replaced by the the userInput function*/
function resetGame() {

    for (let i = 0; i < splitWord.length; i++) {
        splitWord[i] = '_';
    }

    console.log(splitWord);
}

// Remeber you have to CALL the function where you want it!
resetGame()


/*This function says that when a key is pressed, if the userGuess event.key matches 
one of the letters in the randomWordArray then replace the blank underscore which is 
held in the variable splitWord with the actual letter from randomWordArray 
otherwise if the userGuess is not in the randomWordArray push it into the 
lettersGuessedArray, subtract 1 from the chances left and change the text content to 
reflect the updated number of chancesLeft  */

function letterChoice (userInput) {
    console.log(userInput)
    for (let i = 0; i < randomWordArray.length; i++) {
        if (userInput === randomWordArray[i]) {
            splitWord[i] = userInput;
            console.log(splitWord);
        } else {
            lettersGuessedArray.push(userInput);
            chancesLeft -= 1;
            remainingGuessesText.textContent = `You have ${chancesLeft}!`;
        }    
    }
}



//THIS IS WHERE MY GAME BEGINS



//Set correct key presses to corresponding index number in the array.

/*If user chooses a letter that exists in the currentWordText 
    1. Switch underscore with the correct letter (in the right place obviously)*/

document.onkeyup = function (event) {

    // Hides instructions p tag in the HTML when key is pressed
    instructionsText.textContent = '';

    //Display Undersores to represent the random word letters
    // currentWordText.innerHTML = splitWord.join(' ');

    //when the user presses a key captures it and assigns it to userGuess
    let userGuess = event.key;

    letterChoice(userGuess);
    //This replaces the empty HTML element with the id current word with a rondomly generated word
    // currentWordText.textContent = randomWord;

    currentWordText.innerHTML = splitWord.join(' ');

    if (chancesLeft = 0) {
        resetGame();
    }

    
    
}

