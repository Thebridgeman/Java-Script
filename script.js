'use Strict'

//! protected keyword example

// let let = 2;

// types of log = log, info, warn and error

console.log('Hello World!');


let text = 'this is a message for log, info, warn and error';

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

// styling the console outputs 

console.log('%c' + text, 'color: white; background-color: black; font-size: 10px; padding: 5px'); 

console.log('%c' + text + ' ' + '%c' + text, 'color:red;' ,'color:green;');

// Excercises from Getting started QA page

// task 1
console.log('Will')

console.info('Bridge')

console.warn('Hull')

console.error('Caprisun')

// task 2

console.log('%c' + text, 'color: orange; background-color: black; font-size: 10px; padding: 10px; font-family: fantasy; font-style: Bold');


// data types and variables 

// java script doesnt care about pre defining data types e.g. int, bool

// let is the standard variable

// const is a constant 

// var is the old way of declaring variables

// use camelCase

let myName = 'Will B';
let mySurname = 'Bridge'
let mnAge = 23;

let myBoolean = true;
console.log(myBoolean);

let myNumber = 5;
console.log(myNumber);


// Data types 
// there are 2 types - - primitives and objectes

//objects have the object data type and primitives have boolean, number, string, null




// we can also use arrays in JS using []

//e.g. 

let cars = [ "Audi", "BMW", "Mercedes" ];
console.log(cars); 


let myObject = {
    key : 'value',
    a : 'b'
}

console.log(myObject); 


// Variables page QA task 

let totalMoney = 4000; 

let moneyPaidSoFar = 2348;

let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining ammount of money to be paid is £${totalLeftToPay}`);


let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};



console.log(
    typeof(a),
    typeof(b),
    typeof(c),
    typeof(d),
    typeof(e),);
