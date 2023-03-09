// IMPORT THE MODULE
import { add,sub,mul,div } from "./calculator.js";
// COLLECT FIRST NUMBER FROM USER
document.write("HI");
let first_num = parseFloat(prompt("Enter first number"));
// COLLECT SECOND NUMBER FROM USER
let second_num = parseFloat(prompt("Enter second number"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let ch = prompt("Enter operator +,-,*,/");
let a, b, c, d;
// CHECK TO SEE WHAT OPERATION THEY'RE USING
do {
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
} while (1);
// CALL THE APPROPRIATE FUNCTION
