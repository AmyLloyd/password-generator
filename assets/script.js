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
// // generateBtn.addEventListener("click", writePassword);

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


// var characterType = ["lowercase", "uppercase", "numeric", "special character e.g.$#%"];

// console.log(characterType[0]);

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
      
      

//   }


//writePassword();
passwordLengths = [0, 1, 2, 3, 4, 5, 6]
var stringLength 

console.log(passwordLengths.pop());
// if (stringLength.length === passwordLengths.pop()) {
//   console.log("Strings are same length");
// };

console.log(passwordLengths[1].length);
// function generatePassword() {
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

//Promptbox asks which special characters to use


  //Options are stored in array characterTypes; 

