import "./style.css";
import {player} from './player.js';
import {ship} from './ship.js';
import {updateBoardDOM} from './updateBoardDOM.js';

function createGrid(rows, cols, containerID) {
    const container = document.getElementById(containerID);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.setAttribute('id', `${containerID}-${i % rows}-${rows - 1- Math.floor(i / rows)}`);
        // cell.setAttribute('data-row', i % rows);
        // cell.setAttribute('data-col', Math.floor(i / rows));
        grid.appendChild(cell);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(10, 10, 'container-left');
    createGrid(10, 10, 'container-right');

// create players and place ships on each board 
    const player1 = player('Chris', 'human', 10);
    const player2 = player('Computer', 'computer', 10);
    // create ships for player 1
    const ship1 = ship(5, 'horizontal');

    updateBoardDOM().placeShip('container-left', 0,0);
    updateBoardDOM().placeShip('container-left', 0,1);
    updateBoardDOM().placeShip('container-left', 0,2);
    updateBoardDOM().placeShip('container-left', 0,3);
    updateBoardDOM().placeShip('container-left', 0,4);

    updateBoardDOM().hitShip('container-left', 0,0);
    updateBoardDOM().missShip('container-left', 1,1);

// const ship2 = ship(4, 'vertical');
// const ship3 = ship(3, 'vertical');
// const ship4 = ship(2, 'horizontal');
// player1.placeShip(ship1, 0,0);

// reflect board on the screen
});
