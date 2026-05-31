/*
Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions  Amount
1              50000
2              -2000
3               3000
4              -15000
5              -200
6              -300
7               4000
8              -3000

First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements

1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions

*/

const transactionsAmount : number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let totalNoOfCreditTransactions :number=0;
let totalNoofDebitTransactions :number =0;
let totalcountOfDebitAndCreditTransactions :number;
let totalAmountCredited : number =0;
let totalAmountDebited : number= 0;
let totalRemainingAccountBalance : number ;
let countOfSuspiciouscreditTransactions :number=0;
let countOfSuspiciousdebitTransactions: number =0;
let TotalCountOfSuspiciousTransactions :number;


for(let amount of transactionsAmount){
    if(amount >= 0 ){
        totalNoOfCreditTransactions=totalNoOfCreditTransactions+1;
        totalAmountCredited=totalAmountCredited+amount;
        if(amount >=10000){
            console.log("Suspicious credit transaction Amount : "+amount);
            countOfSuspiciouscreditTransactions=countOfSuspiciouscreditTransactions+1;
        }
    }
    else{
        totalNoofDebitTransactions=totalNoofDebitTransactions+1
        totalAmountDebited=totalAmountDebited+amount;
        if(amount <=-10000){
            console.log("Suspicious debit transaction Amount : " +amount);
            countOfSuspiciousdebitTransactions=countOfSuspiciousdebitTransactions+1;

        }
    }
}
console.log("Total number of credit transactions completed is : "+totalNoOfCreditTransactions);
console.log(`Total number of debit transactions completed is : ${totalNoofDebitTransactions}`);
totalcountOfDebitAndCreditTransactions=totalNoOfCreditTransactions+totalNoofDebitTransactions;
console.log("Total No of credit and Debit transactions are : "+totalcountOfDebitAndCreditTransactions);
console.log(`Total amount credited in Bank account : ${totalAmountCredited}`);
console.log("Total Amount debited from Bank Account : ",totalAmountDebited);

totalRemainingAccountBalance=totalAmountCredited+(totalAmountDebited);

console.log("Total amount remaining at the end in Bank Account : "+totalRemainingAccountBalance);
console.log("Total number of credit suspicious transactions : "+countOfSuspiciouscreditTransactions);
console.log("Total number of debit suspicious transactions : "+countOfSuspiciousdebitTransactions);

TotalCountOfSuspiciousTransactions=countOfSuspiciouscreditTransactions+countOfSuspiciousdebitTransactions;
console.log ("Total number of suspicious transactions : "+TotalCountOfSuspiciousTransactions);

/*
OUTPUT:
Suspicious credit transaction Amount : 50000
Suspicious debit transaction Amount : -15000
Total number of credit transactions completed is : 3
Total number of debit transactions completed is : 5
Total No of credit and Debit transactions are : 8
Total amount credited in Bank account : 57000
Total Amount debited from Bank Account :  -20500
Total amount remaining at the end in Bank Account : 36500
Total number of credit suspicious transactions : 1
Total number of debit suspicious transactions : 1
Total number of suspicious transactions : 2

*/

