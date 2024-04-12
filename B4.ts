class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount: number): void {
        this.speed -= amount;
    }
    speedUp(amount: number): void {
        this.speed += amount;
    }
    showSpeed(): void {
        console.log(`Tốc độ hiện tại: ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

let bicycle = new Bicycle("Car", 100, 1, 10);

bicycle.speedUp(20);
bicycle.showSpeed(); 

bicycle.slowDown(15);
bicycle.showSpeed(); 
