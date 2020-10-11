// Provided length of an array and start
// nums[i] = start + 2*i

function xor_operation(values) {
    console.log("Nums array :", values);
    let result = 0;
    for (var i = 0; i <= values.length - 1; i++) {
        result = result ^ values[i];
        console.log("Each Value :", result);
    }

    return result;
}

function createArray(n, start) {
    const nums = [];
    for (var i = 0; i <= n - 1; i++) {
        nums[i] = start + 2 * i;
    }
    console.log(nums);
    let result = xor_operation(nums);
    console.log(result);
}

createArray(10, 5);