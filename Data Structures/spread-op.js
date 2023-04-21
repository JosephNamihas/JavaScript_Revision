// Expand an array in all it's elements
// Very useful for dealing with array literals, like below, or pass arrays into functions
// Spread operator creates a new array

var prompt = require("prompt");
prompt.start();
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]] // 1, 2, 7, 8, 9

const newArr = [1, 2, 3, 4, 5, 6, ...arr, 10, 11, 12]; // Takes the values from the arr array. Saves you from writing them like above.
// 1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10, 11, 12

const restaurant = {
    name: "Classico Italiano",
    location: ["Via Angelo Tavanti 23, Firenze, Italy", "Napoli Road, Napoli"],
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    dessertsMenu: ["Banoffee Pie", "Cheesecake", "Sticky Toffee Pudding"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },

    orderDelivery: function({starterIndex, mainIndex, dessertsIndex, time, address}) {
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and ${this.dessertsMenu[dessertsIndex]} delivered to ${address} at ${time}`);

    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
}

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // Pizza, Pasta, Risotto, Gnocci

// Create Shallow Copies of Arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join Two or more Arrays
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.dessertsMenu];

// Spread operator works on all 'iterables' (arrays, strings, maps, sets)

const word = "Hello";
console.log(...word); // Space inbetween each character

const str = "Jonas";
const letters = [...str]; // Convert string to array?
console.log(letters);

// ----------------------------------------------- GETS USER INPUT - 
//const ingredient1 = [prompt("Choose your first ingredient")];
//const ingredient2 = [prompt("Choose your second ingredient")];
//const ingredient3 = [prompt("Choose your third ingredient")];

// DO THIS INSTEAD

const ingredients = [ // use prompt if on HTML
    "Ingredient 1",
    "Ingredient 2",
    "Ingredient 3"
]

console.log(restaurant.orderPasta(...ingredients));

// ------------------------------------------------

const newRestaraunt = {...restaurant, founder: "Joseph Namihas", rating: 5};
console.log(newRestaraunt);

// Below, we create a new object from the ...restaraunt object. 
// I've copied the object data and created a copy. Similiar to classes, with the original restaraunt object as the "blueprint";

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name)