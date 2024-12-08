console.log('Hello');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    switch(guess){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    let sign = prompt("What's your game?");
    return sign;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === "rock" && computerChoice ==="paper"){
        console.log('Computer won!')
        computerScore+=1
    } else if(humanChoice === "paper" && computerChoice ==="rock"){
        console.log('Human won!')
        humanScore+=1
    } else if(humanChoice === "paper" && computerChoice ==="scissors"){
        console.log('Computer won!')
        computerScore+=1
    }  else if(humanChoice === "scissors" && computerChoice ==="paper"){
        console.log('Human won!')
        humanScore+=1
    } else if(humanChoice === "rock" && computerChoice ==="scissors"){
        console.log('Human won!')
        humanScore+=1
    } else if(humanChoice === "scissors" && computerChoice ==="rock"){
        console.log('Computer won!')
        computerScore+=1
    } 
}


function playGame() {

    for (let i =0; i < 5; i ++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
