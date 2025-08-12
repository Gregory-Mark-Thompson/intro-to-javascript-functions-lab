// Exercise 1

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


// Exercise 2

const isAdult = (ageInput) => {
    if (ageInput >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));


// Exercise 3

const isCharAVowel = (charInput = "") => {
    if (charInput === "a" || charInput === "e" 
        || charInput === "i" || charInput === "o" || charInput === "u") {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


// Exercise 4

const generateEmail = (nameInput = "noah_body", emailInput = "nowhere.com") => {
    return (nameInput + "@" + emailInput);
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Exercise 5

const greetUser = (nameInput = "Noah Body", timeInput = "Indeterminate Time of Day") => {
    return ("Good " + timeInput + ", " + nameInput + "!");
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6

const maxOfThree = (numOne = 0,numTwo = 0,numThree = 0) => {
    if (numOne >= numTwo) {
        if (numOne >= numThree) {
            return numOne;
        } else {
            return numThree;
        }
    } else if (numTwo >= numThree) {
        return numTwo;
    } else {
        return numThree;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


// Exercise 7

const calculateTip = (billInput = 0, tipPercentInput = 15) => {
    return (billInput * (tipPercentInput/100));
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


// Exercise 8

const convertTemperature = (tempInput, scaleInput) => {
    if (scaleInput === "C" || scaleInput === "c") {
        return (((tempInput * 1.8) + 32) + " (Fahrenheit).");
    } else if (scaleInput === "F" || scaleInput === "f") {
        return (((tempInput - 32) *(5/9)) + " (Celsius).");
    } else {
        return ('Invalid Temperature Scale Entered: Enter "c", "C", "f", or "F".');
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


// Exercise 9

const basicCalculator = (numOne = 0, numTwo = 0, operationInput) => {
    if (operationInput === "add" || operationInput === "subtract"
        || operationInput === "multiply" || operationInput === "divide") {
            if (operationInput === "add") {
                return numOne + numTwo;
            } else if (operationInput === "subtract") {
                return numOne - numTwo;
            } else if (operationInput === "multiply") {
                return numOne * numTwo;
            } else {
                return numOne / numTwo;
            }
        } else {
            return (`Incorrect Operation Entered\nPlease Input Either:\n
                "add", "subtract", "multiply", or "divide"\n
                Following Two Numbers\n(Separating These Entries by Commas)`);
        }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


// Exercise 10

const calculateGrade = (gradeInput) => {
    if (gradeInput >= 90) {
        return "A";
    }     else if (gradeInput >= 80) {
        return "B";
    }     else if (gradeInput >= 70) {
        return "C";
    }     else if (gradeInput >= 60) {
        return "D";
    }     else {
        return "F";
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


// Exercise 11

const createUsername = (firstNameInput, lastNameInput) => {
    let lengthCalculated = firstNameInput.length + lastNameInput.length;
    let slicedFirstName = firstNameInput.slice(0, 3);
    let slicedLastName = lastNameInput.slice(0,3);
    return (slicedFirstName + slicedLastName + lengthCalculated);
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));


// Exercise 12

function numArgs(...userInput) {
    return userInput.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));