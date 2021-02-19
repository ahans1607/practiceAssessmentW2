/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:


***********************************************************************/

function duplicateCharMinCount(string, minCount) {
	let finalArr = []
	let obj = {}
	let array = string.split("")

		for (let i = 0; i < array.length; i++){
			let letter = array[i]
				if (obj[letter] === undefined){
				obj[letter] = 1	
				} else {
				obj[letter] += 1		
				}
		}

		for(let key in obj){
			if (obj[key] >= minCount){
				finalArr.push(key)
			}
		}
	return finalArr
		// console.log(obj)
	

}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
