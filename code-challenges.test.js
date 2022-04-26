// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { countReset } = require("console")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED 
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest 

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest 


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("coolCode", () => {
    it("takes in a string and returns a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
      expect(coolCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(coolCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(coolCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   FAIL  ./code-challenges.test.js
//   coolCode
//     ✕ takes in a string and returns a coded message

//   ● codedMessage › takes in a string and returns a coded message

//     ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.
// PSEUDO:
// declare a function named coolCode
// input: array
// output: new array with secret coded message
// use .split to get each character by itself
// use .map to map over each character and make a decision to turn those letters into numbers if the condition is met
// use conditionals to see which letters need to be turned into numbers
// use .join to join the characters back together because they are separated


const codedMessage = (array) => {
    let sepArray = array.split("")
    //sepArray is the split array
    let newArray = sepArray.map(letter => {
        // newArray will return the final result
        if(letter === "a" || letter === "A") {
            return 4
        } else if(letter === "e" || letter === "E") {
            return 3
        } else if(letter === "i" || letter === "A") {
            return 1
        } else if(letter === "o" || letter === "A") {
            return 0
        } else {
            return letter
        }
    })
    
return newArray.join("") 
}
// console.log(coolCode(secretCodeWord1)) used console.log to check to make sure I was on the right path.
// PASS  ./code-challenges.test.js
// coolCode
//   ✓ takes in a string and returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// ________________________________________________________________________________________________________







// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("specialWords", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns the words that contain that particular letter", () => {
      expect(specialWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(specialWords(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   coolCode
//     ✓ takes in a string and returns a coded message (1 ms)
//   specialWords
//     ✕ takes in an array of words and a single letter and returns the words that contain that particular letter (1 ms)

//   ● specialWords › takes in an array of words and a single letter and returns the words that contain that particular letter

//     ReferenceError: specialWords is not defined

// b) Create the function that makes the test pass.
 // PSEUDO:
// create a function called specialWords that takes in an array and a string that will contain only the letter
// use .filter to filter the through the values in the array
// use .toLowerCase to make all letters lowercase so they are easier to work with
// use .includes to determine if there is that particular letter

const specialWords = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}

// PASS  ./code-challenges.test.js
// coolCode
//   ✓ takes in a string and returns a coded message (1 ms)
// specialWords
//   ✓ takes in an array of words and a single letter and returns the words that contain that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

//_______________________________________________________________________________________________________







// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house

//     ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass
// PSEUDO:
//input: an array
//parameter is an array
//output: boolean value of true if there's three numbers that are the same & two that are the same
// use for loop to iterate over each number in the array
// use conditionals to determine:
// if the first 3 numbers are the same && if the last 2 are the same then return true. 
// if the first 2 numbers are the same && if the last 3 numbers are the same then return true.
// The indexes will indicate if the numbers match or not
// anything else, then return false

// array  that will be true  [5, 5, 5, 3, 3]
// array  that will be false [5, 5, 5, 5, 4]
// indexes                    0  1  2  3  4
// used this to mentally map out my thoughts, lol, I am a visual person. Side note: this was one of my favorite problems to figure out! Much fun :D

const fullHouse = (arr) => {
    for(let i= 0; i < arr.length; i++){
        if(arr[0] === arr[1] && arr[0] === array[2] && arr[3] === arr[4]){
            return true
        } else if(arr[0]=== arr[1] && arr[2] ===[3] === arr[4]) {
    } else {
        return false
    }
  }
}

// PASS  ./code-challenges.test.js
// coolCode
//   ✓ takes in a string and returns a coded message (1 ms)
// specialWords
//   ✓ takes in an array of words and a single letter and returns the words that contain that particular letter
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total