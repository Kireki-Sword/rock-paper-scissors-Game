const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(player){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    computerDisplay.textContent = "COMPUTER: " + computerChoice;
    const playerChoice = player;
    playerDisplay.textContent = "PLAYER: " + player;

    if (computerChoice === player){
        resultDisplay.textContent = "IT'S A TIE!";
    }
    else if (computerChoice === 'ROCK'){
        if (playerChoice === 'PAPER'){
            resultDisplay.textContent = "PLAYER WINS!";
        }
        if (playerChoice === 'SCISSORS'){
            resultDisplay.textContent = "COMPUTER WINS!";
        }
    }
    else if (computerChoice === 'PAPER'){
        if (playerChoice === 'ROCK'){
            resultDisplay.textContent = "COMPUTER WINS!";
        }
        if (playerChoice === 'SCISSORS'){
            resultDisplay.textContent = "PLAYER WINS!";
        }
    }
    else if (computerChoice === 'SCISSORS'){
        if (playerChoice === 'ROCK'){
            resultDisplay.textContent = "PLAYER WINS!";
        }
        if (playerChoice === 'PAPER'){
            resultDisplay.textContent = "COMPUTER WINS!";
        }
    }
}
