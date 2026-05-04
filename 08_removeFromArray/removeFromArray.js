const removeFromArray = function(array, ...params) {

    let paramLength = [];

    paramLength.push(...params);

    if (paramLength.length === 1) {
     
        array.splice(array.indexOf(params[0]),1);

        return array;
        
    }

    for (let i = 0; i < array.length; i++) {

        array.splice(array.indexOf(params[i]),1);

    }

    return array;
};

console.log(removeFromArray(["A","B","C"], "B", "A"));

// Do not edit below this line
module.exports = removeFromArray;
