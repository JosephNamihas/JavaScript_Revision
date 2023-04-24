// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array (representing variadic functions on JavaScript)
// The rest paramater looks the same as the spread operator ...
// Pack elements into an array

// Spread is on the RIGHT side of assignment operator
// REST because is on the LEFT side

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

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(...others);

[...restaurant.mainMenu]