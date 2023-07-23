// IMPORT THE MODULE
import { calculate } from "./modules/calculator";


// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
var num1 = parseFloat(window.prompt("Enter first number"));
var num2 = parseFloat(window.prompt("Enter second number"));
var oper = window.prompt("Would you like to add, subtract, multiply, or divide?<br>Please indicate with one of the following: (+, -, *, /): ");

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (oper) {
  case '+' :
      ADD(num1, num2);
      return ADD();

      break;
  case '-' :
      SUBTRACT(num1, num2);
      return SUBTRACT;
      break;
  case '*' :
      MULTIPLY(num1, num2);
      return MULTIPLY;
      break;
  case '/' :
      DIVIDE(num1, num2);
      return DIVIDE;
      break;
  default:
      window.prompt("You entered an invalid operation. Please select using symbols (+,-,*,/)");
}

// CALL THE APPROPRIATE FUNCTION