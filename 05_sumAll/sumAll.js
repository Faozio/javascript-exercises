const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    const small = Math.min(num1, num2);
    const big = Math.max(num1, num2);
    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
