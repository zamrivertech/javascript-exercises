const repeatString = function(string, number) {

        //new empty string
        let word = "";


        for (let i = 0; i < number; i++) {

            //concatenate word by string by x times
            word =  word + string;

        }

        //return concatenated string

        return word;

};

//console.log(repeatString("hi",3));

// Do not edit below this line
module.exports = repeatString;
