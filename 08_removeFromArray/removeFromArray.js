const removeFromArray = function(array, ...params) {

    let paramLength = [];

    paramLength.push(...params);

    /*

    if (paramLength.length === 1) {
     
        array.splice(array.indexOf(params[0]),1);

        return array;
        
    }

    */

    for (let i = 0; i < array.length; i++) {


        console.log("params[i]: " + params[0] + " array[i]: " + array[i]);
        console.log(params[0] === array[i]);


        if (params[0] === array[i]) {


            array.splice(array.indexOf(params[0]),1);
        }

    }

    return array;
};

console.log(removeFromArray(["A","B","B","C"], "B"));

// Do not edit below this line
module.exports = removeFromArray;
