const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    let aswear = "";
    for(let i = 0; i < num; i++){
        aswear += str;
    }
    return aswear;
};

// Do not edit below this line
module.exports = repeatString;