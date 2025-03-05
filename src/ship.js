// direction: horizontal or vertical
export function ship (length, direction, shipID) {
    let hits = 0;

    const getShipID = () => {
        return shipID;
    }
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
    return {length, direction, hit, isSunk, getShipID};
}
