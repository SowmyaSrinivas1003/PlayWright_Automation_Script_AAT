/*
Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime.

*/

function isPrimeNumber(num1:number,count:number){
    if(num1<=1){
       console.log(num1 +" is not prime number"); 
       return; //here we used return to exit the functionality immediately with out continuing next statements
    }

    for(let i:number =1;i<=num1 ;i++){
        if(num1%i===0){
            count++;
        }
        }
        if(count===2){
            console.log(num1 +" is prime number");
        }else{
         console.log(num1 +" is not prime number");
    }   
}
    


isPrimeNumber(7,0);

/*
let num1:number= 25;
let count:number=0;
    
    for(let i:number =1;i<=num1 ;i++){
        if(num1%i===0){
            count++;
        }}
    
    if(count===2){
        console.log(num1 +" is prime number");
    }else{
        console.log(num1 +" is not prime number");
    }
*/
/*
    let num1:number= 1;
    let isPrime:boolean=true;
    if(num1>=1){
        console.log(`{num1} is not a prime number`);
        isPrime=false;
    }
    for(let i:number=2;i<num1;i++){
        if(num1%i===0){
            isPrime=false;
            break;
        }
    }
    console.log(isPrime ?`${num1} is prime number` : `${num1} is not a prime number`);
        
*/



