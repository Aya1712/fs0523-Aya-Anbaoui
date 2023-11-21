"use strict";
class BankAccount {
    constructor(balanceInit = 0) {
        this.balance = balanceInit;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Versamento di ${amount} effettuato.`);
        }
        else {
            console.log("L'importo del versamento deve essere maggiore di zero.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Prelievo di ${amount} effettuato.`);
        }
        else {
            console.log("L'importo del prelievo deve essere maggiore di zero e non superare il saldo disponibile.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SonAccount extends BankAccount {
    oneDeposit(amount) {
        this.deposit(amount);
    }
    oneWithdraw(amount) {
        this.withdraw(amount);
    }
}
class MotherAccount extends BankAccount {
    addInterest() {
        const interest = this.balance * 0.1;
        this.deposit(interest);
        console.log(`Aggiunto interesse del 10%: ${interest}`);
    }
    oneDeposit(amount) {
        this.deposit(amount);
    }
}
// Esempio di utilizzo
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();
sonAccount.oneDeposit(100);
sonAccount.oneWithdraw(30);
motherAccount.oneDeposit(200);
motherAccount.addInterest();
console.log(`Saldo conto del figlio: ${sonAccount.getBalance()}`);
console.log(`Saldo conto della madre: ${motherAccount.getBalance()}`);
