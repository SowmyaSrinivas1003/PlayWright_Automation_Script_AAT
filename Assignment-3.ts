/*
1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0

*/

let studentNames : String[] =["Sowmya","Yamini","Rohini"];
let studentMarks : number[]=[75,80,82];
let finalmarks : number[]=[];
let ToatalCountMarks:number=0;
for(let marks of studentMarks ){
     finalmarks.push(marks+10);
     
}
console.log("Updated Marks:");
for(let i:number =0 ; i<studentNames.length;i++){
    console.log(`${studentNames[i]} : ${finalmarks[i]}` );
}
for(let finalMark of finalmarks){
    ToatalCountMarks=ToatalCountMarks+finalMark;
 }
let AverageMarks :number =ToatalCountMarks/finalmarks.length;
console.log(`Average Marks: ${AverageMarks}`);

/*output is : Updated Marks:
Sowmya : 85
Yamini : 90
Rohini : 92
*/