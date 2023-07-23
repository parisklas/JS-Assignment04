// POSSIBLE OUTCOMES:
// rock destroys scissors
// scissors cut paper
// paper covers rock
// Tie

// Begin by prompting user for their choice.
// window.confirm("Let's play Rock, Paper, Scissors.");
let userChoice = prompt("Enter your choice: rock, paper, or scissors.");
console.log("The user chose " + userChoice);


// Next, collect computer's choice in string value type.
let options = ["rock", "paper", "scissors"];
let getRandomInt = Math.floor(Math.random() * 3);
let computerChoice = options[getRandomInt];
console.log("The computer chose " + computerChoice);


// Next, who won? Check user input against computer.
if (userChoice === computerChoice) {
    alert ("It's a draw! Try again!");
}

if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        alert ("You win! Computer chose scissors. Rock smashes scissors.");
    } else {
        alert ("You lose! Computer chose paper. Paper covers rock.");
    }
} else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        alert ("You win! Computer chose rock. Paper covers rock.");
    } else {
        alert ("You lose! Computer chose scissors. Scissors cuts paper.");
    }
} else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
        alert ("You lose! Computer chose rock. Rock smashes scissors.");
    } else {
        alert ("You win! Computer chose paper. Scissors cuts paper.");
    }
}






/*
} else if (userChoice === 'rock' && computerChoice === 'paper') {
    alert ("You lose! Computer chose paper. Paper covers rock.");
} else if (userChoice === 'rock' && computerChoice === 'scissors') {
    alert ("You win! Computer chose scissors. Rock smashes scissors.");
} else if (userChoice === 'paper' && computerChoice === 'rock') {
  alert ("You win! Computer chose rock. Paper covers rock.");
} else if (userChoice === 'paper' && computerChoice === 'scissors') {
  alert ("You lose! Computer chose scissors. Scissors cuts paper.");
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
    alert ("You win! Computer chose paper. Scissors cuts paper.");
} else if (userChoice === 'scissors' && computerChoice === 'rock') {
    alert ("You lose! Computer chose rock. Rock smashes scissors.");
}






// Next, reset computer's random choice to string value
if (computerPlay == 0) {
    computerChoice.toString("rock");
    console.log("Computer chose Rock.")
} else if (computerPlay == 1) {
    computerChoice.toString("paper");
    console.log("Computer chose Paper.");
} else {
    computerChoice.toString("scissors");
    console.log("Computer chose scissors");
}


function replay(opt) {
    var opt = window.prompt("Play again? (y / n)");
    // stuck here.
}


// Next, who won? Check user input against computer.
if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
          window.alert("Computer chose paper. Paper covers rock. You lose!");
    } else if (computerChoice === 'scissors') {
          window.alert("Computer chose scissors. Rock destroys scissors. You win!");
    } else {
          window.alert("Computer chose rock. It's a draw!");
          //let replay = window.prompt("Play again? (y/n)");
            //  if (replay = 'y') {
            //      replay script // how do I do this?
            //  } else {
            //      close screen // how to do this?
            //  } // OR, do function replay here??
    }
} else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        window.alert("Computer chose scissors. Scissors cut paper. You lose!");
    } else if (computerChoice === 'rock') {
        window.alert("Computer chose rock. Paper covers rock. You win!");
    } else {
        window.alert("Computer chose paper. It's a draw!");
    }
} else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        window.alert("Computer chose rock. Rock destroys scissors. You lose!");
    } else if (computerChoice = 'paper') {
        window.alert("Computer chose paper. Scissors cuts paper. You win!");
    } else {
        window.alert("Computer chose scissors. It's a draw!");
    }
}
*/