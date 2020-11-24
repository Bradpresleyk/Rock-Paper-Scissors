const player_hand = document.querySelector(".player-hand");
const computer_hand = document.querySelector(".computer-hand");
const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");
const header = document.querySelector(".header");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".AI");

var playerChoice = "";
var computerChoice = "";

player = 0;
AI = 0;

var choices = ["Rock","Paper","Scissors"];

function random(){
 computerPick = choices[Math.floor(Math.random(choices) * choices.length)];
};

rockbtn.addEventListener("click",()=>{
    playerChoice = "Rock";
     player_hand.innerHTML = "Rock";
     computerChoice = random();
    computer_hand.innerHTML = computerPick;
    rules();
    
})

paperbtn.addEventListener("click",()=>{
    playerChoice = "Paper";
     player_hand.innerHTML = "Paper";
     computerChoice = random();
    computer_hand.innerHTML = computerPick;
    rules();
    
})

scissorsbtn.addEventListener("click",()=>{
    playerChoice = "Scissors";
    player_hand.innerHTML = "Scissors";
    computerChoice = random();
   computer_hand.innerHTML = computerPick;
   rules();
})

function rules(){
if(playerChoice === computerPick){
    header.innerHTML = "It's a draw";
    document.body.style.background = "linear-gradient(to right, #D7DDE8, #757F9A)";
} else if(playerChoice === "Rock" && computerPick === "Scissors"){
      header.innerHTML = "You Win!";
      document.body.style.background = "linear-gradient(to right, #2bc0e4, #eaecc6)";
      player += 1;
      playerScore.innerHTML = player;
}
else if(playerChoice === "Rock" && computerPick === "Paper"){
    header.innerHTML = "Computer Wins";
    document.body.style.background = "linear-gradient(to right, #ffe000, #799f0c)";
    AI += 1;
    computerScore.innerHTML = AI;
}
if(playerChoice === "Paper" && computerPick === "Rock"){
    header.innerHTML = "You Win!";
    document.body.style.background = "linear-gradient(to right, #2bc0e4, #eaecc6)";
    player += 1;
    playerScore.innerHTML = player;
}
else if(playerChoice === "Paper" && computerPick === "Scissors"){
    header.innerHTML = "Computer Wins";
    document.body.style.background = "linear-gradient(to right, #ffe000, #799f0c)";
    AI += 1;
    computerScore.innerHTML = AI;
}
if(playerChoice === "Scissors" && computerPick === "Paper"){
    header.innerHTML = "You Win!";
    document.body.style.background = "linear-gradient(to right, #2bc0e4, #eaecc6)";
    player += 1;
    playerScore.innerHTML = player;
}
else if(playerChoice === "Scissors" && computerPick === "Rock"){
    header.innerHTML = "Computer Wins";
    document.body.style.background = "linear-gradient(to right, #ffe000, #799f0c)";
    AI += 1;
    computerScore.innerHTML = AI;
}
}
    



