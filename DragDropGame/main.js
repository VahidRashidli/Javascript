const button = document.getElementsByTagName("button")[0];
const shrekDance = document.querySelector(".title").children[0];
const kermit = document.querySelector(".kermit");
const frog = document.querySelector(".frog");
const main = document.getElementsByTagName("main")[0];
const num = document.querySelector(".num");
const imgDiv = document.getElementsByClassName("img-div")[0]
const pic = imgDiv.children[0];
const boxes = document.querySelector(".boxes");
const round1 = ["dog", "fish", "bear", "Deer"]
const images = ["images/dog.jpg", "images/cat.jpg", "images/qarabag.png", "images/mrbean.gif", "images/monkey.gif", "images/thumbsUp.gif", "images/vugar.jpg", "images/tosuzengilanski.gif"]
const round2 = ["Dog", "Cat", "Qarabag", "Mrbean"];
const round3 = ["Mentor", "Cat", "Sup", "Yummy"];
const round4 = ["Barcelona", "Azerbaycan", "Qarabag", "Kepez"];
const round5 = ["Tosu", "MelikMemmed", "MirzeFetullah", "Mrbean"];
const round6 = ["Dinosaur", "happymonkey", "Person", "Tosu"];
const round7 = ["Tosu", "Mrbean", "Cipcip", "Obaaa"];
const round8 = ["Feremez", "Hop Hop", "TonTush", "MentorVugi"];
const round9 = ["Tosu", "Mrbean", "Qarabag", "Dup dup dup"];
const rounds = [round2, round3, round4, round5, round6, round7, round8, round9];
const audio = new Audio("images/croppedCrazyFrog.mp3");
const imgTitles = ["Dog", "Cat", "qarabag", "mrbean", "happymonkey", "Cipcip", "MentorVugi", "tosu"]
const play = function() {
    button.classList.add("disappear");
    main.classList.add("appear");
    let i = 15;
    let x = setInterval(() => {
        num.textContent = i;
        i = i - 1;
    }, 1000);
    setTimeout(() => {
        shrekDance.classList.add("anime")
        audio.play();
        let slow = setInterval(() => {
            changeColor(1000);
        }, 1000);
        setTimeout(() => {
            clearInterval(slow);
            clearInterval(x);
            changeColor(100);
            num.remove();
            clearInterval(slow);
            shrekDance.classList.add("appear");
            kermit.classList.add("appear");
            frog.classList.add("appear");
            for (const box of[...boxes.children]) {
                changeColorForBorder(box);
            }
        }, 15600);
    }, 1000)
    imgDiv.addEventListener("dragstart", dragstart);
    imgDiv.addEventListener("dragend", dragend);
    for (const box of[...boxes.children]) {
        box.addEventListener("dragover", dragover);
        box.addEventListener("dragleave", dragleave);
        box.addEventListener("drop", drop);
    }
};
button.addEventListener("click", play);

function changeColor(seconds) {
    const changeBackground = setInterval(() => {
        const color = (Math.round((Math.random() * 0xffffff) + 1)).toString(16);
        document.body.style.backgroundColor = "#" + color;
    }, seconds);
}

function dragover(e) {
    e.preventDefault();
    this.classList.add("dahsed-border");
}

function dragleave(e) {
    this.classList.remove("dahsed-border")
}

function dragstart() {
    setTimeout(() => {
        this.style.visibility = "hidden"
        this.nextElementSibling.style.display = "none";
    }, 0)
}

function dragend() {
    this.style.visibility = "visible"
}

function changeColorForBorder(box) {
    const changeBackground = setInterval(() => {
        const color = (Math.round((Math.random() * 0xffffff) + 1)).toString(16);
        box.style.borderColor = "#" + color;
    }, 100);
}
let a = 0;
const audio3 = new Audio("images/tosu.mp3");

function drop() {
    this.classList.remove("dahsed-border")
    const audio1 = new Audio("images/Kids Cheering.mp3");
    const audio2 = new Audio("images/laugh.mp3");
    if (this.textContent.toLowerCase() === imgDiv.title.toLowerCase()) {
        audio1.play();
        const link = document.createElement("link");
        link.rel = "stylesheet"
        link.href = "fireworks.css"
        document.head.appendChild(link)
        setTimeout(() => {
            link.remove();
        }, 3000);
        if (images[a] == undefined) {
            a = 0
        }
        if (images[a] !== undefined) {
            imgDiv.title = imgTitles[a];
            pic.src = images[a]
            changeText([...boxes.children]);
            a++;
            if (imgDiv.title === "tosu") {

                audio.pause();

                if (audio3.paused) {
                    audio3.play();
                } else {

                    audio3.pause();
                    audio3.currentTime = 0;

                }

            } else {
                audio3.pause();
                audio3.currentTime = 0;
                audio.play();
            }
        }

    } else {
        audio2.play();
    }
}
let b = "0"

function changeText(boxes) {
    if (Number(b) == rounds.length) {
        b = "0";

    }
    if (Number(b) !== rounds.length) {
        for (let j = 0; j < boxes.length; j++) {
            boxes[j].textContent = rounds[Number(b)][j];
        }
    }

    if (Number(b) !== rounds.length) {
        b = (Number(b) + 1).toString();
    }

}