//#4 - Let's improve Steven's tip calculator even more, this time using loops!

//#4.1 - Create an array 'bills' containing all 10 test bill values
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

//#4.2 - Create empty arrays for the tips and the totals ('tips' and 'totals')
let tips = []
let totals = []

/*#4.3 - Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!*/
function calcTip (bills) {
    //return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
    var tip = 0

    bills.forEach(function (bill){
        tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
        tips.push(tip)
        totals.push(tip + bill)
    });

}

//#4.4 - Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
function calcAverage(arr){
    var sum = 0

    arr.forEach(function(element){
        sum  = sum + element
    })

    var average = sum / arr.length
    return average
}

calcTip(bills)
console.log("Bills: " + bills.toString())
console.log("Tips: " + tips.toString())
console.log("Totals: " + totals.toString())
console.log("Average: " + calcAverage(totals))