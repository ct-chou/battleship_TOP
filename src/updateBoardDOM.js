export function updateBoardDOM() {
    let currentPlayer = 'player1';
    
    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    const changeTurns = () => {
        if(currentPlayer == 'player1') {
            currentPlayer = 'player2';
        }
        else {
            currentPlayer = 'player1';
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

    const shipSunk = (shipID) => {
        const cells = document.getElementsByClassName(`ship-${shipID}`);  // this only works for player1 ships
        //iterate through cells and add ship-sunk class
        for(let i = 0; i < cells.length; i++) {
            cells[i].textContent = 'X';
        }
        console.log('sunk ship DOM')
    }

    return {placeShip, hitShip, missShip, unplaceShip, changeTurns, getCurrentPlayer, shipSunk};
}
