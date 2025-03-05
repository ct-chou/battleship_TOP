import {gameboard} from './gameboard.js';

export function player (name, type, length) {
    const playerGameboard = gameboard(length);
    return {name, type, playerGameboard};
}