// Author: Ranjitha

//Date:03/06/2023

// JavaScript Functions


//STEP 1 :Write a function called halfNumber() that 
//accepts one argument(a number), divide it by 2, and return the result.It should log a string like "Half of 5 is 2.5.".

function halfNumber(number) {
    return number / 2;
}

let num, result;
num = prompt("Please enter a number to find half");
result = halfNumber(num);
document.write("Half of " + num + " is :  " + result);
document.write("<br>");
document.write("END1");
document.write("<br>");


//STEP 2: Write a function called squareNumber() that accepts one argument(a number), square that number,
//and return the result.It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number1) {
    return number1 * number1;
}
let num1, result1;
num1 = prompt("Please enter a number to calaclue the square");
result1 = squareNumber(num1);
document.write("The result of squaring the number " + num1 + " is :  " + result1);
document.write("<br>");
document.write("END2");
document.write("<br>");


//STEP 3: Write a function called percentOf() that accepts two numbers, figure out what percent the first number 
//represents of the second number, and return the result.It should log a string like "2 is 50% of 4."

function percentOf(num1,num2) {
    return (100*num1)/num2;
}
let num3,num4 ,result2;
num3 = prompt("Please enter a number1 to calculate percentage");
num4 = prompt("Please enter a number2 to calculate percentage");
result2 = percentOf(num3, num4);
//document.write(result2);
document.write(num3+  " is " +result2+  "  % of  " +num4);
document.write("<br>");
document.write("END3");
document.write("<br>");

//STEP 4 : Write a function called findModulus() that accepts two numbers.Within the function write a statement
//that returns the modulus of the first and second parameters.It should log a string like "2 is the modulus of 4 and 10."

function findModulus(a, b) {
    if (a === 0)
        return b;
    if (b === 0)
        return a;
    if (a === b)
        return a;
    if (a > b)
        return findModulus(a - b, b);
    return findModulus(a, b - a);
}
let a, b, result3;
a = parseInt(prompt("Please enter a number1 to modulous"));
b = parseInt(prompt("Please enter a number2 to modulous"));
result3 = findModulus(a, b);
//document.write("result3");
document.write(result3+ " is the modulous of  " + a + "  and  " +b);
document.write("<br>");
document.write("END4");
document.write("<br>");
