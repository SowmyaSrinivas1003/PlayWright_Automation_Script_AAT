/*
Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";
*/

let paragraph : string ="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let listOfWords :string[]=paragraph.split(" ");
let count :number =0;
let searchWord:string="java";
for(let i:number=0;i<listOfWords.length;i++){
    if(searchWord===listOfWords[i]?.toLowerCase()){
        count++;
        console.log("Index of the java word is :" + i );
    }

   
}
 console.log("count of java words present in paragraph is : "+count);

 /*
 OUTPUT :
Index of the java word is :0
Index of the java word is :6
count of java words present in paragraph is : 2

*/