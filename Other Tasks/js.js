// Task 1: Print out the largest number of the array
let arr = [10, 22, 3, 4, 50, 1, 100];
let bigNum = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (bigNum < arr[i]) bigNum = arr[i];
}
console.log(`The largest number in the array is: ${bigNum}`);

// Task 2: Sort an array and print out the last item
let arr2 = [10, 22, 3, 4, 50, 1, 100];
arr2.sort((a, b) => a - b);
console.log(`The last item of the array after sorting it in an ascending order: ${arr2[arr2.length - 1]}`);

// Task 3: Add 43 after the third element of an array 
let arr3 = [30, 31, 32, 33, 34, 35];
let copyArr = [...arr3]; // The spread syntax is for copying
arr3[3] = 43;
for (let i = 4, b = arr3.length + 1, j = 3; i < b; i++, j++) {
    arr3[i] = copyArr[j];
}
console.log("An array in which 43 was added after the third element:")
console.log(arr3)

// Task 4: Print out the elements that are greater than 40
let arr4 = [10, 22, 3, 4, 50, 1, 100];
console.log("The elements that are greater than 40:")
arr4.filter(i => i > 40).forEach(i => console.log(i)); // Not optimal solution cuz it is O(n)+O(n)=O(n) 2 loops