// Only specific a condition

let rep = 1;

while(rep <= 10) {
    console.log(`Rep: ${rep}`);
    rep++;
}

// Roll a dice until you roll 6.

var randomRoll = 0;

while(randomRoll != 6) {
    randomRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${randomRoll}`);
}