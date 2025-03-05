// direction: horizontal or vertical
function ship (length, direction) {
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

module.exports = ship;