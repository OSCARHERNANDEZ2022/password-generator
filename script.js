// Assignment code here
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includSymbols')
const form = document.getElementById('passwordGeneratorForm')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


// characterAmountNumber.addEventListener('input', syncCharacterAmount)
// characterAmountRange.addEventListener('input', syncCharacterAmount)

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const characterAmount = characterAmountNumber.value
//   const includeUppercase = includeUppercaseElement.checked
//   const includeNumbers = includeNumbersElement.checked
//   const includeSymbols = includeSymbolsElement.checked
//   const password = generatePassword(characterAmount, includeUppercase, 
//     includeNumbers, includeSymbols)
//     console.log("is this running?")
// })

// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var passwordLength = ("password")
// document.getElementById("password").value = generatePassword(passwordLength);
generateBtn.addEventListener('click', generatePassword)


// Write password to the #password input
// characterAmount, includeUppercase, 
//   includeNumbers, includeSymbols
function generatePassword() {
  let characterAmount = parseInt(prompt("Choose the length of your password: (between 8 and 128"))
  let includeUppercase = confirm("Include Uppercase Chars?")
  let includeLowercase = confirm("Include Lowercase Chars?")
  let includeNumbers = confirm("Include Numbers Chars?")
  let includeSymbols = confirm("Include Symbols Chars?")

    let charCodes = []
    let passwordCharacters = ""
    if (includeUppercase) {
      charCodes.push(UPPERCASE_CHAR_CODES)
    }
    if (includeLowercase) {
      charCodes.push(LOWERCASE_CHAR_CODES)
    }
    if (includeNumbers) {
      charCodes.push(NUMBER_CHAR_CODES)
    }
    if (includeSymbols) {
      charCodes.push(SYMBOLS_CHAR_CODES)
    }
    // let charCodes = LOWERCASE_CHAR_CODES
    // if (includeUppercase) charCodes = charCodes.concat
    // (UPPERCASE_CHAR_CODES)
    // if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    // if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    for(let i = 0; i < characterAmount; i++) {
      let randArray = charCodes[Math.floor(Math.random() * charCodes.length )]
      let characterCode = getChar(randArray)
      passwordCharacters += String.fromCharCode(characterCode)
    }
    displayPassword(passwordCharacters)
}

function displayPassword(pass) {
  let text = document.querySelector('#password');
  text.value = pass
}

function getChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);





