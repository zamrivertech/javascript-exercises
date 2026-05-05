const removeFromArray = function(array, ...params) { //get array and params

    //implement splice again

    //store multiple arguments in array

    let arg = [...params]; // easier than using Array push

    //create and store initial deleteCount as argument for splice method

    let deleteCount = 0;

    //create for loop for ...params, to compare desired removable elements if found in array

    for (let i = 0; i < arg.length; i++) {

        //create a loop for array, these 2 loops work together to compare the ..params with the received array

        for (let j = 0; j < array.length; j++) {

            while (arg[i] === array[j]) { //instead of if, while works perfectly for if still arguments exist in array, remove till false

                //console.log("arg: " + arg[i] + ", value found in array: " + array[j] + ", array: " + array);

                //if match exists, increment deleteCount for splice
                
                deleteCount++;

                //console.log("splicing: " + array.splice(array.indexOf(arg[i]), deleteCount));

                array.splice(array.indexOf(arg[i]), deleteCount);

                console.log("spliced array: " + array);

                //After delete, decrement, otherwise will delete rest of values, after while is not true...

                deleteCount--;

            }

            //it stops when it finds its equals

            //yo, a while loop works, i don't know how i thought of this, it's amazing!

        }

    }

    return array;

    
};


//console.log(removeFromArray([1,2,2,3,4], 2 ));

// Do not edit below this line
module.exports = removeFromArray;
