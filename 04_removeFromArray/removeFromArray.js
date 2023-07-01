const removeFromArray = function(arr, ...args) {
    return arr.filter(items => !args.includes(items))
}

// Do not edit below this line
module.exports = removeFromArray;
