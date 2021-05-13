/* #1 - We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). 
In this challenge we're gonna work with that data. */

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//#1.1 - Create one player array for each team (variables 'players1' and 'players2')
let players1 = game.players[0]
let players2 = game.players[1]

/*#1.2 - The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players*/
let gk = players1[0]
let fieldPlayers = players1.slice()
fieldPlayers.shift()

//#1.3 - Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers = players1.concat(players2)

//#1.4 - During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let players1Final = players1.concat(['Thiago', 'Coutinho','Perisic'])
//console.log(players1Final.toString())

//#1.5 - Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
let team1 = game.odds.team1
let draw = game.odds.x
let team2 = game.odds.team2
//console.log(team1)
//console.log(draw)
//console.log(team2)

/*#1.6 - Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)*/
function printGoals(...players){
    players.forEach(player => console.log(player))
    console.log(`Total Score: ${players.length}`)
}

printGoals('Burki',
'Schulz',
'Hummels',
'Akanji')

//#1.7 - The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
switch(game.odds.team1 < game.odds.team2){
    case (true):
        //console.log(`${game.team1} is more likely to win`)
        break;
    case (false):
        //console.log(`${game.team2} is more likely to win`)
        break;
}

//#2 - Let's continue with our football betting app! Keep using the 'game' variable from

//#2.1 - Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
game.scored.forEach(function(player, index){
    //console.log(`Goal ${index+1}: ${player}`)
})

//#2.2 - Use a loop to calculate the average odd and log it to the console
let sumOdds = 0;

for (var key in game.odds){
    sumOdds += game.odds[key]
}

let averageOdd = (sumOdds/Object.keys(game.odds).length).toFixed(2)

console.log('Average odd: ' + averageOdd)

/*#2.3 - Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").*/

for(var key in game.odds){
    if(key == 'x'){
        console.log(`Odd of draw: ${game.odds[key]}`)
    } else{
        console.log(`Odd of victory ${game[key]}: ${game.odds[key]}`)
    }
}

/*#2.4 - Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. 
In this game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
*/
var scorers = new Object()

game.scored.forEach(function(player){
    if(scorers.hasOwnProperty(player)){
        scorers[player] += 1
    } else {
        scorers[player] = 1
    }
})

console.log(scorers.valueOf())