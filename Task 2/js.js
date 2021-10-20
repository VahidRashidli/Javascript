"use strict"
let str = "bacadu";

// console.log(str.split("").sort());

function sort(str) {
    let newStrArr = [];
    newStrArr[0] = str[0];
    let leftChar = newStrArr[0];
    let CopynewStringArr = [];
    for (let i = 1, j = 1; i < str.length; i++) {
        if (leftChar < str[i]) { // b<a, a<c
            newStrArr.push(str[i]);

        } else if (leftChar > str[i]) { //b>a
            leftChar = str[i]; //left char is a
            CopynewStringArr = [];
            for (let x = 0; x < newStrArr.length; x++) { //copy newStrArr
                CopynewStringArr[x] = newStrArr[x];
            }
            newStrArr[0] = str[i]; // a,
            for (let x = 1, y = CopynewStringArr.length + 1; x < y; x++) {
                newStrArr[x] = CopynewStringArr[x - 1]; // a,b
            }

        }
    }

    return newStrArr.toString();
}

console.log(sort(str));