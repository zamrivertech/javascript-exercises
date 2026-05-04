const removeFromArray = function(array, ...params) {

    for (let i = 0; i < array.length; i++) {

        array.splice(array.indexOf(params[i]),1);

    }

    return array;
};

console.log(removeFromArray(["A","B","C"], "B"));

// Do not edit below this line
module.exports = removeFromArray;
