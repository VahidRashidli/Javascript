let length = parseInt(prompt("Yolkamizin uzunlugu:"));
let width = parseInt(prompt("Yolkamizin max eni:"));

let star = "*";
let space = "";
for (let i = 0; i < length; i++) {

    for (let j = 0; j < width; j++) {
        space += " ";
    }

    console.log(space + star)
    space = "";
    star = "*" + star + "*";
    width--;
}