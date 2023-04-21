let teamDolphins = [44, 23, 71];
let teamKoalas = [65, 54, 49];

let teamDolphins2 = [85, 54, 41];
let teamKoalas2 = [23, 34, 27];

const calcAverage = (team) => {

    let score = 0;

    for(let i = 0; i < team.length; i++) {
        score = score + team[i];
    }
    
    return score / team.length;
}

let dolphinAvg = calcAverage(teamDolphins);
let koalasAvg = calcAverage(teamKoalas);

let dolphinAvg2 = calcAverage(teamDolphins2);
let koalasAvg2 = calcAverage(teamKoalas2)


function checkWinner(team1, team2) {
    if(team1 >= 2 * team2) { // If Team1 is greater than, or equal to team2 * 2
        return `Team 1 Wins ${team1} vs ${team2}`
    } else if (team2 >= 2 * team1) {
        return `Team 2 Wins ${team2} vs ${team1}`
    } else return `Draw ${team1} vs ${team2}`
 
}

console.log(checkWinner(dolphinAvg, koalasAvg));
console.log(checkWinner(dolphinAvg2, koalasAvg2));
