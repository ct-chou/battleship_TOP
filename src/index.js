import "./style.css";
import {player} from './player.js';
import {ship} from './ship.js';
import {updateBoardDOM} from './updateBoardDOM.js';

const player1 = player('Chris', 'human', 10);
const player2 = player('Computer', 'computer', 10);

function initializeListeners() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

function handleCellClick(e) {
    const cell = e.target;
    updateBoardDOM().player1Turn(cell, player1, player2);
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
    updateBoardDOM().createGrid(10, 10, 'container-left');
    updateBoardDOM().createGrid(10, 10, 'container-right');
    initializeListeners();
    initializeShips(player1, player2);
});
