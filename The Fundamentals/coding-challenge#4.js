var totalBill = 430;
var normalTip = 0.15;
var highTip = 0.20;

// If bill is greater or equal to 50 AND less than 300 <- If this value is true, execute statement after ?. If not, execute the one after :

const determineTip = (bill) => {
    bill >= 50 && bill < 300 ? console.log(`Your total bill is £${totalBill} + £${totalBill * normalTip} tip`) : console.log(`Your total bill is £${totalBill} + £${totalBill * highTip}`);
}

determineTip(totalBill);
// 275 = 41.25
// 40 = 8
// 430 = 86