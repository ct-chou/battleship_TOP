import "./style.css";
import {player} from './player.js';
import {ship} from './ship.js';
import {updateBoardDOM} from './updateBoardDOM.js';

const player1 = player('Chris', 'human', 10);
const player2 = player('Computer', 'computer', 10);

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
        // check if right grid
        if(gridSide == 'left') {
            return;
        }
        else {
            // check if grid has class 'ship-hit' or 'ship-miss'
            if(cell.classList.contains('ship-hit') || cell.classList.contains('ship-miss')) {
                return;
            }
            else {
                console.log(player2.playerGameboard.receiveAttack(row, col));
                // switch turns
                // have computer attack
            }
        }
    }
}

function initializeShips(player1, player2) {
    const ship1 = ship(5, 'horizontal');
    player1.playerGameboard.place(ship1, 0, 0);
    const ship2 = ship(4, 'vertical');
    player1.playerGameboard.place(ship2, 0, 1);
    const ship3 = ship(3, 'vertical');
    player2.playerGameboard.place(ship3, 0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(10, 10, 'container-left');
    createGrid(10, 10, 'container-right');
    initializeListeners();
    initializeShips(player1, player2);
});
