export function updateBoardDOM() {
    let currentPlayer = 'player1';
    
    const getCurrentPlayer = () => {
        return currentPlayer;
    }

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

    const gameOver = (winner) => {
        document.getElementById('turn-header').textContent = 'Game Over';
        document.getElementById('player-turn').textContent =`${winner.getName()} Wins!`;
    }

    const changeTurns = (player1, player2) => {
        if(currentPlayer == 'player1') {
            currentPlayer = 'player2';
            document.getElementById('player-turn').textContent = player2.getName();
        }
        else {
            currentPlayer = 'player1';
            document.getElementById('player-turn').textContent = player1.getName();
        }
    }    
    const placeShip = (containerID, row, col, shipID) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-safe');
        cell.classList.add(`ship-${shipID}`);
    }
    const unplaceShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.remove('ship-safe');
    }
    const hitShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.remove('ship-safe');
        cell.classList.add('ship-hit');
        // cell.textContent = 'X';
    }
    const missShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-miss');
        cell.textContent = 'O';
    }

    const shipSunk = (ship_sunk, containerID) => {
        // grab x_coord and y_coord from ship_sunk
        const x_coord = ship_sunk.getXCoord();
        const y_coord = ship_sunk.getYCoord();
        console.log('ship_sunk');
        console.log(x_coord, y_coord);
        if(ship_sunk.direction == 'horizontal') {
            for(let i = 0; i < ship_sunk.length; i++) {
                const cell = document.getElementById(`${containerID}-${x_coord+i}-${y_coord}`);
                cell.textContent = 'X';
            }
        }
        else {
            for(let i = 0; i < ship_sunk.length; i++) {
                const cell = document.getElementById(`${containerID}-${x_coord}-${y_coord+i}`);
                cell.textContent = 'X';
            }
        }
        
        console.log('sunk ship DOM')
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
    
    function player1Turn(cell, player1, player2) {
        const containerID = cell.getAttribute('id');
        const gridSide = containerID.split('-')[1];
        const row = containerID.split('-')[2];
        const col = containerID.split('-')[3];
     
        if(getCurrentPlayer() == 'player1') {
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
                        gameOver(player1);
                        return;
                    }
                    else {
                        changeTurns(player1, player2);  // switch turns
                        // have computer attack
                        let attackResult = computerAttack(player1);
                        if(attackResult == 'all sunk') {
                            
                            gameOver(player2);
                            return;
                        }
                        else {
                            changeTurns(player1, player2);
                            return;
                        }
                    }
                }
            }
        }
    
    }

    return {placeShip, hitShip, missShip, unplaceShip, changeTurns, getCurrentPlayer, shipSunk, createGrid, player1Turn, gameOver};
}
