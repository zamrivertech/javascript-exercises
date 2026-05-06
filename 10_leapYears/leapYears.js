const leapYears = function(year) { //add year param

    if ( (year % 4 === 0 && !(year % 100 === 0)) || (year % 400 === 0)) { 
        //if divsible by 4 and not by 100, is leap year, but if divisible by 400, is leap year
        return true;
    } 

    return false; // else false

    //I AM HAPPY, WIIII.....!!!!!!!!!!!

};

// Do not edit below this line
module.exports = leapYears;
