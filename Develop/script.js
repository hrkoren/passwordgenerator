// Assignment Code
var generateBtn = document.querySelector("#generate");

// User input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

//Special characters, numbers, alpha

character = ["!", "#", "$", "%", "&", "*", "+", "@", "?", "'", "/", "<", ">", "[", "]", "{", "}", "~", "_", ".", "\:", "\;", "=", "\\", "|", "^", "`", "-", ","];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //user validation for correct length
  enter = prompt("How many characters would you like your password to be? Must be between 8 and 128.");

  if(!enter) {
    alert("Please enter a numeric value for the password length.");
  }else if (enter < 8 || enter > 128) {
    alert("You must enter a number between 8 and 128.");
//password criteria selections
  }else {
    confirmNumber = confirm("Do you want password to contain numbers?");
    confirmCharacter = confirm("Do you want password to contain special characters?");
    confirmUppercase = confirm("Do you want password to contain UPPERCASE letters?");
    confirmLowercase = confirm("Do you want password to contain lowercase letters?");
  }
//alert if no criteria is selected
if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
//all 4 critera selected
}
else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alpha, alpha2);

//3 criteria selected
}
else if (confirmNumber && confirmCharacter && confirmUppercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmNumber && confirmCharacter && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmUppercase && confirmLowercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmUppercase && confirmLowercase) {
  choices = number.concat(alpha, alpha2);

//2 criteria selected
}
else if (confirmNumber && confirmCharacter) {
  choices = character.concat(number);
}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha);
}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
else if (confirmNumber && confirmLowercase) {
  choices = alpha.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

//1 criteria selected
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmCharacter) {
  choices = character;
}
else if (confirmUppercase) {
  choices = alpha2;
}
else if (confirmLowercase) {
  choices = alpha;
}
};

//random selection for variables
for (var i=0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
