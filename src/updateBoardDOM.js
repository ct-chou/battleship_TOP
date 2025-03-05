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
    const placeShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-safe');
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

    const shipSunk = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-sunk');
        cell.textContent = 'X';
    }

    return {placeShip, hitShip, missShip, unplaceShip, changeTurns, getCurrentPlayer, shipSunk};
}
