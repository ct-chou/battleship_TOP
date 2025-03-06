import {gameboard} from './gameboard.js';

export function player (name, type, length) {
    const playerGameboard = gameboard(length, type);
    const getName = () => {
        return name;
    }
    // const getType = () => {
    //     return type;
    // }
    return {name, type, playerGameboard, getName};
}