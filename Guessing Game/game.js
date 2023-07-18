function playGuessingGame(numToGuess = 6, numOfGuesses = 10){
  let guess = prompt("please enter a number between 1 and 10");
let trials = numOfGuesses;


while (numOfGuesses > 0){
//first condition to check if guess is equal to number to be guessed
    if (guess == numToGuess) {
        numOfGuesses--;
        alert("Successfully Guessed Number in "+ (trials - numOfGuesses) + " trials");
         return 0;
    }

    //condition to show that number guessed is smaller than number to be guessed
   else if (guess < numToGuess) {
        numOfGuesses--;
        guess = prompt(guess + " is to small \n please enter a number between 1and 100");
    }
    
    //condition to show that number guessed is bigger than number to be guessed
    else if(guess > numToGuess) {
        numOfGuesses--;
        guess = prompt(guess + " is to big \n please enter a number between 1and 100");
    }

    //condition to cancel trials
    else if (guess == null) {
        return 0;
    }
    
    //condition to show that number guessed is successful 
    else if (guess == "") {
        guess = prompt("please enter a number");
        }

        //condition to check if value is not a number
    else if (isNaN(guess)) {
        guess = prompt("please enter a number");
    }
    }

    
    //condition to show limited number of trials
    
    if (numOfGuesses == 0) {
        alert("you have Exhausted your number of trials");
        return 0;
    }
   
}