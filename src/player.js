import {gameboard} from './gameboard.js';

export function player (name, type, length) {
    const playerGameboard = gameboard(length, type);
    return {name, type, playerGameboard};
}