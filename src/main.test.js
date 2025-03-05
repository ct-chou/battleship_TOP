const ship = require('./ship.js');
const gameboard = require('./gameboard.js');
const player = require('./player.js');

test('Ship functions', () => {
    const ship1 = ship(2,'horizontal');
    ship1.hit();
    expect(ship1.isSunk()).toBe(false);
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
});

test('Gameboard', () => {
    let x_coord = 0;
    let y_coord = 3;
    const gameboard1 = gameboard(10);
    const ship1 = ship(2,'horizontal');
    expect(gameboard1.place(ship1, x_coord, y_coord)).toBe(true);
    const ship3 = ship(3,'horizontal');
    expect(gameboard1.place(ship3, x_coord, y_coord + 1)).toBe(true);
    expect(gameboard1.place(ship3, x_coord + 12, y_coord)).toBe(false);
});

test('Receive Attack', () => {
    let x_coord = 0;
    let y_coord = 3;
    const gameboard1 = gameboard(10);
    const ship1 = ship(2,'horizontal');
    const ship3 = ship(3,'vertical');
    expect(gameboard1.place(ship1, x_coord, y_coord)).toBe(true);
    expect(gameboard1.place(ship3, x_coord+5, y_coord)).toBe(true);
    expect(gameboard1.receiveAttack(0,3)).toBe('hit');
    expect(gameboard1.receiveAttack(1,3)).toBe('sunk ship');
    expect(gameboard1.receiveAttack(0,2)).toBe('miss');
});


test('Receive Attack - all sunk', () => {
    let x_coord = 0;
    let y_coord = 3;
    const gameboard1 = gameboard(10);
    const ship1 = ship(2,'horizontal');
    expect(gameboard1.place(ship1, x_coord, y_coord)).toBe(true);
    expect(gameboard1.receiveAttack(0,3)).toBe('hit');
    expect(gameboard1.receiveAttack(1,3)).toBe('all sunk');
});

test('Player setup', () => {
    let x_coord = 0;
    let y_coord = 3;
    const player1 = player('chris', 'real', 10);
    const ship1 = ship(2,'horizontal');
    expect(player1.playerGameboard.place(ship1, x_coord, y_coord)).toBe(true);
    expect(player1.playerGameboard.receiveAttack(0,3)).toBe('hit');
    expect(player1.playerGameboard.receiveAttack(1,3)).toBe('all sunk');
    
});

