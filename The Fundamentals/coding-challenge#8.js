var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tip = [];
var total = [];

const calcTip = (bill) => {
    for(let i = 0; i < bill.length; i++) {
        if(bill[i] >= 50 && bill[i] < 300) {
            tip.push(bill[i] * 0.15).toFixed(2);
            total.push(bill[i] + bill[i] * 0.15).toFixed(2);
            console.log(`You paid a £${bill[i] * 0.15} tip for a total of £${bill[i] + bill[i] * 0.15}`);
        } else {
            tip.push(bill[i] * 0.2).toFixed(2);
            total.push(bill[i] + bill[i] * 0.2).toFixed(2);
            console.log(`You paid a £${bill[i] * 0.2} tip for a total of £${bill[i] + bill[i] * 0.2}`);
        }
    }
}

// calcTip(bills);


const calcAverage = (arr) => {

    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

console.log(calcAverage(bills));