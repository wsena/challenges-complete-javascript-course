/* #3 - Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter) */

//#3.1 - For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
class Person {
    constructor(fullName, mass, height){
        this.fullName = fullName;
        this.mass = mass;
        this.height = height;
        this.BMI = this.calcBMI();
    }
    //#3.2 - Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
    calcBMI(){
        return (this.mass / (this.height * this.height)).toFixed(1)
    }
}

let Mark = new Person("Mark Miller", 78, 1.69)
let John = new Person("John Smith", 92, 1.95)

//#3.3 - Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if(Mark.BMI > John.BMI){
    console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`)
} else if (John.BMI > Mark.BMI){
    console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`)
} else{
    console.log('Both have the same BMI')
}
