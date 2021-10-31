let setDate = function() {
    const divSmall = document.getElementById("time");
    let time = new Date();
    let hour = time.getHours().toString();
    let minute = time.getMinutes().toString();
    divSmall.textContent = `${hour}:${minute}`;
}
let reset = function(phoneDisp, fullEquation, operands, operations, ) {
    phoneDisp.textContent = "0";
    fullEquation.textContent = "";
    operands.length = 0;
    operations.length = 0;
}
let calculatorStart = function() {
    const numberBtns = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
        zero: "0",
        floatingP: ".",
    };
    const operationBtns = {
        plus: "+",
        subtract: "-",
        multiply: "*",
        divide: "/",
        equal: "=",
        clear: "C",
    };
    const phoneDisp = document.querySelector("#result");
    const fullEquation = document.querySelector("#equation");
    const operations = [];
    const operands = [];
    let result = 0;
    let display = "";
    let removeDispIfNumIsFirst = false;
    let DispZero = false;
    const btnsGrid = document.querySelector(".grid-btns");
    btnsGrid.addEventListener("click", function(e) {
        let elName = e.target.name;
        if (elName !== "clear") {
            if (elName === "zero" && phoneDisp.textContent === "0") { // to avoid none-numbers like 03 or .3
                reset(phoneDisp, fullEquation, operands, operations);
                display = "";
                result = 0;
            } else {
                for (let key in numberBtns) { // if a num is clicked
                    if (elName === key) {
                        if (elName === "floatingP" && phoneDisp.textContent[phoneDisp.textContent.length - 1] === ".") {
                            break;
                        } else {
                            if (removeDispIfNumIsFirst) {
                                display = "";
                                phoneDisp.textContent = "";
                                fullEquation.textContent = "";
                                removeDispIfNumIsFirst = false;
                            }
                            if (numberBtns[key] === "0" && DispZero) {
                                if (result !== 0) {
                                    display = result + "0";
                                    DispZero = false;
                                }
                                phoneDisp.textContent = display;
                            } else {
                                display += numberBtns[key];
                                phoneDisp.textContent = display;
                            }
                            break;
                        }
                    }
                }
                for (let key in operationBtns) {
                    if (elName === key) {
                        operands.push(Number(display));
                        operations.push(operationBtns[key])
                        display = "";
                        phoneDisp.textContent = display;
                        fullEquation.textContent = "";
                        for (let i = 0, a = 0, b = 0, j = operations.length + operands.length; i < j; i++) {
                            if (operands[a] !== undefined) {
                                fullEquation.textContent += operands[a];
                                a++;
                            }
                            if (operations[b] !== undefined) {
                                fullEquation.textContent += operations[b];
                                b++;
                            }
                        }
                    }
                }
                if (elName === "equal") {
                    let isFirstOperationDivOrMultp = true;
                    result = operands[0];
                    for (let i = 0, a = 1, b = 0, j = operations.length + operands.length; i < j; i++, a++, b++) {
                        switch (operations[b]) {
                            case "+":
                                result += operands[a];
                                break;
                            case "-":
                                result -= operands[a];
                                break;
                            case "*":
                                if (operations.length > 2) {
                                    if (operations[0] == "*" && isFirstOperationDivOrMultp) {
                                        result *= operands[a];
                                        isFirstOperationDivOrMultp = false;
                                        continue;
                                    }

                                }
                                result *= operands[a];
                                break;
                            case "/":
                                if (operations.length > 2) {
                                    if (operations[0] == "/" && isFirstOperationDivOrMultp) {
                                        result /= operands[a];
                                        isFirstOperationDivOrMultp = false;
                                        continue;
                                    }
                                }
                                result /= operands[a];
                                break;

                            default:
                                break;
                        }
                    }
                    phoneDisp.textContent = result;
                    display = result;
                    operands.length = 0;
                    operations.length = 0;
                    removeDispIfNumIsFirst = true;
                    DispZero = true;

                }
            }
        } else if (elName === "clear") {;
            reset(phoneDisp, fullEquation, operands, operations);
            display = "";
            result = 0;
        }
    });
    btnsGrid.addEventListener("keyup", function(e) {
        let elName;
        switch (e.key) {
            case "1":
                elName = "one";
                break;
            case "2":
                elName = "two";
                break;
            case "3":
                elName = "three";
                break;
            case "4":
                elName = "four";
                break;
            case "5":
                elName = "five";
                break;
            case "6":
                elName = "six";
                break;
            case "7":
                elName = "seven";
                break;
            case "8":
                elName = "eight";
                break;
            case "9":
                elName = "nine";
                break;
            case "0":
                elName = "zero";
                break;
            case "+":
                elName = "plus";
                break;
            case "*":
                elName = "multiply";
                break;
            case "/":
                elName = "divide";
                break;
            case ".":
                elName = "floatingP";
                break;
            case "Backspace":
                elName = "clear";
                break;
            default:
                break;
        }
        if (elName !== "clear") {
            if (elName === "zero" && phoneDisp.textContent === "0") { // to avoid none-numbers like 03 or .3
                reset(phoneDisp, fullEquation, operands, operations);
                display = "";
                result = 0;
            } else {
                for (let key in numberBtns) { // if a num is clicked
                    if (elName === key) {
                        if (elName === "floatingP" && phoneDisp.textContent[phoneDisp.textContent.length - 1] === ".") {
                            break;
                        } else {
                            if (removeDispIfNumIsFirst) {
                                display = "";
                                phoneDisp.textContent = "";
                                fullEquation.textContent = "";
                                removeDispIfNumIsFirst = false;
                            }
                            if (numberBtns[key] === "0" && DispZero) {
                                if (result !== 0) {
                                    display = result + "0";
                                    DispZero = false;
                                }
                                phoneDisp.textContent = display;
                            } else {
                                display += numberBtns[key];
                                phoneDisp.textContent = display;
                            }
                            break;
                        }
                    }
                }
                for (let key in operationBtns) {
                    if (elName === key) {
                        operands.push(Number(display));
                        operations.push(operationBtns[key])
                        display = "";
                        phoneDisp.textContent = display;
                        fullEquation.textContent = "";
                        for (let i = 0, a = 0, b = 0, j = operations.length + operands.length; i < j; i++) {
                            if (operands[a] !== undefined) {
                                fullEquation.textContent += operands[a];
                                a++;
                            }
                            if (operations[b] !== undefined) {
                                fullEquation.textContent += operations[b];
                                b++;
                            }
                        }
                    }
                }
                if (elName === "equal") {
                    let isFirstOperationDivOrMultp = true;
                    result = operands[0];
                    for (let i = 0, a = 1, b = 0, j = operations.length + operands.length; i < j; i++, a++, b++) {
                        switch (operations[b]) {
                            case "+":
                                result += operands[a];
                                break;
                            case "-":
                                result -= operands[a];
                                break;
                            case "*":
                                if (operations.length > 2) {
                                    if (operations[0] == "*" && isFirstOperationDivOrMultp) {
                                        result *= operands[a];
                                        isFirstOperationDivOrMultp = false;
                                        continue;
                                    }

                                }
                                result *= operands[a];
                                break;
                            case "/":
                                if (operations.length > 2) {
                                    if (operations[0] == "/" && isFirstOperationDivOrMultp) {
                                        result /= operands[a];
                                        isFirstOperationDivOrMultp = false;
                                        continue;
                                    }

                                }
                                result /= operands[a];
                                break;

                            default:
                                break;
                        }
                    }
                    phoneDisp.textContent = result;
                    display = result;
                    operands.length = 0;
                    operations.length = 0;
                    removeDispIfNumIsFirst = true;
                    DispZero = true;

                }
            }
        } else if (elName === "clear") {;
            reset(phoneDisp, fullEquation, operands, operations);
            display = "";
            result = 0;
        }
    });
}
calculatorStart();
setDate();