
// Selects random number from a range based on a designated minimum and maxium.
function getRndInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// generates password from selected set of characters.
function generatePassword() {
  // Initializes variables to get information from web page.
  var lengthInput = document.getElementById("lengthInput").value;
  var lowerCase = document.getElementById("lowerCase").checked;
  var upperCase = document.getElementById("upperCase").checked;
  var numeric = document.getElementById("numeric").checked;
  var specialChar = document.getElementById("specialChar").checked;
 
  // sets color back to black
  document.getElementById("password").setAttribute(
    "style",
    "color: black;"
  );

  // checks if length input is a valid input that creates password if valid and outputs an error if false.
  if (document.getElementById("lengthInput").checkValidity()){

    // Set the password length to length specificed by user and initializes character set variable and password variable.
  var passLength = lengthInput;
  var selectedCharacters = "";
  var password = "";
  // Assigns which characters to use in password
  if (lowerCase) {
    selectedCharacters = "abcdefghijklmnopqrstuvwxyz"
  }
  if (upperCase){
    selectedCharacters = selectedCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if (numeric) {
    selectedCharacters= selectedCharacters.concat("1234567890")
  }
  if (specialChar) {
    selectedCharacters= selectedCharacters.concat("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
  }
  
  // Asks users to select characters
  if(selectedCharacters === ""){
    password = "You didn't select any characters!";
    return password;
  }

  // Randomly selects numbers from selected charcters
  for (let i = 0; i < passLength; i++) {
    password += getRndChar(selectedCharacters); 
  }

  console.log("character set: " + selectedCharacters);
  
  console.log("password: " + password);

  console.log("length: " + passLength);

  console.log("validity: " + document.getElementById("lengthInput").checkValidity());
  
  return password; }
  // return error if false
  else {
    password = "Error: Please input a valid value";
    document.getElementById("password").setAttribute(
      "style",
      "color: red;"
    );
    return password;
  }
}

// Selects random char from set of chars.
function getRndChar(charSet){
  var setLength = charSet.length;
  var returnedChar = charSet.charAt(getRndInteger(0,setLength));
  return returnedChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

