/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:


***********************************************************************/

// sentenceMaker = (...strings) => {
// 	return strings.join(" ") + "!"
// }

const sentenceMaker = (...strings)=> {
 let finalStr = "" ;
   for(let i = 0; i < strings.length; i ++){
     let eachWord = strings[i];
     finalStr +=  " " + eachWord 
   }
	let finalAns = (finalStr + "!").trim();
	return finalAns
}

console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
