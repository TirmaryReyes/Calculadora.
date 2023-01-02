'use strict';

function operation() {
    let number1 = parseFloat(prompt('enter the first number'));
    let sign = prompt('enter +,-,/,* sign');
    let number2 = parseFloat(prompt('enter the second number'));
    let result = [];
  
    if (isNaN(number1) || isNaN(number2)) {
      console.log("⛔️You can't do this operation!");
    }
    if (number1 && !number2) {
      console.log(`the square root ${number1} is: ${Number(Math.sqrt(number1).toFixed(
        3
      ))}`);
    } else if (number2 && !number1) {
      console.log(`the square root ${number2} is: ${Number(Math.sqrt(number2).toFixed(
        3
      ))}`);
    } else if (sign == '+') {
      result = Number((number1+ number2).toFixed(3));   
    } else if (sign == '-') {
      result = Number((number1 - number2).toFixed(3));
     
    } else if (sign == '*') {
      result = Number((number1 * number2).toFixed(3));
      
    } else if (sign == '/') {
     result = Number((number1 / number2).toFixed(3));
      
    } else {
      return 'Bye.';
    }
  
    return `The result of your operation is: ${result}`;
  }
  const test = operation();
  console.log(test);
  
