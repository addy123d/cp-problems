// Passed
const nums = [1, 2, 3, 4, 5]; //Initialising nums array with values
const result = []; //Initialising empty result array
let sumValue = 0;

for (var i = 0; i < nums.length; i++) {
    sumValue = sumValue + nums[i];
    result.push(sumValue);
}

console.log(result);