const reverseString = function(string) { //receive string as argument

            //split string into array

    /*

    let temp = "";//create empty variable to store swapped letter

    let lastIndex = string.length; //store last index in variable for easier write


   for (let i = 0; i < string.length; i++) { //create loop to run through array by limit length

        temp = string[i]; //store initial swapped letter

        string[i] = string[lastIndex];    //replace initial letter with the last

        string[lastIndex] = temp; //store temp initial letter in last index

        lastIndex--; //decrement index

        if (lastIndex === 2) {

            

            I have no idea why this works, but i console logged the string array
            to monitor letter swapping or replacement process (also the i, temp and lastIndex), 
            and i noticed when last index was equal to one, 
            the reverse letters were perfectly done
            so when it conitnued to be decremneted to 0, the array broke and the 
            array returned to its original state, so i break the loop when 
            lastindex is equal to 1, and it works, thank youuuu buauauaaauau!

            

            //why am i here, jsu to suffeerr

            break; 
        }
        
   }

    console.log(string.length);

    */

    return string.split('').reverse().join(""); //return joined string

};

console.log(reverseString("hello, there!"));

//2,6

// Do not edit below this line
module.exports = reverseString;
