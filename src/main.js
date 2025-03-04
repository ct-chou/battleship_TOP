// direction: horizontal or vertical
function Ship (length, direction) {
    let hits = 0;

    const hit = () => {
        hits++;
        return true;
    }

    const isSunk = () => {
        if(hits >= length) {
            return true;
        }
        else {
            return false;
        }
    }
    return {length, direction, hit, isSunk};
}

const ship1 = Ship(2, 'horizontal');

module.exports = ship1;
