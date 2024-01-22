var generateBtn = document.querySelector("#generate");
function generatePassword(){

  var questionLength =  prompt("is password length between 8 and 128? type y or n to confirm");
  var questionupperCase = prompt("does your password contain atleast one uppercase letter? type y or n to confirm");
  var questionlowerCase = prompt("does your password contain atlease one lowercase letter? type y or n to confirm");
  var questionNumber= prompt("does your password contain a number between 0 to 9? type y or n to confirm");
  var questionSymbol= prompt("does your password contain any symbol? type y or n to confirm");

  if(
    (questionLength ==="y" || questionLength ==="Y") && (questionupperCase ==="y" || questionupperCase ==="Y") && (questionlowerCase==="y" || questionlowerCase ==="Y") && (questionNumber==="y" || questionNumber ==="Y") && (questionSymbol ==="y" || questionSymbol ==="Y"))
  {
    console.log(password);

  } else{
    console.log(password = "Please try again!...Valid password length must be between 8 to 128 characters, must include at least one upper case letter, atleast one lower case letter, atleast one number and atleast one symbol");
  }
  return password;
}

var pass =" ";

var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers= "0123456789";
var symbols = "!@#$%^&*";
var length = 12;
var all = capLetter+lowerCase+numbers+symbols;

pass+= capLetter[Math.floor(Math.random()*capLetter.length)];
pass+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
pass+= numbers[Math.floor(Math.random()*numbers.length)];
pass+= symbols[Math.floor(Math.random()*symbols.length)];

//above will generate one capital letter, one lower case letter, one number and one symbol

while(length>pass.length){
pass+= all[Math.floor(Math.random()*all.length)];
  
}
password=pass;

//used while loop to make sure password equal to the length specified is generated which in this case is 12. 

// Write password to the #password input

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

//Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

