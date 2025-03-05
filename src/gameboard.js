const ship = require('./ship.js');

function gameboard (row_num) {
    const board_length = row_num;
    const grid = Array.from({ length: row_num }, () => Array(row_num).fill(null));
    let shipHP = 0;

    // test if placement of ship is in boundary of board
    const inBounds = (ship,x,y) => {
        if(x < 0 || y < 0) {
            return false;
        }

        if(ship.direction == 'horizontal') {
            if(x + ship.length >= board_length)
                return false;
        }
        else {
            if(y + ship.length >= board_length)
                return false;
        }
        return true;
    }

    const place = (ship, x,y) => {
        if(inBounds(ship,x,y) == false) {
            return false;
        };

        if(ship.direction == 'horizontal') {  //increment x direction
            for(let i=0; i<ship.length; i++) {
                if(grid[x+i][y] == null) {
                    grid[x+i][y] = ship;
                }
                else {
                    // throw "error, ship placed on occupied spot"
                    i--;
                    while (i>=0) {
                        grid[x+i][y] = null;
                        i--;
                    }
                    return false;
                }        
            }
        }
        else {  // increment y direction
            for(let i=0; i<ship.length; i++) {
                if(grid[x][y+i] == null) {
                    grid[x][y+i] = ship;
                }
                else {
                    // throw "error, ship placed on occupied spot"
                    i--;
                    while (i>=0) {
                        grid[x][y+i] = null;
                        i--;
                    }
                    return false;
                }        
            }
        }
        shipHP += ship.length;
        return true;
    }

    const areAllSunk = () => {
        if(shipHP == 0) {
            return true
        }
        else {
            return false;
        }
    }

    const receiveAttack = (x,y) => {
        // if(grid[x][y] == 'miss') {
        //     return 'invalid';
        // }
        // use UI to determine if the shot is valid or not
        if(grid[x][y] == null) {
            grid[x][y] = 'miss';
            return 'miss';
        }
        else {
            grid[x][y].hit();
            shipHP--;
            if(grid[x][y].isSunk()) {
                if(areAllSunk()) {
                    return 'all sunk';
                }
                else {
                    return 'sunk ship'
                }
            }
            return 'hit';
        }
    }

    return {place, receiveAttack};
}

module.exports = gameboard;
