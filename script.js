let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const chance = Math.random()
    if (chance <= 1 / 3) {
        return "rock"
    }
    if (1 / 3 < chance <= 1 / 6) {
        return "paper"
    }
    if (1 / 6 < chance) {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors: ").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    const lossMessage = "You lost!";
    if (humanChoice == computerChoice) {
        console.log("It's a draw!")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(lossMessage)
        computerScore += 1
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(lossMessage)
        computerScore += 1
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(lossMessage)
        computerScore += 1
    } else {
        console.log("You won!")
        humanScore += 1
    }
}


function playGame() {
    for (let index = 0; index < 5; index++) {

        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log("You: " + humanChoice)
        console.log("PC : " + computerChoice)

        playRound(humanChoice, computerChoice)
    }
}

playGame()

console.log("Final Score:")
console.log("You: " + humanScore)
console.log("PC : " + computerScore)
