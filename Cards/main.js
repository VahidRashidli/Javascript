"use strict"
class Card {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}
const cards = document.querySelector(".cards").children;
const toggleHeart = document.querySelector(".heart").children[1].children[0];
const info = toggleHeart.closest(".heart").children[0]
const heart = document.querySelector(".heart");
const display = document.querySelector(".display");
const storage = [];
window.onload = () => {
    GetFromLocalStorage();
    [...cards].forEach(card => card.addEventListener("click", addOrRemoveFromStorage));
    heart.addEventListener("click", displayItems);
};

function addOrRemoveFromStorage(e) {
    e.preventDefault();
    const cardsForHearts = GetItems()
    const el = e.target; // icon
    const productTitle = el.closest(".card").children[1].children[0]
    let infoTextContent = info.textContent;
    if (el.tagName === "I" && el.classList.contains("far")) {
        el.classList.remove("far")
        el.classList.add("fas")
        const id = idGenerator();
        const name = productTitle.textContent;
        const content = productTitle.nextElementSibling.textContent;
        const card = new Card(id, name, content);

        storage.push(card);
        cardsForHearts.push(card);
        infoTextContent = Number(infoTextContent) + 1;
        info.textContent = infoTextContent;
        localStorage.setItem("cards", JSON.stringify(cardsForHearts));
        AddToLocalStorage();
        createCard(card);

    } else if (el.tagName === "I" && el.classList.contains("fas")) {
        infoTextContent = Number(infoTextContent) - 1;
        info.textContent = infoTextContent;
        const searchedCardsTitle = productTitle.textContent;
        const searchedCard = storage.find(card => card.name.toLowerCase() === searchedCardsTitle.toLowerCase() && card.content.toLowerCase() === productTitle.nextElementSibling.textContent.toLowerCase()) // Eger card storage-de axtardigimiz carding contenti ve title-lari beraberdise onda hemin cardin id-ni gotur otururuk RemoveFromLocalStorage
        RemoveFromLocalStorage(searchedCard.id);
        const indexToRemove = storage.findIndex(card => card.id === searchedCard.id)
        const IndexForCard = cardsForHearts.findIndex(card => card.name === searchedCardsTitle)
        cardsForHearts.splice(IndexForCard, 1);
        localStorage.setItem("cards", JSON.stringify(cardsForHearts));
        storage.splice(indexToRemove, 1);
        el.classList.remove("fas")
        el.classList.add("far")
        RemoveFromDisplay(searchedCard);
    }
}

function displayItems(e) {

    e.preventDefault();
    if (document.querySelector(".container-flex").children.length > 0) {
        if (display.classList.contains("disappear")) {
            display.classList.remove("disappear")
            display.classList.add("appear")
        } else {
            display.classList.remove("appear")
            display.classList.add("disappear")
        }
    }


}

function idGenerator() {
    let id = Math.round(Math.random() * 1e6);
    if (!storage.some(card => card.id === id)) {
        return id
    } else idGenerator();
}

function AddToLocalStorage() {
    let cardIds = [];
    for (const card of storage) {
        cardIds.push(card.id);
    }
    localStorage.setItem("cardIds", JSON.stringify(cardIds))

}

function RemoveFromLocalStorage(id) {

    const idArr = JSON.parse(localStorage.getItem("cardIds"));
    const indexToRemove = idArr.findIndex(i => i === id);
    idArr.splice(indexToRemove, 1);
    localStorage.setItem("cardIds", JSON.stringify(idArr));

}

function GetFromLocalStorage() {
    const cardsFromLocalStorage = GetItems();
    for (const card of cardsFromLocalStorage) {
        createCard(card);
    }
    for (const card of cards) {
        for (const c of cardsFromLocalStorage) {
            if (card.children[1].children[0].textContent === c.name) {
                storage.push(c);
                if (card.children[2].children[0].children[0].classList.contains("far")) {
                    card.children[2].children[0].children[0].classList.remove("far")
                    card.children[2].children[0].children[0].classList.add("fas")
                } else if (card.children[2].children[0].children[0].classList.contains("fas")) {
                    card.children[2].children[0].children[0].classList.add("far")
                    card.children[2].children[0].children[0].classList.remove("fas")
                }
            }
        }


    }
    info.textContent = storage.length;


}

function GetItems() {
    let cardsFromLocalStorage;
    if (JSON.parse(localStorage.getItem("cards")) == null) {
        cardsFromLocalStorage = [];
    } else {
        cardsFromLocalStorage = JSON.parse(localStorage.getItem("cards"))
    }
    return cardsFromLocalStorage;
}

function createCard(card) {
    const containerFlex = document.querySelector(".container-flex")
    const flexItem = document.createElement("div");
    flexItem.classList.add("flex-item");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");
    const img = document.createElement("img");
    img.src = "images/product1.jpeg";
    imgDiv.appendChild(img);
    const containerflex__content = document.createElement("div");
    containerflex__content.classList.add("container-flex__content");
    const h3 = document.createElement("h3");
    h3.textContent = card.name;
    const p = document.createElement("p")
    p.textContent = card.content;
    containerflex__content.append(h3, p)
    flexItem.append(imgDiv, containerflex__content);
    containerFlex.appendChild(flexItem);

}

function RemoveFromDisplay(card) {
    if (document.querySelector(".container-flex")) {
        const containerFlex = document.querySelector(".container-flex");
        const flexItems = containerFlex.children;
        for (const item of[...flexItems]) {
            if (item.children[1].children[0].textContent === card.name) {
                item.remove();
            }
        }
    }

}