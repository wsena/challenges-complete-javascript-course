/*#1 - Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). */

//#1.1 - Store Mark's and John's mass and height in variables
var Mark = {
    mass: 78,
    height: 1.69
}

var John = {
    mass: 92,
    height: 1.95
}

//#1.2 - Calculate both their BMIs using the formula (you can even implement both versions)
function calculateBMI(mass, height){
    var BMI = 0;
    BMI = mass / (height * height)
    return BMI.toFixed(2)
}

//#1.3 - Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = BMI_mark = calculateBMI(Mark.mass, Mark.height) > calculateBMI(John.mass, John.height)

//#2 - Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//#2.1 - Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//#2.2 - Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
if(markHigherBMI){
    console.log(`Mark's BMI (${calculateBMI(Mark.mass, Mark.height)}) is higher than John's (${calculateBMI(John.mass, John.height)})!`)
} else {
    console.log("John's BMI is higher than Mark's!")
}