const arr = [3,8,0,9,2,5];  

// Expected Output :- [1,1,1,2,2]
function rleiterate(arr){
    const outputArray = [];
    var flag = 1 ;
        // Basic Iteration
        for(var i = 0 ; i<= arr.length-1;i++){

            // Logic starts now...
            while(arr[i*2] >= flag){
                outputArray.push(arr[(i*2)+1])
                flag = flag + 1;

                if(flag > arr[i*2]){
                    flag = 1;
                    break;
                }
            }
        }

        return outputArray;

}

let result = rleiterate(arr);
console.log(result);

// --------------------------------------------------------------------------------------
// RLEIterator.next is then called 4 times:[2],[1],[1],[2]

// ------------------------------------------------------------------------------------------
// For exhaustion
// while(n>0){

//     value_arr.shift();
//     n--;
// }

//  return value_arr[0];


// -----------------------------------------------------------------------------------------------
//  Original Solution
//  var RLEIterator = function(A) {
//     this.A = A;
//     this.index = 0;
// };

// RLEIterator.prototype.next = function(n) {
//     while (this.index < this.A.length && n > this.A[this.index]) {
//         n -= this.A[this.index];
//         this.index += 2;
//     }
    
//     if (this.index < this.A.length) {
//         this.A[this.index] -= n;
//         return this.A[this.index + 1];
//     }
    
//     return -1;
// };