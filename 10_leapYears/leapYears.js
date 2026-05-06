const leapYears = function(year) { //add year param

    if (year % 4 === 0 && !(year % 100 === 0)) { // if divisible by 4 and not divisible by 100
                                                //  then return true
        return true;
    } 

    return false; // else false

};

// Do not edit below this line
module.exports = leapYears;
