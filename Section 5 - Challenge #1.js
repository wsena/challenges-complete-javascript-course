/* #1 - Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..." */

//#1.1 - Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
function printForecast(arr){
    var text = ""
    arr.forEach(function(element, index){
        text = text + element + "ºC in " + (index+1) + " days... "
    })

    console.log(text)
}

data1 = [17, 21, 23]
data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)