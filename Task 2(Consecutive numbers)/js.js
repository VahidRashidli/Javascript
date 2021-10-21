let startNum = Number(prompt("Enter the first number"));
let endNum = parseInt(prompt("Enter the second number"));
let getSequence = () => {
    let arr = [];
    for (let i = startNum, j = 0; i <= endNum; i++, j++) {
        arr[j] = i;
    }
    return arr;
};
console.log(getSequence());