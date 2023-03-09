// IMPORT THE MODULE
import { add,sub,mul,div } from './calculator.js';
// COLLECT FIRST NUMBER FROM USER
/*
function add(num1, num2) {
    return num1 + num2;
}

// SUBTRACT FUNCTION
function sub(num1, num2) {
    return num1 - num2;
}

// MULTIPLY FUNCTION
function mul(num1, num2) {
    return num1 * num2;
}

// DIVIDE FUNCTION
function div(num1, num2) {
    if (num1 == 0) {
        document.write("Divide by zero error");
    }
    else
        return num1 / num2;
}
*/
document.write("SIMPLE CALCULATOR");

let a, b, c, d;
let choice = 'y';
// CHECK TO SEE WHAT OPERATION THEY'RE USING
do {
let first_num = parseFloat(prompt("Enter first number"));
// COLLECT SECOND NUMBER FROM USER
let second_num = parseFloat(prompt("Enter second number"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let ch = prompt("Enter operator +,-,*,/");

    switch (ch) {
        case '+': a = add(first_num, second_num);
            alert(first_num + ch + second_num + "=" + a);
            break;
        case '-': b = sub(first_num, second_num);
            alert(first_num + ch + second_num + "=" + b);
            break;
        case '*': c = mul(first_num, second_num);
            alert(first_num + ch + second_num + "=" + c);
            break;
        case '/': d = div(first_num, second_num);
            alert(first_num + ch + second_num + "=" + d);
            break;
        default: document.write("Invalid choice");
    }
    choice = prompt("Do you want to continue, y/n");
} while (choice=='y');
// CALL THE APPROPRIATE FUNCTION
