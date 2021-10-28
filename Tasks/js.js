//   Task 1       change background color
// const myDiv = document.querySelector(".myDiv");
// let color = prompt("What color do you want background to be?");

// myDiv.style.backgroundColor = color;


// task 2  create a table

// const table = document.getElementsByClassName("table")[0].children[0];
// const thead = table.children[0];
// const tbody = table.children[1];
// let rowNum = Number(prompt("how many rows?"));
// let columnNum = Number(prompt("how many columns?"));
// for (let i = 0; i < columnNum; i++) {
//     //for heading
//     let th = document.createElement("th");
//     th.textContent = "Heading";
//     thead.children[0].appendChild(th);
// }

// for (let i = 0; i < rowNum; i++) {

//     let tr = document.createElement("tr");
//     for (let j = 0; j < columnNum; j++) {
//         let td = document.createElement("td");
//         td.textContent = "Column-" + (j + 1);
//         tr.appendChild(td);
//     }
//     tbody.appendChild(tr);

// }


//task 3 removing desired option

// const dropDown = document.getElementById("select");
// const btn = document.querySelector("#remove");
// btn.addEventListener("click", (e) => {
//     let optionNum = +prompt("Which option would you like to remove?");
//     dropDown.options[optionNum - 1].remove();
// });


// // Task 4 console logging innerheight and innerwidth when resizing
// addEventListener("resize", function hey() {
//     console.log(this.innerHeight + " InnerHeight");
//     console.log(this.innerWidth + " InnerWidth");
// });

// task 5 changing font size to 50px

// const p = document.querySelector(".custom");
// const fontbtn = document.getElementById("font");
// fontbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     p.style.fontSize = "50px";
// });

// task 6 adding attributes
// const myText = document.getElementById("mytext");
// const attBtn = document.querySelector("#attribute");

// attBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     myText.setAttribute("class", "text");
//     myText.setAttribute("title", "MyCustom");
//     myText.setAttribute("value", "MyTitle");
// });

// task 7 getting user input
// const form = document.forms[0];
// const showbtn = document.querySelector("#submit");
// const fname = document.querySelector("#fname");
// const sname = document.querySelector("#sname");
// const pShow = document.getElementById("show");
// showbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     pShow.textContent = `You are ${fname.value} ${sname.value}`;
//     form.reset();
// });



// task 8 adding boxes

// const boxes = document.getElementById("boxes");
// const createBtn = document.querySelector("#create");
// createBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const box1 = document.createElement("div");
//     const nodeText1 = document.createTextNode("Box-1")
//     box1.appendChild(nodeText1);
//     box1.style.width = "300px";
//     box1.style.height = "300px";
//     box1.style.display = "inline-block";
//     box1.style.border = "1px solid black";
//     box1.style.backgroundColor = "red";
//     boxes.append(box1);
// });