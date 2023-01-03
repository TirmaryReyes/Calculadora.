'use strict';

  
  function operation() {
  let number1 = Number(prompt('enter the first number'));

  let number2 = Number(prompt('enter the second number'));
    
  let sum = parseFloat((number1 + number2).toFixed(3));
  let subtr = parseFloat((number1 - number2).toFixed(3));
  let div = parseFloat((number1 / number2).toFixed(3));
  let mult = parseFloat((number1 * number2).toFixed(3));
  let result = [];

  if (isNaN(number1) || isNaN(number2)) {
    return "⛔️You can't do this operation!";
  } else if (number1 && !number2) {
    return `the square root ${number1} is: ${Number(
      Math.sqrt(number1).toFixed(3)
    )}`;
  } else if (number2 && !number1) {
    return `the square root ${number2} is: ${Number(
      Math.sqrt(number2).toFixed(3)
    )}`;
  } else if (parseFloat(sum)) {
    sum = `${Number(sum.toFixed(3))}`;
  } else if (parseFloat(subtr)) {
    subtr = `${Number(subtr.toFixed(3))}`;
  } else if (parseFloat(div)) {
    div = `${Number(div.toFixed(3))}`;
  } else if (parseFloat(mult)) {
    mult = `${Number(mult.toFixed(3))}`;
  } else {
    return 'Bye';
  }
  result.push(`The result of your sum is: ${sum}`);
  result.push(`The result of your subtration is: ${subtr}`);
  result.push(`The result of your division is: ${div}`);
  result.push(`The result of your multiplication is: ${mult}`);
  return `${result}`;
}
const test = operation();
console.log(test);

