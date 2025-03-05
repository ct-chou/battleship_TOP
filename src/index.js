import "./style.css";

function createGrid(rows, cols, containerID) {
    const container = document.getElementById(containerID);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(10, 10, 'container-left');
    createGrid(10, 10, 'container-right');
});