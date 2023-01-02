'use strict';

function operation() {
  let number1 = prompt('enter the first number');
  let sign = prompt('enter +,-,/,* sign');
  let number2 = prompt('enter the second number');
  let result = [];

  if (isNaN(number1) || isNaN(number2)) {
    console.log("⛔️You can't do this operation!");
  }
  if (number1 && !number2) {
    return `the square root ${number1} is: ${Number(
      Math.sqrt(number1).toFixed(3)
    )}`;
  } else if (number2 && !number1) {
    return `the square root ${number2} is: ${Number(
      Math.sqrt(number2).toFixed(3)
    )}`;
  } else if (sign == '+') {
    return `The result of your operation is: ${Number((result = parseFloat(Number(number1) + Number(number2)).toFixed(3)
    ))}`;
  } else if (sign == '-') {
    return `The result of your operation is: ${(result = parseFloat(
      Number(number1 - number2).toFixed(3)
    ))}`;
  } else if (sign == '*') {
    return `The result of your operation is: ${(result = parseFloat(
      Number(number1 * number2).toFixed(3)
    ))}`;
  } else if (sign == '/') {
    return `The result of your operation is: ${(result = parseFloat(
      Number(number1 / number2).toFixed(3)
    ))}`;
  } else {
    return 'Bye.';
  }
}
const test = operation();
console.log(test);
