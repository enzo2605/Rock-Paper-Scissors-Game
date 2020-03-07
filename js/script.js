let scoreUsr, scorePc, img_user_result, img_pc_result, user_result, pc_result, box_game_choices;

/*** Scoreboard ***/
scoreUsr = document.querySelector('#name-1');
scorePc = document.querySelector('#name-2');

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

console.log(choices);

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function () {
        let id = choices[i].getAttribute('id');
        img_user_result.src = 'img/' + id + '.png';
        //box_game_choices.style.display = 'none';
        computer();
    });
}

function computer() {
    var rand_choice = ['rock', 'paper', 'scissors'];
    var seed = Math.floor(Math.random() * 3);

    console.log('scelta pc: ' + rand_choice[seed]);
    img_pc_result.src = 'img/' + rand_choice[seed] + '.png';
    //box_game_choices.style.display = 'block';
}

function calculateScore() {
    
}