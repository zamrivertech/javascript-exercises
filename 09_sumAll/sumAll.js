const sumAll = function(a,b) {

    //prevent negative numbers

    if ((a < 0 || b < 0) ||
        (!Number.isInteger(a) || !Number.isInteger(b))
       ) {
        return 'ERROR';
    }

    //control larger number

    let temp = 0;//create empty variable to help switching process

    if (a > b) { //if a is larger than b

        temp = b; //store b in empty temp
        b = a; // replace b with a
        a = temp; // and set a equal to previous assigned temp

    }

    //console.log(a + " " + b); test switch if worked

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

//console.log(sumAll(123,1));

// Do not edit below this line
module.exports = sumAll;
