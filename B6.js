"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
let laptop = new Electronics("Laptop", 22000, "ASUS");
laptop.getDescription();
