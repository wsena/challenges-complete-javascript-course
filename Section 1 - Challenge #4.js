/* #4 - Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. */

let billValue = 430;

//#4.1 - Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. 
const tip = billValue >= 50 && billValue <=300 ? billValue * 0.15 : billValue * 0.2;

//#4.2 - Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)
