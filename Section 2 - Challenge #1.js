/* #1 - Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins */

class Team {
    constructor(first, second, third){
        this.firstScore = first;
        this.secondScore = second;
        this.thirdScore = third;
    }
}

//#1.1 - Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (team) => {
    var average = 0;
    for(key in team){
        average = average + team[key] 
    }
    average = average/Object.keys(team).length
    return average
}

/*1.3 - Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"*/
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    //#1.5 - Ignore draws this time
    /*} else{
        console.log("No one wins!")*/
    }
}

let Dolphins = new Team(44, 23, 71)
let Koalas = new Team(65, 54, 49)

//#1.2 - Use the function to calculate the average for both teams
let avgDolphins = calcAverage(Dolphins)
let avgKoalas = calcAverage(Koalas)

//#1.4 - Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins, avgKoalas)

Dolphins = new Team(85, 54, 41)
Koalas = new Team(23, 34, 27)

avgDolphins = calcAverage(Dolphins)
avgKoalas = calcAverage(Koalas)

checkWinner(avgDolphins, avgKoalas)