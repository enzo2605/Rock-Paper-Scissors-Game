let scoreUsrEl, scorePcEl, img_user_result, img_pc_result, user_result, pc_result, box_game_choices, scores;
let usrScore, pcScore;

scores = [0,0];
usrScore = 0;
pcScore = 0;


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


for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function () {
        let id = choices[i].getAttribute('id');
        img_user_result.src = 'img/' + id + '.png';
        //box_game_choices.style.display = 'none';
        scores[0] = id;

        computer();

        calculateScore(scores[0], scores[1]);
    });
}

function computer() {
    var rand_choice = ['rock', 'paper', 'scissors'];
    var seed = Math.floor(Math.random() * 3);

    img_pc_result.src = 'img/' + rand_choice[seed] + '.png';
    //box_game_choices.style.display = 'block';
    scores[1] = rand_choice[seed];
}

function calculateScore(usr, pc) {

    if((usr == 'paper' && pc == 'rock') || (usr == 'rock' && pc == 'scissors') || (usr == 'scissors' && pc == 'paper')) {
        usrScore++;
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' You win!';
        scoreUsrEl.textContent = usrScore;
        document.querySelector('.box-game__result--text').style.color = '#06bb06';
        console.log('user: ' + usr);
        console.log('pc: ' + pc);
    }
        
    else if((pc == 'paper' && usr == 'rock') || (pc == 'rock' && usr == 'scissors') || (pc == 'scissors' && usr == 'paper')) {
        pcScore++;
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' Computer win!';
        scorePcEl.textContent = pcScore;
        document.querySelector('.box-game__result--text').style.color = '#EB4D4D';
        console.log('user: ' + usr);
        console.log('pc: ' + pc);
    }
        
    else {
        user_result.textContent = usr;
        pc_result.textContent = pc;
        winner.textContent = ' Parity';
        document.querySelector('.box-game__result--text').style.color = '#fff';
        console.log('user: ' + usr);
        console.log('pc: ' + pc);
    }
        
}