/* This is model and this contains only logic\
*/

calcModule.factory("calcfactory", function() {
    function add(firstNumber, secondNumber) {
        return parseInt(firstNumber)+ parseInt(secondNumber);
    }
    function subtract(firstNumber, secondNumber) {
        return firstNumber- secondNumber;
    }
    function multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    function division(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
    var object = {"addition":add, "subtract":subtract, "multiply":multiply, "division":division};
    return object;
})