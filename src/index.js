import "./style.css";
import {player} from './player.js';
import {ship} from './ship.js';
import {updateBoardDOM} from './updateBoardDOM.js';

const player1 = player('Chris', 'human', 10);
const player2 = player('Computer', 'computer', 10);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerAttack(player) {
    while(true) {
        let row = randomNumber(0, 9);
        let col = randomNumber(0, 9);
        const cellID = `container-left-${row}-${col}`;
        const cell = document.getElementById(cellID);
        if(cell.classList.contains('ship-hit') || cell.classList.contains('ship-miss'))
            continue;
        else
            return player.playerGameboard.receiveAttack(row, col);
    }
}

function createGrid(rows, cols, containerID) {
    const container = document.getElementById(containerID);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.setAttribute('id', `${containerID}-${i % rows}-${rows - 1- Math.floor(i / rows)}`);
        grid.appendChild(cell);
    }
}

function initializeListeners() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}


function handleCellClick(e) {
    const cell = e.target;
    const containerID = cell.getAttribute('id');
    const gridSide = containerID.split('-')[1];
    const row = containerID.split('-')[2];
    const col = containerID.split('-')[3];
    console.log(gridSide, row, col);
    if(updateBoardDOM().getCurrentPlayer() == 'player1') {
        // check if correct grid
        if(gridSide == 'left') {
            return;
        }
        else {
            // check if grid has class 'ship-hit' or 'ship-miss'
            if(cell.classList.contains('ship-hit') || cell.classList.contains('ship-miss')) {
                return;
            }
            else {
                if(player2.playerGameboard.receiveAttack(row, col) == 'all sunk') {
                    alert('all sunk, you win!');
                    return;
                }
                else {
                    updateBoardDOM().changeTurns();  // switch turns
                    // have computer attack
                    let attackResult = computerAttack(player1);
                    if(attackResult == 'all sunk') {
                        alert('all sunk, you lose!');
                        return;
                    }
                    else {
                        updateBoardDOM().changeTurns();
                        return;
                    }
                }
            }
        }
    }
}

function initializeShips(player1, player2) {
    const ship1 = ship(5, 'horizontal', 'ship1');
    player1.playerGameboard.place(ship1, 0, 0);
    const ship2 = ship(4, 'vertical', 'ship2');
    player1.playerGameboard.place(ship2, 0, 1);
    const ship3 = ship(3, 'vertical', 'ship3');
    player2.playerGameboard.place(ship3, 0, 0);
    const ship4 = ship(3, 'horizontal', 'ship4');
    player2.playerGameboard.place(ship4, 5, 5);
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(10, 10, 'container-left');
    createGrid(10, 10, 'container-right');
    initializeListeners();
    initializeShips(player1, player2);
});
