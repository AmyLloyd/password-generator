// //CODE GIVEN Do not alter

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//Add write Password funtion in for console log. How to 
// if (generateBtn) {
//   console.log("Its works!");
// }



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//END CODE GIVEN


//START Connect function and activate button CODE - successful


// generateBtn.onclick = function(){
//   console.log("Its works!");
// }

// // OR this way to activate and link button to function// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// document.getElementById("generate").addEventListener("click", console.log("Its works this way too"))
// //END connect function and activate button

//START Takes userinput about length from the prompt window and activates function - SUCCESSFUL
// function writePassword() {
//   let userInputLength = window.prompt("How many characters will be in your password? \n(8-126 characters)","Type number here");
//   if (userInputLength > 8 && userInput < 126) {
//     console.log("you did it");3
//   } else {
//     console.log("not in the range");
//   }
// OR 
// function writePassword() {
  
//   let userInputLength = window.prompt("How many characters will be in your password? \n(8-126 characters)","");

//   if (!userInputLength) {
//     return;
//   } else if (userInputLength < 8 || userInputLength > 126) {
//     console.log("not in the range");
//   } else if (userInputLength > 8 && userInputLength < 126) {
//   console.log("you did it");
//   }
// }

 //END userinput length CODE 

//VARIABLES TO DEFINE - unsuccessful 
//Above the given code defines var password as write

//https://stackoverflow.com/users/691711/zero298 add a range to a variable
// var passwordLength = {
//   from: 8,
//   to: 126
// };

//https://stackoverflow.com/users/2006429/rgajrawala solution
// var passwordLength = []
// for (var i = 1; i <= 100; i++) {
//     numbers.push(i)
// }

// console.log(passwordLength[0]);
//End variable to define

//START CODE for function that determines is userinput is numerical - unsuccessful
// if (Number.isInteger(userInputLength) = true) {
//   console.log("It is an integer");
// }
// ??END CODE






// function writePassword() {

//CODE for password length then store input then recall input and generate password.
// const passwordLengths = []



// let userInputLength = window.prompt("How many characters will be in your password? \n(8-126 characters)","");

//   if (!userInputLength) {
//       console.log("add return at the end of code when it works");
//   } else if (userInputLength < 8 || userInputLength > 126) {
//       console.log("Please enter number between 8 - 126");
//   } else if (userInputLength > 8 && userInputLength < 126) {
//       passwordLengths.push(userInputLength);
//       console.log(passwordLengths[0]);
//       var password = generatePassword();
    
//         passwordLengths.pop
      
      

// //   }


// //writePassword();
// passwordLengths = [0, 1, 2, 3, 4, 5, 6]
// var stringLength 

// console.log(passwordLengths.pop());
// // if (stringLength.length === passwordLengths.pop()) {
// //   console.log("Strings are same length");
// // };

// console.log(passwordLengths[1].length);
// // function generatePassword() {
//   var stringLength;
//   stringLength.length === passwordlengths.pop
//   return Math.floor(Math.random() * stringLength);
// }

// generatePassword();
// console.log(generatePassword());
// //Trying:
// var 
  
  
  
//   //var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   console.log(userInputLength);

//   document.querySelector("") = userInputLength.push;


//If between 8-126, store data and open new prompt box

//START CODE Promptbox asks which special characters to use so I need an object with each property key and value- UNSUCCESSFUL

//START Characters as objects

// var lowercase = {
//   name: "lowercase",
//   setting: true,
//   input: "L",
// }

// var uppercase = {
//   name: "uppercase",
//   setting: true,
//   input: "U",
// }

//END Characters as objects

// var characterTypes = ["L", "U", "N", "S"];

// let userChoice = window.prompt("Please choose character types for password. 'l' for lowercase, 'u' for uppercase \n at least one character choise must be selected.");
  
// // if (!userChoice) {
//   console.log("cancelled");
// }

// //START CODE for what happens on input - successful
// var generatePassword = function() {
//   if (userChoice) {
//     console.log("user input");
//   }
// }

// generatePassword();
//END CODE for what happenson input

//START CODE comparing userinput to array
// var compareCharacters = function() {
//       characterTypes.forEach(index === userChoice);
//       console.log("match found");
//     }
// characterTypes.forEach(compareCharacters);
// console.log("mathc found");
 
// function 
//  compareCharacters();

//     userChoice = userChoice.toUppercase();
//     if (userChoice === lowercase.input) {
//     console.log("it works for L");
//     }
// }
// }
// generatePassword();

//START Guide given by Junaid
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// // Function to prompt user for password options
// function getPasswordOptions() {
//   // Variable to store length of password from user input

var userInputLength = window.prompt("How many characters will be in your password? \n(8-126 characters)","Type number here");

// var userInputLengthNumber = parseInt(userInputLengthString);
// console.log(typeof userInputLengthNumber);

// var x = "lm"

    if (typeof userInputLength === "number") {
      console.log("It's a number");
    } else {
      console.log("It's something else");
    }
// console.log(userInputLength);
// console.log(typeof userInputLength);




// getPasswordOptions();


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
 

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
 

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
 

  // Variable to store boolean regarding the inclusion of special characters
 

  // Variable to store boolean regarding the inclusion of numeric characters
 

  // Variable to store boolean regarding the inclusion of lowercase characters
 

  // Variable to store boolean regarding the inclusion of uppercase characters


  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
 

  // Object to store user input
//   var passwordOptions = {
   
//   };

//   return passwordOptions;
// }

// Function for getting a random element from an array
// function getRandom(arr) {
 
// }

// Function to generate password with user input
// function generatePassword() {
//   var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
 

  // Array to store types of characters to include in password
 

  // Array to contain one of each type of chosen character to ensure each will be used
  

  // Check if an options object exists, if not exit the function
 

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
 

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
 

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
 
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
 

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
 

  // Mix in at least one of each guaranteed character in the result
 
  // Transform the result into a string and pass into writePassword
 
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);