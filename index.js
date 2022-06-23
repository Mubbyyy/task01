var num1 = parseFloat(prompt('Enter First number: '));
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var num2 = parseFloat(prompt('Enter Second number: '));
let result;
if (operator == '+') 
    result = num1 + num2;

    if (operator == '-') 
        result = num1 - num2
    
    if (operator == '*') 
        result = num1 * num2
    
    if (operator == '/') 
        result= num1 / num2

    alert(result);
    
