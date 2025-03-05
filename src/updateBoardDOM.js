export function updateBoardDOM() {
    const placeShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-safe');
    }
    const hitShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.remove('ship-safe');
        cell.classList.add('ship-hit');
        cell.textContent = 'X';
    }
    const missShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-miss');
        cell.textContent = 'O';
    }
    return {placeShip, hitShip, missShip};
}
