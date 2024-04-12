class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

let laptop = new Electronics("Laptop", 22000, "ASUS");
laptop.getDescription();
