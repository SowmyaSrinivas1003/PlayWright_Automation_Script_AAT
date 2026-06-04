/*
Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";
*/

let name : string ="Java programming is fun and challenging";
let words :string[]=name.split(" ");
console.log(`Count of total number words in Sentence : ${words.length}`);

let reverseWords: string ="";
let firstToUpper : string ="";
for(let i:number=words.length-1;i>=0;i--){
    reverseWords=reverseWords+words[i]+ " ";

}
console.log(`The sentence words in reverse order : ${reverseWords}`);
for(let j:number=0;j<words.length;j++){
    firstToUpper=firstToUpper+words[j]?.substring(0,1).toUpperCase()+ words[j]?.substring(1) + " ";

}
console.log("Convert the first character of each word to uppercase : "+firstToUpper);

/*
Output:
Count of total number words in Sentence : 6
The sentence words in reverse order : challenging and fun is programming Java 
Convert the first character of each word to uppercase : Java Programming Is Fun And Challenging 

Count of total number words in Sentence : 9
The sentence words in reverse order : engineer software a am i sowmya is name my 
Convert the first character of each word to uppercase : My Name Is Sowmya I Am A Software Engineer
*/
