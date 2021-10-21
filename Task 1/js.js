let length = parseInt(prompt("Yolkamizin uzunlugu:"));
let star = "*";
for (let i = 0; i < length; i++) {
    console.log(`                                                                                     ${star}                              `);
    star = star.split("");
    star.push("*");
    star.unshift("*");
    star = star.join("");
}