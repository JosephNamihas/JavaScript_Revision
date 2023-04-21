// Scores
let teamDolphinScores = [96, 108, 89];
let teamKoalasScores = [88, 91, 110];


const teamScores = (array) => {

    let avgScore = 0;
    let arrayLength = array.length;

    for(let i = 0; i < array.length; i++) {
        if(array[i] < 100) { // If score is below 100, it is not counted and is taken off the scoreboard.
            delete array[i]; // Deletes
        } else {
        avgScore += array[i] // avgScore = avgScore + scoreValue
        return (avgScore / arrayLength).toFixed(2); // Returns avg score / rounds played and returns values with a fixed value (2 0s)
        }
    }
}

let teamDolphinAvg = (teamScores(teamDolphinScores)); // Feeds the scores into the function
let teamKoalasAvg = (teamScores(teamKoalasScores));

if(teamDolphinAvg > teamKoalasAvg) {
    console.log(`The Dolphins win with ${teamDolphinAvg}`)
    console.log(`The Koalas scored ${teamKoalasAvg}`);
} else if (teamDolphinAvg === teamKoalasAvg) {
    console.log("Draw!")
} else {
    console.log(`The Koalas win with ${teamKoalasAvg} `)
    console.log(`The Dolphins scored ${teamDolphinAvg}`)
}