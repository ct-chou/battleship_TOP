const ship1 = require('./main.js');

test('Ship functions', () => {
    ship1.hit();
    expect(ship1.isSunk()).toBe(false);
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
});