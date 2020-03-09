/***************************************************************************
 *                       DICHIARAZIONE VARIABILI
****************************************************************************/

let scores, usrScore, pcScore;
let scoreUsrEl, scorePcEl;
let img_user_result, img_pc_result;
let user_result, pc_result, winner;
let choices, box_game_choices;
let winner_modal, modal_content, modal;
let maxScore = 5;
let usr_tab, pc_tab;

/***************************************************************************
 *                       INIZIALIZZAZIONE VARIABILI
****************************************************************************/

/*** Scoreboard ***/
scoreUsrEl = document.querySelector('#name-1');
scorePcEl = document.querySelector('#name-2');

/*** Images of scoreboard ***/
img_user_result = document.querySelector('#user');
img_pc_result = document.querySelector('#computer');

/*** Message of the scoreboard ***/
user_result = document.querySelector('#user-result');
pc_result = document.querySelector('#pc-result');
winner = document.querySelector('#winner');

/*** Elements of choices ***/
choices = document.querySelectorAll('.choice__img');
box_game_choices = document.querySelector('.box-game__choices');

/*** Elements of modal ***/
winner_modal = document.querySelector('#winner-modal');
modal = document.querySelector('.modal');
modal_content = document.querySelector('.modal__content');
usr_tab = document.querySelector('#usrTab');
pc_tab = document.querySelector('#pcTab');
modal_exit = document.querySelector('.modal__exit');

/***************************************************************************
 *                       GAME
****************************************************************************/

init();

for (let i = 0; i < choices.length; i++) {

    choices[i].addEventListener('click', function () {

        if(usrScore < maxScore && pcScore < maxScore) {
            let id = choices[i].getAttribute('id');

            img_user_result.src = 'img/' + id + '.png';
            scores[0] = id;

            computer();

            calculateScore(scores[0], scores[1]);

            console.log('userScore: ' + usrScore + ' pcScore: ' + pcScore);
        } 
    });
}

modal_exit.addEventListener('click', function () {
    modal.style.display = 'none';
    modal_content.classList.remove('animation-modal');
    init();
});

/***************************************************************************
 *                            FUNZIONI
****************************************************************************/

function init() {
    scores = [0,0];
    usrScore = 0;
    pcScore = 0;
    //1. Reset scoreboard
    scoreUsrEl.textContent = usrScore;
    scorePcEl.textContent = pcScore;
    //2. Reset box-game results
    img_user_result.src = ' '; 
    img_pc_result.src = ' '; 
}

function computer() {
    var rand_choice = ['rock', 'paper', 'scissors'];
    var seed = Math.floor(Math.random() * 3);

    img_pc_result.src = 'img/' + rand_choice[seed] + '.png';
    
    scores[1] = rand_choice[seed];
}

function calculateScore(usr, pc) {

    //cases in which the user win
    if ((usr == 'paper' && pc == 'rock') || (usr == 'rock' && pc == 'scissors') || (usr == 'scissors' && pc == 'paper')) {
        usrScore++;
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' You win!';
        scoreUsrEl.textContent = usrScore;
        document.querySelector('.box-game__result--text').style.color = '#06bb06';
        checkScore();
        //console.log('user: ' + usr);
        //console.log('pc: ' + pc);
    }

    //cases in which the pc win
    else if ((pc == 'paper' && usr == 'rock') || (pc == 'rock' && usr == 'scissors') || (pc == 'scissors' && usr == 'paper')) {
        pcScore++;
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' Computer win!';
        scorePcEl.textContent = pcScore;
        document.querySelector('.box-game__result--text').style.color = '#EB4D4D';
        checkScore();
        //console.log('user: ' + usr);
        //console.log('pc: ' + pc);
    }

    //cases in which tthere is parity
    else {
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' Parity';
        document.querySelector('.box-game__result--text').style.color = '#fff';
        //console.log('user: ' + usr);
        //console.log('pc: ' + pc);
    }

}

function checkScore() {

    usr_tab.textContent = usrScore;
    pc_tab.textContent = pcScore;

    if(usrScore == maxScore) {
        //1. Show modal
        winner_modal.textContent = ' You win!';
        modal.style.display = 'block';
        modal_content.classList.add('animation-modal');
    } 

    else if(pcScore == maxScore) {
        //1. Show modal
        winner_modal.textContent = ' Computer win!';
        modal.style.display = 'block';
        modal_content.classList.add('animation-modal');
    }
}