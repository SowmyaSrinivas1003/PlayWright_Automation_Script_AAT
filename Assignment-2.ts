/*
A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
 o If the credit score is above 750, the loan is automatically approved.
 o If the credit score is between 650 and 750, additional checks are performed.
 o If the credit score is below 650, the loan is denied.
2. Income:
 o For credit scores between 650 and 750, the customer’s income must be at least $50,000
 for the loan to be considered.

3. Employment Status:
 o If the customer’s income is at least 50,000, the system checks whether the customer is
 employed.
 o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
 o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
 o If the DTI ratio is less than 40%, the loan is approved.
 o If the DTI ratio is 40% or greater, the loan is denied.
*/
let creditScore :number =680;
let income :number=60000;
let employeeStatus:boolean =true;
let Debt_income_ratio :string="39%";

if(creditScore>750){
    console.log("The loan is automatically approved.")
}else if(creditScore>650 && creditScore<750){
    console.log("'creditScore>650 && creditScore<750' then Additional checks are performed.");
    if(income>=50000){
        console.log("'income>=50000'The system checks whether the customer is employed");
        if(employeeStatus){
            console.log("'employeeStatus=true'then The system checks the debt-to-income (DTI) ratio.");
            if(Debt_income_ratio < "40%"){
                console.log("The loan is approved.")

            }else{
               console.log("The loan is denied.");
            }
        }else{
            console.log("The loan is denied.")
        }
    }else{
        console.log("The loan is denied.")
    }

}else{
    console.log("The loan is denied.");
}