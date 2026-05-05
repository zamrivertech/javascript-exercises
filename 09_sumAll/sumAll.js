const sumAll = function(a,b) {

    let counter = a;

    let sum = [];



    while (counter <= b) {

        sum.push(counter);

        counter++;
    }

    return sum.reduce(a);

};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
