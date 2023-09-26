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

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
 var userInputLength = window.prompt("How many characters will your password have? \nEnter a value from 8 - 128");

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
 if (isNaN(userInputLength)) {
  console.log("Not a number");
  return;
}
// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
 

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
if (userInputLength <= 8 || userInputLength >= 128) {
  window.alert("Password must be between 8 and 128 characters");
  return;
}

  // Variable to store boolean regarding the inclusion of special characters
 var userInputSpecialChar = window.confirm("Would you like to include special characters?");
 console.log(userInputSpecialChar);

  // Variable to store boolean regarding the inclusion of numeric characters
 var userInputNumericChar = window.confirm("Would you like to include numeric characters?");

  // Variable to store boolean regarding the inclusion of lowercase characters
 var userInputLowercaseChar = window.confirm("Would you like to include lowercase characters?");

  // Variable to store boolean regarding the inclusion of uppercase characters
  var userInputUppercaseChar = window.confirm("Would you like to include uppercase characters?");

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
 if (!userInputUppercaseChar && !userInputLowercaseChar && !userInputSpecialChar && !userInputNumericChar) {
  alert("You must choose at least one character type to include.");
 }

 

  // Object to store user input

  // Create and return an options object

  var passwordOptions = {
    length: userInputLength,
    includeSpecialChar: userInputSpecialChar,
    includeNumericChar: userInputNumericChar,
    includeLowercaseChar: userInputLowercaseChar,
    includeUppercaseChar: userInputUppercaseChar,
  };
  // Log the passwordOptions object
  console.log(passwordOptions);
  return passwordOptions;
  }

// Function for getting a random element from an array
function getRandom(arr) {
 
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
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
