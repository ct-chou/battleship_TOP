export function updateBoardDOM() {
    const placeShip = (containerID, row, col) => {
        const cell = document.getElementById(`${containerID}-${row}-${col}`);
        cell.classList.add('ship-safe');
    }
    return {placeShip};
}
