"use strict";

const bank = function () {
    const bankAccount = function () {
        let balance = 0;

        return {
            deposit: (value) => {
                balance += value;
            },
            withdraw: (value) => {
                balance -= value;
            },
            getBalance: () => {
                console.log(balance);
            },
        };
    };

    return bankAccount();
};

const alex = bank();

alex.deposit(100);
alex.withdraw(23);

alex.getBalance();

const helen = bank();

helen.deposit(1000);
helen.withdraw(230);

helen.getBalance();
