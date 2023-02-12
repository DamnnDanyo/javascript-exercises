const sumAll = function(num1, num2) {
    var toType = function(sortedNumber) {
        return ({}).toString.call(sortedNumber).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }
    if (toType(num1) !== toType(num2)) {
            return 'ERROR';
        }
    

    const sortedNumber = [num1, num2]
    const arrSorted = sortedNumber.sort(function(a,b){return a - b});
     

    switch(true){
        case num1 < 0:
        case num2 < 0:
        case num1 === String:
        case num2 === String:
            return 'ERROR'
    }
    
        var arr = [];
            for (var i = arrSorted[0]; i <= arrSorted[1]; i++) {
            arr.push(i);
            }
        let sum = 0
            for (let i = 0; i < 
                arr.length; i += 1) {
                sum += arr[i]
            } 
            return sum
            } 
        

// Do not edit below this line
module.exports = sumAll;
