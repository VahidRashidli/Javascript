let num = 321341;
let str = num.toString();

let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]

}
console.log(parseInt(reversed));