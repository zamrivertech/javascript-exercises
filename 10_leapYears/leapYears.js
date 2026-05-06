const leapYears = function(year) { //add year param

    if (year % 4 === 0) {// if divisible by 4 then return true
        return true;
    } 

    return false; // else false

};

// Do not edit below this line
module.exports = leapYears;
