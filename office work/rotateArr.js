// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
let arr = [1,2,3,4,5,6,7];
let k = 3;
for (i = 1; i <= k; i++){
    let A = arr.pop();
    arr.unshift(A);
}
console.log(arr);