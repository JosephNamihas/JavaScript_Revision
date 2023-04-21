// Keys and Values - Key Value Pairs
// Order of values do not matter
var moneyValue = 100;
var birthYear = 1990;

const ageCheck = (age) => {
    if(age < 18) {
        return false; // Truthy falsy values here
    } else return true;
}

const jonas = {
    name: "erik",
    occupation: "teacher",
    birthYear: 1990,
    dates: [11, 12, 130],
    gold: moneyValue,
    hasDriversLicense: true,

    calcAge: function () { // Function as value - this is an expression
        this.age = 2023 - this.birthYear
        return this.age; // using this, to create a new property inside the object (age)
    },

    getSummary: function() {
            return (`${this.name} is a ${this.calcAge()} year old ${this.occupation} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`); // You can include ternary operators in {}
    }
}

console.log(jonas.getSummary());

