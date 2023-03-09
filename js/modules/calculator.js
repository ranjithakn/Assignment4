// ADD A PRIVATE FUNCTION CALLED CALCULATE
//function calculate(){
    // ADD FOUR PUBLIC FUNCTIONS BELOW
    //////////////////////////////////
    // ADD 
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
//}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, sub, mul, div };