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
  //**Support from tutor to develop a working Object**

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

console.log(getPasswordOptions());

// Function for getting a random element from an array
function getRandomSpecialChars(array) {
  var random = Math.floor(Math.random() * specialCharacters.length);
  console.log(specialCharacters[random]);
}

getRandomSpecialChars();

function getRandomNumericChars(array) {
  var random = Math.floor(Math.random() * numericCharacters.length);
  console.log(numericCharacters[random]);
}

getRandomNumericChars();

function getRandomLowercaseChars(array) {
  var random = Math.floor(Math.random() * lowerCasedCharacters.length);
  console.log(lowerCasedCharacters[random]);
}

getRandomLowercaseChars();

function getRandomUppercaseChars(array) {
  var random = Math.floor(Math.random() * upperCasedCharacters.length);
  console.log(upperCasedCharacters[random]);
}

getRandomUppercaseChars();


// Variable declared globally so available to all functions
var options = getPasswordOptions();
console.log(options);

//Function to generate password with user input
function generatePassword() {
  
  
  // Variable to store password as it's being concatenated
 var passwordBuilder = [];

  // Array to store all types of values that were true in options array
  //from ChatGPT

  var trueValues = options.filter(function(element) {
    return element === true;
  });
  
  console.log(trueValues);

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters

  // Check if an options object exists, if not exit the function
  if (!options) {
  return generatePassword();
  }

  // Conditional statement that adds array of special characters into array of possible characters based on user input
   // Push new random special character to guaranteedCharacters

  if (trueValues.includes(includeSpecialChar)) {
  passwordBuilder = passwordBuilder.concat(specialCharacters);
    var guaranteedSpecialChar = getRandomSpecialChars();
    guaranteedCharacters.push(guaranteedSpecialChar);
  } else {
    console.log("No Special characters needed");
  }   

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (trueValues.includes(includeLowercaseChar)) {
    passwordBuilder = passwordBuilder.concat(lowerCasedCharacters);
    var guaranteedLowercaseChar= getRandomLowercaseChars();
    guaranteedCharacters.push(guaranteedLowercaseChar);  
    } else {
      console.log("No lowercase characters needed");
    }   

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (trueValues.includes(includeUppercaseChar)) {
    passwordBuilder = passwordBuilder.concat(upperCasedCharacters);
    var guaranteedUppercaseChar= getRandomUppercaseChars();
    guaranteedCharacters.push(guaranteedUppercaseChar);  
    } else {
      console.log("No uppercase characters needed");
    }  

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (trueValues.includes(includeNumericChar)) {
    passwordBuilder = passwordBuilder.concat(numericCharacters);
    var guaranteedNumericChar = getRandomNumericChars();
    guaranteedCharacters.push(guaranteedNumericChar);
    } else {
      console.log("No numeric characters needed");
    }  

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  
  //Make variable indicating how many characters we already have 
  var guaranteedLength = guaranteedCharacters.length;

  //Calculate how many more characters are needed
  var differenceToTotal = options[length] - guaranteedLength;

  var differenceCharacters;
  
  // Loop to collect enough random characters from the password builder to make up the difference
    for (var i = 0; i < passwordBuilder.length; i++) {
      function getRandomBuilderCh() {
        var random = Math.floor(Math.random() * passwordBuilder.length);
        console.log(passwordBuilder[random]);
        differenceCharacters = getRandomBuilderCh();
        if (differenceCharacters === differenceToTotal) {
        return; 
        }         
      } 
    }
  
    // Concat differenceCharacters and guaranteedCharacters
    var passwordArray;
    passwordArray = differenceCharacters.concat(guaranteedCharacters);      

  // Transform the result into a string and pass into writePassword
    
  var passwordString = passwordArray.toString();
}

generatePassword();

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
