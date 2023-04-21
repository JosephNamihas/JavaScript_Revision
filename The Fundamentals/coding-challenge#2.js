// Use Inquirer to generate this data

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let markHigherBMI = false;


const calculateBMI = (height, weight) => {
    let BMI = weight / (height * height)
    return BMI.toFixed(2);
}

let marksBMI = calculateBMI(markHeight, markWeight);
let johnsBMI = calculateBMI(johnHeight, johnWeight);

if(marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher then John's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}