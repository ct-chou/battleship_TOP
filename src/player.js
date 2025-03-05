import gameboard from './gameboard.js';

function player (name, type, length) {
    const playerGameboard = gameboard(length);
    return {name, type, playerGameboard};
}

module.exports = player;