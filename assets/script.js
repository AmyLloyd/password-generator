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


//Promptbox appears
//
function writePassword() {
  let userInputLength = window.prompt("How many characters will be in your password? \n(8-126 characters)","Type number here");
  if (userInputLength > 8 && userInput < 126) {
    console.log("you did it");3
  } else {
    console.log("not in the range");
  }
 
  //var userLengthInput = document.getElementById("#password").value
 
  
  //passwordText.value = password;

}

writePassword();

// //Trying:
// var 
  
  
  
//   //var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   console.log(userInputLength);

//   document.querySelector("") = userInputLength.push;

//Promptbox asks for length option between 8 and 128

//If user inputs number outside of 8-126 immediately end function

//If between 8-126, store data and open new prompt box

//Promptbox asks which special characters to use

//Options are stored in array characterTypes 

//If Boolean choice true, then 

