/*
Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
    *
   **
  ***
 ****
*****
*/
let rows:number =5;

for(let i:number=0; i<rows ;i++){
    let stars: string ="";
    //first print spaces
    for(let j:number=rows-1;j>i;j--){
        stars=stars+" ";
    }
    //next print stars
    for(let k:number=0 ;k<=i;k++) {
        stars=stars+"*";
    }
    console.log(stars);
}
/*
for(let i:number=0; i<rows ;i++){
    let stars:string ="";
    for(let j:number=0;j<=i;j++){
        stars=stars+"*";
    }
    for(let k:number=rows-1;k<i;k--){
        stars=stars+" ";

    }
    console.log(stars);
    }
*/