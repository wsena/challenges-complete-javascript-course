/* #3 - There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! */

class Team {
    constructor(first, second, third){
        this.firstScore = first;
        this.secondScore = second;
        this.thirdScore = third;
    }
    print(){
        console.log(`First score: ${this.firstScore}, Second score: ${this.secondScore}, Third score: ${this.thirdScore}`)
    }
}

//#3.1 - Calculate the average score for each team, using the test data below
let Dolphins = new Team(97, 12, 01);
let Koalas = new Team(09, 95, 23);

function calculateAverageScore(team){

    let average = 0;

    for (var key in team){
        average = average + team[key];
    }
    
    average = average/Object.keys(team).length
    return average.toFixed(2)
}

Dolphins.average = calculateAverageScore(Dolphins)
Koalas.average = calculateAverageScore(Koalas)

/* #3.2 - Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well */
if(Dolphins.average > Koalas.average){
    console.log(`Dolphins are the winners (Average: ${Dolphins.average})!`)
} else if (Koalas.average > Dolphins.average){
    console.log(`Koalas are the winners (Average: ${Koalas.average})!`)
} else {
    console.log("It's a draw!")
}

//#3.3 - Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
function getHighestScore(team){
    let highestScore = 0;

    for(var key in team){
        if(team[key]> highestScore){
            highestScore = team[key]
        }
    }

    return highestScore
}

Dolphins.highestScore = getHighestScore(Dolphins)
Koalas.highestScore = getHighestScore(Koalas)

if(Dolphins.highestScore > Koalas.highestScore && Dolphins.highestScore >= 100){
    console.log(`Dolphins are the winners (Highest Score: ${Dolphins.highestScore})!`)
} else if(Koalas.highestScore > Dolphins.highestScore && Koalas.highestScore >=100){
    console.log(`Koalas are the winners (Highest Score: ${Koalas.highestScore})!`)
//#3.4 - Bonus 2:  Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
} else if(Koalas.highestScore == Dolphins.highestScore && Dolphins.highestScore >=100 && Koalas.highestScore >=100)
    console.log("It's a draw!")
else{
    console.log("No winners this time")
}