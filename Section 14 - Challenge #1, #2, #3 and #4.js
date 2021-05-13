/* Implementing objects with constructor functions */
//#1

//#1.1 - Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
function Car(make, speed){
    this.make = make;
    this.speed = speed;
};

//#1.3 - Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
Car.prototype.brake = function (){
    this.speed -= 5
    console.log(`${this.make} car speed after brake: ${this.speed} km/h`)
};

//#1.2 - Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
Car.prototype.accelerate = function(){
    this.speed += 10
    console.log(`${this.make} car speed after accelerate: ${this.speed} km/h`)
};

//#1.4 - Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
let Car_1 = new Car('BMW', 120)
let Car_2 = new Car('Mercedes', 95)

console.log("---- Implementing objects with constructor functions".toUpperCase() + " ----")
console.log("1:")
Car_1.accelerate()
Car_2.accelerate()
Car_2.brake()
Car_1.brake()

/*Implementing objects with CLASS keyword (after ECMAScript 2015)  */
//#2
//#2.1 - Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10
        console.log(`${this.make} car's new speed (accelerate): ${this.speed} km/h`)
    }

    brake(){
        this.speed -= 5
        console.log(`${this.make} Car's new speed (brake): ${this.speed} km/h`)
    }
    //#2.2 - Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
    get SpeedUS(){
        return this.speed/1.6
    }
    //#2.3 - Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
    set SpeedUS(newSpeed){
        this.speed = newSpeed * 1.6
    }
}

//#2.4 - Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
let Car_3 = new CarCl('Ford', 120)

console.log("---- Implementing objects with CLASS keyword".toUpperCase() + " ----")
console.log("2:")
Car_3.accelerate()
Car_3.brake()
console.log(`${Car_3.make} getSpeedUS: ${Car_3.SpeedUS} mi/h`)
Car_3.SpeedUS = 50
console.log(`${Car_3.make} setSpeedUS: ${Car_3.SpeedUS} mi/h` )

/* Implementing a child class using constructor function */
//#3
/*#3.1 - Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)*/
function EV(make, speed, charge){
    Car.call(this, make, speed);

    this.charge = charge;
}
//Link the prototypes
EV.prototype = Object.create(Car.prototype);

//#3.2 - Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

/*#3.3 - Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 
'Tesla going at 140 km/h, with a charge of 22%*/
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

//By default, the EV constructor is the Car constructor; so we need to change this
EV.prototype.constructor = EV;

//#3.4 - Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'!
let tesla = new EV("Tesla", 120, 23)

console.log("---- Implementing a child class using constructor function".toUpperCase() + " ----")
console.log("3:")
tesla.chargeBattery(90)
console.log(tesla)
tesla.accelerate()
tesla.brake()

/* Implementing a child class using CLASS keyword (after ECMAScript 2015) */
//#4
//#4.1 - Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
class EVCl extends CarCl {

    //#4.2 - Make the 'charge' property private
    #charge

    constructor(make, speed, charge){
        //SUPER always need to be called first!
        super(make, speed);

        //Protected property - Convention
        //this._charge = charge;

        this.#charge = charge;
    }

    //Public interface (API)
    getCharge(){
        return this.#charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        //#4.3
        return this;
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        //#4.3
        return this;
    }
    
    brake(){
        super.brake();
        //#4.3
        return this;
    }
}

let rivian = new EVCl("Rivian", 120, 23);

console.log("---- Implementing a child class using CLASS keyword".toUpperCase() + " ----");
console.log("4:");
rivian.chargeBattery(90);
console.log(rivian);
rivian.accelerate();
rivian.brake();

/*#4.3 - Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. 
Then experiment with chaining!*/
rivian.accelerate().chargeBattery(100).brake().accelerate();