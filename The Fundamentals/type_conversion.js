// Type Conversion is when you manually convert one type to another

const inputYear = "1991";
// Unable to do calculations with a string input

console.log(inputYear + 18);
// Will return 199118

console.log(Number(inputYear) + 18);
// This will return 1991 as a number rather than a string
// 2009


console.log(Number("Jonas"));
// NaN = (Invalid Number)

// Converting Numbers to String using String.
console.log(String(23));

// --------------------- Type Coercion is when JavaScript converts the types in the background, automatically

console.log("I am" + 32 + " years old");
// Plus operator will convert to strings

console.log("23" - "10" - 3);
// Minus converts to numbers

let n = "1" + 1; // 11
n = n - 1; // Converts back to numbers
console.log(n); // 10