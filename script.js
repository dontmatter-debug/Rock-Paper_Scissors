
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerVsComp = document.getElementById('player-vs-computer')
const wonOrLost = document.getElementsByClassName('win-or-lose')[0]

const winCount = document.getElementById('winz');
const lossCount = document.getElementById('losts');
const drawCount = document.getElementById('tiedz');

let stats = JSON.parse(localStorage.getItem('stats')) || 
{ wins: 0, losses: 0, ties: 0 };
;

let moves = ['rock', 'paper', 'scissors'];
let result;
let gameRez;


function updateStatsDisplay() {
            winCount.innerText = stats.wins;
            lossCount.innerText = stats.losses;
            drawCount.innerText = stats.ties;
        }


function playGame(playerMove){

let randomIndex = Math.floor(Math.random() * moves.length)
let computerMove = moves[randomIndex];

if(playerMove === 'rock'){
    if(computerMove === 'rock') {
        result = `Tie.`;
        gameRez = `Both chose <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}">.`
        stats.ties++;
    } else if(computerMove === 'paper'){
        result = `You lose.`;
        gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
       stats.losses++;
    }else{
        result = `You win.`;
        gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
        stats. wins++;
    
    }


} else if(playerMove === 'paper'){
    if(computerMove === 'rock') {
    result = `You win.`;
    gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
   stats.wins++;
    } else if(computerMove === 'paper'){
        result = `Tie.`;
        gameRez = `Both chose <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}">.`
        stats.ties++;
    }else{
        result = `You lose.`;
        gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
        stats.losses++;

    }


} else if(playerMove === 'scissors') {

    if(computerMove === 'rock') {
    result = `You lose.`;
    gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
    stats.losses++;
    } else if(computerMove === 'paper'){
        result = `You win.`;
        gameRez = `You <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}"> - <img class="result-icon" src="${computerMove}-emoji.png" alt="${computerMove}"> Computer. `;
        stats.wins++;
    }else{
        result = `Tie.`;
        gameRez = `Both chose <img class="result-icon" src="${playerMove}-emoji.png" alt="${playerMove}">.`
        stats.ties++;
}
}

playerVsComp.innerHTML = gameRez;
wonOrLost.innerText = result;
updateStatsDisplay()
localStorage.setItem('stats', JSON.stringify(stats));
};

updateStatsDisplay();
rockButton.addEventListener('click', () => {
    playGame('rock');
});

paperButton.addEventListener('click', () => {
    playGame('paper');
});

scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});

document.getElementById('reset').addEventListener('click', () => {
    stats = { wins: 0, losses: 0, ties: 0 };
    updateStatsDisplay()
    localStorage.setItem('data', JSON.stringify(stats));
    localStorage.clear();
});
