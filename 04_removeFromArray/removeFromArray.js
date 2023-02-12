

const removeFromArray = function(arr, ...arg) {
    
    const newArray = arr.filter(item => !arg.includes(item));
    
    return newArray;
    
}

//removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line  
module.exports = removeFromArray;
