class Employee{
    public name:string;
    protected company:string;
    private phone: string;
    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

class  Manager extends Employee{
    teamSize: string;
    constructor(name:string,company:string,phone:string,teamSize:string){
        super(name,company,phone)
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`TeamSize: ${this.teamSize}`);
        
    }
}
let manager = new Manager("Dương", "RA", "0147258369", "PN");
manager.printInfo();