const form = document.forms[0];
const elms = form.elements;
let errors=0;
for (const item of [...elms]) {
    item.addEventListener("blur", function(e) {
        e.preventDefault();
        inputRequired(item)
        checkPassword(item);
        checkEmail(item);
    })
};
form.addEventListener("submit", function(e) {
    e.preventDefault()
    for (const item of [...elms]) {
        inputRequired(item);
        checkPassword(item);
        checkEmail(item);
    }
    if (errors===0) {
        const data=new FormData(form)
        const infoDiv=document.createElement("div");
        infoDiv.textContent=JSON.stringify(Object.fromEntries(data));
        form.insertAdjacentElement("beforeend",infoDiv);
        form.reset();
    }
});

let createAndInsertEl = function(item, message) {
    let smallEl = document.createElement("small");
    smallEl.textContent = message;
    item.insertAdjacentElement("afterend", smallEl)
}
let inputRequired = function(item) {
    if (item.tagName === "INPUT") {
        if (item.value === "") {
            if (!item.nextElementSibling) {
                createAndInsertEl(item, "You must fill all the gaps");
                errors++;
            }
        } else {
            if (item.nextElementSibling) {
                item.nextElementSibling.remove();
                errors--;
            }
        }
    }
}
let checkPassword = function(item) {   
    if (item.name === "password" && item.value.length > 0) {
        if (item.value.length < 5) {
            createAndInsertEl(item, "The password must contain at least 5 letters! ");
            errors++;
        } else {
            if (item.nextElementSibling) {
                item.nextElementSibling.remove();
                errors--;
            }
        }
    }
}
const checkEmail = function(item) {
    const REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (item.name === "email") {
        if (item.value.length > 0) {
            if (!REG_EXP.test(item.value)) {
                createAndInsertEl(item, "Invalid email!")
                errors++;
            } else {
                if (item.nextElementSibling) {
                    item.nextElementSibling.remove();
                    errors--;
                }
            }
        }
    }
}