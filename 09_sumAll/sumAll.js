const sumAll = function(a,b) {

    let counter = a; //create counter to a

    let sumArray = []; //create empty sum array

    let sum = 0;

    while (counter <= b) { //while counter is less or equal to b

        sumArray.push(counter); //add the initial value and following increment value till loop... 
                            //...condition is false to break the loop

        counter++; //and increment the initial value to 1 till its equal to b

    }

    for (let i = 0; i < sumArray.length; i++) {//create loop to run through array

        sum = sum + sumArray[i]; //sum with array elements to get final sum

    }

    return sum;//return final sum

};

console.log(sumAll(2,4));

// Do not edit below this line
module.exports = sumAll;
