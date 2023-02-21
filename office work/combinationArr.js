// Write a program to combine two arrays
// firstInput = [ 1, 2, 3 ]
// secondInput = [ 4, 5, 6 ]
// Output: = [ 1, 2, 3, 4, 5, 6]
let arr1 = [0,1,2,3,4];
let arr2 = [5,6,7,8,9];
for(i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
}
console.log(arr1);
