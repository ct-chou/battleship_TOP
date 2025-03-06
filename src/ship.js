// direction: horizontal or vertical
export function ship (length, direction, shipID) {
    let hits = 0;
    let x_coord = 3;
    let y_coord = 3;

    const getShipID = () => {
        return shipID;
    }
    const hit = () => {
        hits++;
        return true;
    }

    const shipPlaced = (x,y) => {
        x_coord = x;
        y_coord = y;
        // console.log(x_coord, y_coord);
    }
    const getXCoord = () => {
        return x_coord;
    }
    const getYCoord = () => {
        return y_coord;
    }

    const isSunk = () => {
        if(hits >= length) {
            return true;
        }
        else {
            return false;
        }
    }
    return {length, direction, hit, isSunk, getShipID, shipPlaced, getXCoord,getYCoord};
}
