// Arrow Functions

const showMessage = () => {
    console.log("Hello!");
}

showMessage();

// Function Expressions
// Best Practice to Give Function a Name
let functionName = function () {
    console.log("Hello 2");
}

functionName();

// Declarations vs Expressions
// Function key word or const to declare function

// Generic function declaration - Can be called before function definition (hoisting)
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge1(1990));


// Function expression
// Cannot be hoisted. Can be immediatly invoked.


const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge2(1990));