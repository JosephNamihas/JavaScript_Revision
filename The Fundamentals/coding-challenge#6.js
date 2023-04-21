let bills = [125, 555, 44];
let tip = [];
let total = []; // Total values = bill + tip

const calcTip = (bill) => {
    for(let i = 0; i < bill.length; i++) {
        if(bill[i] >= 50 && bill[i] < 300) {
            tip.push(bill[i] * 0.15).toFixed(2);
            total.push(bill[i] + bill[i] * 0.15).toFixed(2);
        } else {
            tip.push(bill[i] * 0.2).toFixed(2);
            total.push(bill[i] + bill[i] * 0.2).toFixed(2);
        }
    }

    return console.log(`Tip 1: £${tip[0]} from total of £${total[0]} \nTip 2: £${tip[1]} from total of £${total[1]} \nTip 3: £${tip[2]} from a total of £${total[2]}`);
}

console.log(calcTip(bills));