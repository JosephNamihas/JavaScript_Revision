//Truthy values are values will be converted to string. Numbers and strings with text.
//Falsy values are not false, but will become false when they're converted to boolean (0, "", undefined, null, NaN)

console.log(Boolean(0)) // False
console.log(Boolean(undefined)) // False
console.log(Boolean("This is true")) // True
console.log(Boolean({})); // True

// Empty objects and arrays are truthy

