// Use Inquirer to generate this data

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let markHigherBMI = false;


const calculateBMI = (height, weight) => {
    let BMI = weight / (height * height)
    return BMI;
}

let marksBMI = calculateBMI(markHeight, markWeight);
let johnsBMI = calculateBMI(johnHeight, johnWeight);


console.log(marksBMI.toFixed(2));
console.log(johnsBMI.toFixed(2));

if(marksBMI > johnsBMI) {
    console.log("Mark's BMI is higher");
} else {
    console.log("John's BMI is higher");
}