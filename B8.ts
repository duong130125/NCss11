class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Đã gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }

    public withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Không đủ tiền trong tài khoản ${this.accountNumber}.`);
        }
    }
}

// class SavingsAccount extends Account {
//     private interestRate: number;

//     constructor(accountNumber: string, balance: number, interestRate: number) {
//         super(accountNumber, balance);
//         this.interestRate = interestRate;
//     }

//     public calculateInterest(): number {
//         let monthlyInterest = this.balance * (this.interestRate / 100) / 12;
//         return monthlyInterest;
//     }
// }

// let savingsAccount = new SavingsAccount("SA123456", 1000, 5);

// let interest = savingsAccount.calculateInterest();
// console.log(`Tiền lãi hàng tháng: ${interest}`);

// savingsAccount.deposit(500);

// let updatedInterest = savingsAccount.calculateInterest();
// console.log(`Tiền lãi hàng tháng sau khi gửi thêm tiền: ${updatedInterest}`);

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        let availableBalance = this.balance + this.overdraftLimit;
        if (availableBalance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`${this.accountNumber} Rút quá hạn mức cho phép.`);
        }
    }
}

let checkingAccount = new CheckingAccount("CA123456", 1000, 500);

checkingAccount.withdraw(1500);

checkingAccount.withdraw(3000);
