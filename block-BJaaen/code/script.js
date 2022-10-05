let userRoot = document.querySelector(".player");
let computerRoot = document.querySelector(".computer");

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Scissors

let dataSet = [
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "rock",
        beats: "scissors",
    }
];

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

let playerResult = document.querySelector('.playerResult');
let computerResult = document.querySelector('.computerResult');
let display = document.querySelector('.display');

function randomNumber() {
  let tempNum = Math.floor(Math.random() * 3);
  return tempNum;
}


playerResult.innerText = 0;
computerResult.innerText = 0;

function getScore(user, computer) {
    console.log(dataSet.indexOf(user), dataSet.indexOf(computer))
    if(user.name === computer.name) {
        display.innerText = "It's a Tie";
    }
    else if(user.beats === computer.name) {
        display.innerText = "You Won"
        playerResult.innerText = +playerResult.innerText + 1;
    }
    else {
        display.innerText = "Computer Won";
        computerResult.innerText = +computerResult.innerText + 1;
    }
}

let playerInitialScore = 0;
let computerInitialScore = 0;
let temp = "";

function handler(e) {
    document.querySelectorAll("i").forEach(ele => {
        ele.classList.remove('black')
    })
    e.target.classList.add('black');
    const number = randomNumber();
    computer.children[number].children[0].classList.add("black")
    let computerData = dataSet[number];
    let userData = dataSet[e.target.id];

    getScore(userData, computerData);

}

player.addEventListener("click", handler);

document.querySelector(".reset").addEventListener("click", function() {
    computerResult.innerText = 0;
    playerResult.innerText = 0;
    display.innerText = "start...";
    document.querySelectorAll("i").forEach(ele => {
        ele.classList.remove('black')
    })
})
computerResult.innerText = computerInitialScore;
playerResult.innerText = playerInitialScore;
display.innerText = "Start..."