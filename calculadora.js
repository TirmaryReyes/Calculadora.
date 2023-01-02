'use strict';

  
  function operation() {
    let number1 = Number(prompt('enter the first number'));
    let sign = prompt('enter +,-,/,* sign');
    let number2 = Number(prompt('enter the second number'));
    let result = [];
  
    if (isNaN(number1) || isNaN(number2)) {
      result="⛔️You can't do this operation!";

    }else if(number1&&!number2){
    result=`the square root ${number1} is: ${Number(Math.sqrt(number1).toFixed(
        3
      ))}`;
  
    } else if (number2 && !number1) {
        result=`the square root ${number2} is: ${Number(Math.sqrt(number2).toFixed(
          3
        ))}`;
    } else if (sign == '+') {
      result =`The result of your operation is: ${parseFloat(Number((number1+ number2).toFixed(3)))}`;   
    } else if (sign == '-') {
      result = `The result of your operation is: ${parseFloat(Number((number1 - number2).toFixed(3)))}`;
     
    } else if (sign == '*') {
      result =`The result of your operation is:  ${parseFloat(Number((number1 * number2).toFixed(3)))}`;
      
    } else if (sign == '/') {
     result = `The result of your operation is:  ${parseFloat(Number((number1 / number2).toFixed(3)))}`;
      
    } else{
      return 'Bye';
    }
  
    return `${result}`;
  }
  const test = operation();
  console.log(test)
  
