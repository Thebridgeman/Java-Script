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


let x;
let y = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};



console.log(
    typeof(x),
    typeof(y),
    typeof(c),
    typeof(d),
    typeof(e),);



// ASI and Iteration 

//automatic semi colon insrtion - can lead to unwanter behavior 

//e.g. this should incrament a by 1 but it incraments b instead

let a = 1
let b = 1

a
++
b

console.log(`a = ${a}, b = ${b}`)

// to fix 

let m = 1;
let n = 1;

m;
++n;

console.log(`m = ${m}, n = ${n}`);


// Iterating 
// loops 

// ! FOR loop - use a counter

for(let i = 0; i < 10; i++){
    console.log(`i = ${i}`);
}

// while loop 

let condition = true;
let incrament = 0;

while(condition) {
    console.log(`incremant me!`)
    incrament++;

    if(incrament == 3) {
        condition = false;
    }
}

// do while loop

let con = false;
let inc = 0;

do {
    console.log(`incremant me!`)
    inc++;

    if(inc == 3) {
        con = false;
    }
} while(con);


//switch cases

let num = 1;

switch(num) {
    case 0:
    console.log('We are at zero');
    break;

    case 1:
        console.log('number is 1');
    case 4: 
    console.log('number is 4');
    case 4:
        console.log('at the end');
        break;
        default:
            console.log('this is default');
}

// ASI QA page task


let p = 10;
let o = 5;

p
++
o;

console.log(`p = ${p}, o = ${o}`);

function sayHello(){
    return;
    {
        "someone says hi";
    }

}

// iteration page QA exercise 1

function loop()
{
    for(let a = 100; a < 200; a++){
        console.log('A');
    }

}
loop();

// iteration page QA exercise 2


function loop2()
{
    for(let a = 100; a <= 200; a++){
        if(a%2 == 0)
        {
            console.log('-');
        }
        else
        {
            console.log('*');
        }
    }

}
loop2();

// iteration page QA Method to print 1-10 10 times each

function loop3(){
for (let i = 0; i < 10; i++)
{
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  
}
loop3();

// iteration page QA switch case statement 

let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}

// Conditionals 

//Truthly and Falsly 

// in JS each value has an inherent boolean value 

// Excercise

//console.log(strictA == strictB); 
//console.log(strictA === strictB);


let age = 15;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

// let age = 100;
//let result = age >= 50 ? "50 or over" : "Under 50";
//console.log(result);

// OBJECTS ARRAYS AND JSON

//OBJECTS 
// An object can be defined as an unordered collection of related data, of primitive or reference types in the form of key:value pairs.

let animal = new Object();

animal['name'] = 'Clifford'
animal['size'] = 'Big'
animal['type'] = 'Dog'

console.log(animal);
console.log(animal.size);

animal.color = 'red';

console.log(animal);

//literal notation is a quicker way of doing the above Object

let vehicle = {
    "type" : "bike",
    "seats" : 1,
    "wheels": 2
}

console.log(vehicle);


let garage = [
    vehicle, 
    {"type": "car", "seats":5, "wheels":4}
]

console.log(garage);

// to iterate oven an array 

let z = [`a`, `b`, `c`, `d`];

for (let i = 0; i <z.length; i++){
    console.log(z[i]);
}



// JSON

let newJSON = {
    "name" : "will",
    "age" : 23
}
//JSON to string

let str = JSON.stringify(newJSON);
console.log(str);

// string to JSON

let unSTR = JSON.parse(str);
console.log(unSTR);

// we want to use this to convert an object into a serialised JSON string

