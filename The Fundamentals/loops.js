const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ["Michael", "Peter", "Steven"]
];

const types = [];

for(let i = 0; i < jonasArray.length ; i++)
{
    types.push(typeof jonasArray[i]);
}


const years = ["kk", 1991, 2007, "hello", 1969, 2020, "d", "bluh"]; 

var totalSum = 0;
var totalSumArr = [];

for(let i = 0; i < years.length; i++) {
    if(typeof years[i] !== "number") {
        continue; // Very useful! 
    }
    totalSum += years[i]
    totalSumArr.push(totalSum);
}

// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

console.log(totalSumArr);
