// calculate profit

class Product {
    constructor(CostPrice, SellPrice, Inventory) {
        this.costPrice = CostPrice;
        this.sellPrice = SellPrice;
        this.inventory = Inventory;
    }
    Profit() {
        return Math.round((this.sellPrice - this.costPrice) * this.inventory);
    }
}
let product1 = new Product(32.67, 45.00, 1200);
console.log(`The profit of this product is ${product1.Profit()}`);


// Is the number In the given Range?

let numObj = {
    num1: -2,
    num2: -4,
};

let isInRange = (num, obj) => {
    let max = Math.max(obj.num1, obj.num2)
    let min = Math.min(obj.num1, obj.num2)
    if (num >= min && num <= max) {
        return true;
    }
    return false;
};

console.log("Is the number in the range?:" + isInRange(-2, numObj));

// The length and the area of a circle

class Circle {

    constructor(Name, R) {
        this.name = Name;
        this.r = R;
        this.pi = 3.14;
    }
    CalcArea() {
        return this.pi * Math.pow(this.r, 2);
    }
    CalcLength() {
        return 2 * this.pi * this.r;
    }
}
const circle1 = new Circle("circile1", 3);
console.log(circle1.CalcArea());
console.log(circle1.CalcLength());

// City info

class City {
    constructor(name, population, continent) {
        this.name = name;
        this.population = population;
        this.continent = continent;
    }
    CityInfo() {
        return `${this.name} has a population of ${this.population} and is located in ${this.continent}`;
    }
}

const city1 = new City("Baku", 5e6, "Asia");
console.log(city1.CityInfo());