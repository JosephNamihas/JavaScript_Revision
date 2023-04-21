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

    }
}

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories); // Takes the name of the object. No need to use indexing.
// Destructuring objects allows you to write a lot less code.

// Variables different to property names?

const{name: restaurantName, openingHours: openingTimes, categories: tags} = restaurant;
//console.log(restaurantName, openingTimes, tags)

// Default values - A value that doesn't exist on the object?
// Useful when data is no hard coded.

const{ menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters);


// Mutating variables when destructuring objects
 let a = 111;
 let b = 999;
const obj = {a: 23, b:7, c: 14};

({a, b} = obj);
// console.log(a, b)

// Nested Objects
const {
    fri: { open: o, close: c },
} = openingHours; // Previously declared this variable
console.log(o, c)

restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    time: "19:00",
    address: "5 Pacific Heights",
    mainIndex: 0,
    starterIndex: 2,
    dessertsIndex: 0
})