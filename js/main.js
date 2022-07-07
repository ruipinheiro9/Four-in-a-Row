// SELECTORS 

let playerX = document.querySelector('.x');
let playerO = document.querySelector('.o');
let secondPlayer;

let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');

let messageContainer = document.querySelector('#message');
let gameContainer = document.getElementById('box-container');
let messageText = document.querySelector('#message p');

// GAME COUNTER 

let player1Count = 0;
let player2Count = 0;

// LISTENERS 

// BOXES CLICK LISTENER

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {

        let el = checkElement(player1Count, player2Count);

        if (this.childNodes.length == 0) { // Check if has child nodes (to prevent replication clicking in the same box)
            let cloneEl = el.cloneNode(true); // Clone element (To replicate). Otherwise we wouldn't be able to use more than one
            this.appendChild(cloneEl);

            // Turn verification
            if (player1Count == player2Count) {
                player1Count++;

                if (secondPlayer == 'aiplayer') { // If Playing vs computer
                    computerPlay();
                    player2Count++; // Increment player count to play after AI
                }

            } else {
                player2Count++;
            }

            // Check winner
            checkWinCondition();
        }
    });
}

// GAME START - 1 OR 2 PLAYERS

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'; // Hide when button click
        }
        // Show game before click
        setTimeout(function () {
            gameContainer.classList.remove("hide");
        }, 500)
    });

}

// FUNCTIONS 

// To determine who plays next turn

function checkElement(player1Count, player2Count) {
    if (player1Count == player2Count) {
        el = playerX;
    } else {
        el = playerO;
    }
    return el;
}

function checkWinCondition() {
    let block1 = document.getElementById('block1');
    let block2 = document.getElementById('block2');
    let block3 = document.getElementById('block3');
    let block4 = document.getElementById('block4');
    let block5 = document.getElementById('block5');
    let block6 = document.getElementById('block6');
    let block7 = document.getElementById('block7');
    let block8 = document.getElementById('block8');
    let block9 = document.getElementById('block9');

    // Horizontal

    if (block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length > 0) {

        let block1Child = block1.childNodes[0].className;
        let block2Child = block2.childNodes[0].className;
        let block3Child = block3.childNodes[0].className;

        if (block1Child == 'x' && block2Child == 'x' && block3Child == 'x') {
            declareWinner('x');
        } else if (block1Child == 'o' && block2Child == 'o' && block3Child == 'o') {
            declareWinner('o');
        }
    }

    if (block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length > 0) {

        let block4Child = block4.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;

        if (block4Child == 'x' && block5Child == 'x' && block6Child == 'x') {
            declareWinner('x');
        } else if (block4Child == 'o' && block5Child == 'o' && block6Child == 'o') {
            declareWinner('o');
        }
    }

    if (block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length > 0) {

        let block7Child = block7.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block7Child == 'x' && block8Child == 'x' && block9Child == 'x') {
            declareWinner('x');
        } else if (block7Child == 'o' && block8Child == 'o' && block9Child == 'o') {
            declareWinner('o');
        }
    }

    // Vertical

    if (block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length > 0) {

        let block1Child = block1.childNodes[0].className;
        let block4Child = block4.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block1Child == 'x' && block4Child == 'x' && block7Child == 'x') {
            declareWinner('x');
        } else if (block1Child == 'o' && block4Child == 'o' && block7Child == 'o') {
            declareWinner('o');
        }
    }

    if (block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length > 0) {

        let block2Child = block2.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;

        if (block2Child == 'x' && block5Child == 'x' && block8Child == 'x') {
            declareWinner('x');
        } else if (block2Child == 'o' && block5Child == 'o' && block8Child == 'o') {
            declareWinner('o');
        }
    }

    if (block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length > 0) {

        let block3Child = block3.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block3Child == 'x' && block6Child == 'x' && block9Child == 'x') {
            declareWinner('x');
        } else if (block3Child == 'o' && block6Child == 'o' && block9Child == 'o') {
            declareWinner('o');
        }
    }

    // Diagonal

    if (block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length > 0) {

        let block1Child = block1.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block1Child == 'x' && block5Child == 'x' && block9Child == 'x') {
            declareWinner('x');
        } else if (block1Child == 'o' && block5Child == 'o' && block9Child == 'o') {
            declareWinner('o');
        }
    }

    if (block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length > 0) {

        let block3Child = block3.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block3Child == 'x' && block5Child == 'x' && block7Child == 'x') {
            declareWinner('x');
        } else if (block3Child == 'o' && block5Child == 'o' && block7Child == 'o') {
            declareWinner('o');
        }
    }

    // DRAW

    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) { // A variable that has not been assigned a value is of type undefined. 
            // If boxes has childnodes (x or o), increment counter
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner('Draw!');
    }
}

// CLEAR GAME, SET WINNER AND UPDATE SCORE

function declareWinner(winner) {

    let scoreboardX = document.querySelector('#screboard-1');
    let scoreboardO = document.querySelector('#screboard-2');
    let message = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        message = 'Player 1 won!';
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        message = 'Player 2 won!';
    } else {
        message = 'Draw!';
    }

    // SHOW MESSAGE 

    messageText.innerHTML = message;
    messageContainer.classList.remove('hide');
    gameContainer.classList.add('hide');

    // HIDE MESSAGE 

    setTimeout(() => {
        messageContainer.classList.add('hide');
        gameContainer.classList.remove('hide');

    }, 3000); // Clear message after 3 seconds

    // RESET GAME
    player1Count = 0;
    player2Count = 0;

    // REMOVE X AND O
    let boxesToClear = document.querySelectorAll('.box div');

    for (let i = 0; i < boxesToClear.length; i++) {
        boxesToClear[i].parentNode.removeChild(boxesToClear[i]); // Level up (parent) to remove the child (div with x or o)
    }
}

// COMPUTER GAME LOGIC

function computerPlay() {
    let cloneO = playerO.cloneNode(true); // Computer will always be 'O'

    counter = 0; // How many to filled
    filled = 0; // How many already filled

    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5) // Generate random number everytime function is executed

        // Fill if child is empty
        if (boxes[i].childNodes[0] == undefined) { // Check if box is filled
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO); // Fill
                counter++;
                break;
            }
        } else { // How many boxes are filled (Prevent infinite loop)
            filled++;
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay();
    }

}