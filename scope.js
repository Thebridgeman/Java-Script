// SCOPE 
//In JavaScript there are TWO main types of scope:

//Local Scope
//Global Scope
//Scope determines accessibility / visibility of these variables.

// Scope exercise 

// function submit() {
//     let x = "foo";
//     if (y == "foo") {
//       let h = "boo";
//     }
//     console.log(x); 
//     console.log(y); 
//   }
//   submit();

  // funcions 
// A JavaScript function is a block of code designed to perform a particular task(s).

// We use functions in order to stop the duplication of code, 

//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//The parentheses may include parameter names separated by commas.

// e.g.
function hello(message) {
  // Some code to be executed
console.log(message);
}

hello('Greetings World!');


// arrow functions 

greeting = (message) =>{
  return console.log(message);
}
 greeting('hi');

 // functions excercise 

 function hello(message) {
  // Some code to be executed
console.log(message);
}

hello('Greetings World!');

// functions tasks

function subCalc(num1, num2) {
  return num1 - num2;
}

console.log(subCalc(60,10));

const welcome = function(Name,Age,Work){
  return console.log(`My name is ${Name}, I'm ${Age} and work at ${Work}`);
  }
 
  welcome("Will Bridge",23,"NBS");


powerUp = (n1, n2) => Math.pow(n1,n2);

 console.log(powerUp(10,10));




// DOM manipulation

// Document object model


// simple calculator


// const operator = prompt('Enter function ( either +, -, * or / ): ');


// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;


// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }

// else {
//     result = number1 / number2;
// }





// console.log(`${number1} ${operator} ${number2} = ${result}`);

// calc 2 

let result;


const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

case '-':
  result = number1 - number2;
 console.log(`${number1} - ${number2} = ${result}`);
 break;

case '*':
  result = number1 * number2;
 console.log(`${number1} * ${number2} = ${result}`);
 break;

case '/':
  result = number1 / number2;
 console.log(`${number1} / ${number2} = ${result}`);
 break;

default:
 console.log('Invalid operator entered');
 break;
}