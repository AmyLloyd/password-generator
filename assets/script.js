// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
//-------------------------------------------------

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

var passwordLength = 0;
var userChoices = [];
var result = "";

//Function to generate password with user input
function generatePassword() {

  while (passwordLength < 8 || passwordLength >128 || passwordLength === "" || isNaN(parseInt(passwordLength))) {
    passwordLength = window.prompt("How many characters will your password have? \nEnter a value from 8 - 128");
  }
  
  var userInputSpecialChar = window.confirm("Would you like to include special characters?");
 if (userInputSpecialChar) {
  userChoices = userChoices.concat(specialCharacters);
 }
  // Variable to store boolean regarding the inclusion of numeric characters
  var userInputNumericChar = window.confirm("Would you like to include numeric characters?");
  if (userInputNumericChar) {
    userChoices = userChoices.concat(numericCharacters);
   }
  // Variable to store boolean regarding the inclusion of lowercase characters
  var userInputLowercaseChar = window.confirm("Would you like to include lowercase characters?");
  if (userInputLowercaseChar) {
    userChoices = userChoices.concat(lowerCasedCharacters);
   }

  // Variable to store boolean regarding the inclusion of uppercase characters
  var userInputUppercaseChar = window.confirm("Would you like to include uppercase characters?");
  if (userInputUppercaseChar) {
    userChoices = userChoices.concat(upperCasedCharacters);
   }

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!userInputUppercaseChar && !userInputLowercaseChar && !userInputSpecialChar && !userInputNumericChar) {
  alert("You must choose at least one character type to include.");
  window.location.reload();
  }

  // Loop to collect enough random characters from the password builder to make up the difference
    for (var i = 0; i < passwordLength; i++) {
       result +=userChoices [Math.floor(Math.random() * userChoices.length)];


        } 
      return result;        
      }
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
