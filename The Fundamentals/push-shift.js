//Push and Shift

const theBigFive = (arr, item) => {

    arr.push(item); // Pushes value to end of array
    return arr.shift(); // Shift doesn't take arguments?

}

let testArray = [0,1,2,3,4];

console.log(theBigFive(testArray, 5));
console.log(testArray);