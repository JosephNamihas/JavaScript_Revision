const markObject = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.bmi = (this.mass / this.height ** 2).toFixed(2);
    }
}

const johnObject = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.bmi = (this.mass / this.height ** 2).toFixed(2); // OOP will remove the need to repeat this. DRY!!
    }
}

console.log(`${markObject.calcBMI() > johnObject.calcBMI() ? "Mark" : "John"} has a higher BMI!`)
console.log(`Mark: ${markObject.calcBMI()}`);
console.log(`John: ${johnObject.calcBMI()}`);
