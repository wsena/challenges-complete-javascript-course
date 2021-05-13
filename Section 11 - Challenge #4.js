/* #4 - Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion. */
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

/*#4.1 - Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)*/
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))

console.log("1:")
console.log(dogs)
console.log("-------------------------------------------")

//#4.2 - Find Sarah's dog and log to the console whether it's eating too much or too little
let sarahsDog = dogs.filter(dog => dog.owners.indexOf("Sarah") !== -1)
console.log("2:")
console.log(`Sarah's dog is eating too ${sarahsDog.recommendedFood >= sarahsDog.curFood ? 'much': 'little'}`)
console.log("-------------------------------------------")

//#4.3 - Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
let ownersEatTooMuch = []
/* Get the dogs who eat too much  - with extra 10% */
dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1)
/* For each dog who eat too much, concat their owner's array with ownersEatTooMuch array */
    .forEach(dog => ownersEatTooMuch = ownersEatTooMuch.concat(dog.owners))

console.log("3:")
console.log(ownersEatTooMuch)

let ownersEatTooLittle = []
/* Get the dogs who eat too little - with less 10% */
dogs.filter(dog => dog.curFood < dog.recommendedFood * 0.9)
/* For each dog who eat too little, concat their owner's array with ownersEatTooLittle array */
    .forEach(dog => ownersEatTooLittle = ownersEatTooLittle.concat(dog.owners))

console.log(ownersEatTooLittle)
console.log("-------------------------------------------")

//#4.4 - Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

/*let textOwnersEatTooMuch = ""

ownersEatTooMuch.forEach(function(owner, index){
    if(index !== ownersEatTooMuch.length-1){
        textOwnersEatTooMuch += owner + " and "
    } else{
        textOwnersEatTooMuch += owner
    }
});

textOwnersEatTooMuch += "'s dogs eat too much!" 

console.log(textOwnersEatTooMuch) */


/*
let textOwnersEatTooLitte = ""


ownersEatTooLittle.forEach(function(owner, index){
    if(index !== ownersEatTooLittle.length-1){
        textOwnersEatTooLitte += owner +  " and "
    } else {
        textOwnersEatTooLitte += owner
    }
})

textOwnersEatTooLitte += "'s dogs eat too little!"
console.log(textOwnersEatTooLitte)
*/

console.log("4:")
console.log(ownersEatTooMuch.join(" and ") + "'s dogs eat too much!")
console.log(ownersEatTooLittle.join(" and ") + "'s dogs eat too little!")
console.log("-------------------------------------------")

//#4.5 - Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log("5:")

console.log(`Is there any dog eating EXACLY the recommended amount of food? ${dogs.some(dog => dog.curFood === dog.recommendedFood)}`)

console.log("-------------------------------------------")

//#4.6 - Log to the console whether there is any dog eating an okay amount of food (just true or false)
console.log("6:")

console.log(`Is there any dog eating an OKAY amount of food? ${dogs.some(dog => dog.curFood <= Math.trunc(dog.recommendedFood * 1.1)
                                                                      && dog.curFood >= Math.trunc(dog.recommendedFood * 0.9))}`)

console.log("-------------------------------------------")

//#4.7 - Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
let dogsEatingOkay = dogs.filter(dog => dog.curFood <= Math.trunc(dog.recommendedFood * 1.1) && dog.curFood >= Math.trunc(dog.recommendedFood * 0.9))

console.log("7:")
console.log(dogsEatingOkay)
console.log("-------------------------------------------")

//#4.8 - Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order

let dogsCopy = dogs.slice()

dogsCopy.sort(function compare(a, b){
    if(a.recommendedFood < b.recommendedFood){
        return -1;
    } 
    if (a.recommendedFood > b.recommendedFood){
        return 1;
    }
    return 0;
})

console.log("8:")
console.log(dogsCopy)
console.log("-------------------------------------------")