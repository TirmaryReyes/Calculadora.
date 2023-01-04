'use strict';

  
  let number1 = prompt('enter the number/rs');
let number2 = prompt('enter the number/rs');
let sum = parseFloat(Number(+number1 + +number2).toFixed(3));
let subtr = parseFloat((number1 - number2).toFixed(3));
let div = parseFloat((number1 / number2).toFixed(3));
let mult = parseFloat((number1 * number2).toFixed(3));
let result = [];

function operation() {
  if (isNaN(number1) || isNaN(number2)) {
    return "⛔️You can't do this operation!";
  } else if (Number(number1 && !number2 == !0)) {
    return `The square root ${number1} is: ${Number(
      Math.sqrt(number1).toFixed(3)
    )}`;
  } else if (Number(number2 && !number1 == !0)) {
    return `The square root ${number2} is: ${Number(
      Math.sqrt(number2).toFixed(3)
    )}`;
  } else if (number1 / number2 == Infinity || number2 / number1 === Infinity) {
    div = `can't be divided by zero`;
  } else if (Number(parseFloat(sum))) {
    sum = `${Number(sum.toFixed(3))}`;
  } else if (parseFloat(subtr)) {
    subtr = `${Number(subtr.toFixed(3))}`;
  } else if (parseFloat(div)) {
    div = `${Number(div.toFixed(3))}`;
  } else if (parseFloat(mult)) {
    mult = `${Number(mult.toFixed(3))}`;
  } else {
    return 'Bye.';
  }

  result.push(`The result of your sum is: ${sum}\n`);
  result.push(`The result of your subtration is: ${subtr}\n`);
  result.push(`The result of your division is: ${div}\n`);
  result.push(`The result of your multiplication is: ${mult}\n`);
  return `${result}`.split(',').join(' ');
}
const test = operation();
console.log(test);
