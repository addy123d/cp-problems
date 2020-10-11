const num = [1, 2, 2, 6, 6, 6, 6, 7, 10];

var element = function (num) {
    var index;
    var counter;

    //Iterate through each values
    for (index = 0; index <= num.length - 1; index++) {
        console.log(num[index]);

        //Iterate through each values
        if (num[index - 1] === num[index]) {
            counter++;

            //Check for appearnce more than 25%
            if (counter >= num.length * 0.25) {
                return num[index]
            }

        } else {
            //Check if the array has only one element
            if (num.length === 1) {
                return num[index];
            }
            counter = 0;
            continue;
        }
    }

}

let result = element(num);
console.log("Element appeared more than 25% :", result);