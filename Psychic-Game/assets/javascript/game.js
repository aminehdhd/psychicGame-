var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var randomNumber = Math.floor(Math.random() * alphabet.length);

console.log(randomNumber);

var randomLetter = alphabet[randomNumber];

console.log(randomLetter)

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSofar = [];

function reset(){
    guessesLeft = 9;
    guessesSofar = [];
    randomNumber = Math.floor(Math.random() * alphabet.length); 
    randomLetter = alphabet[randomNumber];
}


document.onkeyup = function(event){
    var userEvent = event.key;
   
    // console.log(randomLetter, userEvent)

    if(randomLetter == userEvent){
        // console.log(randomLetter, userEvent)
        wins ++;
        document.getElementById("wins").innerText = wins;
        reset();
        
    }
    else {
        
        if (guessesLeft <= 0)
        {
            losses++;
            document.getElementById("losses").innerText = losses;
            reset();
        }
        else {
            guessesLeft--;
            console.log(guessesLeft);
            guessesSofar.push(userEvent);
            document.getElementById("guesses-sofar").innerText = guessesSofar;
            document.getElementById("guesses-left").innerText = guessesLeft;
            
        }
        
    }
}



