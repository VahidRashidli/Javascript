const el = document.querySelector(".ball");
const elCoordinates = el.getBoundingClientRect();
const leftBorder = document.querySelector(".left-border");
const rightBorder = document.querySelector(".right-border");
const leftBorCoor = leftBorder.getBoundingClientRect();
const rightBorCoor = rightBorder.getBoundingClientRect();
document.addEventListener("keydown", function(e) {
    if (elCoordinates.x <= leftBorCoor.x) {
        elCoordinates.x += 50;
        el.style["left"] = elCoordinates.x + "px";
    } else if (elCoordinates.right >= rightBorCoor.x) {
        elCoordinates.x -= 50;
        el.style["right"] = elCoordinates.x + "px";
    } else if (elCoordinates.y < 0) {
        elCoordinates.y += 50;
        el.style["top"] = elCoordinates.y + "px";
    } else if (elCoordinates.y > window.innerHeight - 55) {
        elCoordinates.y -= 50;
        el.style["bottom"] = elCoordinates.y + "px";
    }

    switch (e.key) {
        case "w":
            elCoordinates.y -= 10;
            break;
        case "s":
            elCoordinates.y += 10;
            break;
        case "a":
            elCoordinates.x -= 10;
            break;
        case "d":
            elCoordinates.x += 10;
            break;

        default:
            break;
    }

    el.style["top"] = elCoordinates.y + "px";
    el.style["left"] = elCoordinates.x + "px";
})