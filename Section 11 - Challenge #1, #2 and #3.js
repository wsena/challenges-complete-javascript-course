/* #1 - Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old. 
Your tasks: Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate') */

let data1Julia = [3, 5, 2, 12, 7]
let data1Kate = [4, 1, 15, 8, 3]
let data2Julia = [9, 16, 6, 8, 3]
let data2Kate = [10, 5, 6, 1, 4]

function checkDogs(dogsJulia, dogsKate){
    /*#1.1 - Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! 
    So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)*/
    var copyDogsJulia = dogsJulia.slice()
    /*Removing the first element*/
    copyDogsJulia.shift()
    /*Removing the last two elemets*/
    copyDogsJulia.pop()
    copyDogsJulia.pop()

    //#1.2 - Create an array with both Julia's (corrected) and Kate's data
    /* Concat copyDogsJulia and dogsKate arrays in only one array (allData) */
    var allData = copyDogsJulia.concat(dogsKate)

    //#1.3 - For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
    allData.forEach(function(dogAge, index) {
        if(dogAge >=3)
            console.log(`Dog number ${index+1} is an adult, and is ${dogAge} years old`)
        else 
            console.log(`Dog number ${index+1} is still a puppy 🐶`)
    })
}

//#1.4 - Run the function for both test datasets
//checkDogs(data1Julia, data1Kate)
//checkDogs(data2Julia, data2Kate)

//#2 - Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study

let data1 = [5, 2, 4, 1, 15, 8, 3]
let data2 = [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(ages){
    //var humanAges = []

    /*
    ages.forEach(function(age){
        //#2.1
        var humanAge = age <= 2 ? age*2 : 16 + (age*4)

        //#2.2
        if(humanAge >= 18){
            humanAges.push(humanAge)
        }
    })*/

    //#2.3
    /*var sum = 0
    humanAges.forEach(function (age){
        sum += age
    })
    var average = (sum/humanAges.length).toFixed(2)*/

    //#2.1 - Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
    var humanAges = ages.map(age => age <= 2 ? age *2 : 16 + (age*4))

    //#2.2 - Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
    var adultHumanAges = humanAges.filter(age => age >= 18)

    //#2.3 - Calculate the average human age of all adult dogs
    var sumAges = adultHumanAges.reduce((acum, age) => acum += age)

    //#2.4 - Run the function for both test datasets
    console.log(humanAges)
    console.log(adultHumanAges)
    console.log(`Dogs age average: ${(sumAges/adultHumanAges.length).toFixed(2)}`)
}

//#2.4
//console.log("Challenge #2")
//calcAverageHumanAge(data1)
//calcAverageHumanAge(data2)

//#3 - Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
function chainingCalcAverageHumanAge(ages){
    return console.log(`Dog's age average: ${(/* Map - Return an array with dog's human ages calculated according to the formula */
                                              ages.map(age => age <= 2 ? age*2 : 16 + (age*4))
                                              /* Filter the dog's human ages array (map return array) and return a new array only with dogs >= 18 years */
                                                  .filter(age => age >= 18)
                                              /* Based on the array with dogs >= 18 years, sum all ages*/
                                                  .reduce((accum, age) => accum += age)/
                                             /* Returns the length of the array with dogs >= 18 years */     
                                             ages.map(age => age <= 2 ? age*2 : 16 + (age*4))
                                                 .filter(age => age >= 18).length)
                                                 .toFixed(2)}`)
}

console.log("Challenge #3")
chainingCalcAverageHumanAge(data1)
chainingCalcAverageHumanAge(data2)