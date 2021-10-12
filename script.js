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

