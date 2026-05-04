const removeFromArray = function(array, element) {

    array.splice(array.indexOf(element),1);

    return array;
};

//console.log(removeFromArray(["A","B","C"], "B"));

// Do not edit below this line
module.exports = removeFromArray;
