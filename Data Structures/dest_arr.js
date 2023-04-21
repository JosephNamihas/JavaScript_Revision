// Destructing is an E6 Feature. Unpacking array values into smaller variables.
// Retrieve elements from an array and store in a variable

// The Old Way
const arr = [2, 3, 4, 5, 6, 7, 8];
const a = arr[0]; // 2
const b = arr[1]; // 3
const c = arr[2]; // 4

// Destructuring an Array
const [x, y, z] = arr; // 1st, 2nd and 3rd elements of an array
console.log(x, y, z);

const restaurant = {
    name: "Classico Italiano",
    location: ["Via Angelo Tavanti 23, Firenze, Italy", "Napoli Road, Napoli"],
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function(starterIndex, mainIndex) {

        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    unavailable: function(categoriesIndex, locationIndex) {
        return [this.categories[categoriesIndex], this.location[locationIndex]];
    },
}

let [main, , secondary] = restaurant.categories; // Skipping index in an array - Italian Vegeterian
console.log(main, secondary); // Italian Vegeterian

[main, secondary] = [secondary, main]; // Switching Variables
console.log(main, secondary); // Vegetarian Italian

// Use a function to return multiple values from an Array

// Receive 2 return values from a return function
const [starter, mainCourse] = (restaurant.order(2, 0)); // Garlic Bread and Pizza
console.log(starter, mainCourse);


// oneDigit etc are variables created from the array - You have destructured the array into variables which we can use rather than using arrmyExample[0] etc

// what happens if we have a nested array?

const nested = [2, [100, 200, 300, [1000, 2000]], 3, 1, 5]
console.log(nested[1][3][0]); // 1000

//const[i, , j] = nested; // 2, missing out the multidimensional array, and going to 3
//console.log(i, j);

// Destructining inside destructuring

const [i, [j, k, , [l]]] = nested; // 2, 100, 200, 1000
console.log(i, j, k, l);

// Setting default values for destrcturing. Don't know the length of an Array?
// Default values

//const [p, q, r] = [8, 9];
// console.log(p, q, r); //r will be undefined as there's only two elements in the array

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);


// REVISE DEFAULT VALUES
