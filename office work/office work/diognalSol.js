const squareMatrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
let LTR = 0;
let RTL = 0;
let extra = squareMatrix.length - 1;
for (i = 0; i <= squareMatrix.length - 1; i++){
        LTR += squareMatrix[i][i];
        RTL += squareMatrix[i][extra - i];  
}
let positive = Math.abs(LTR - RTL)
console.log(positive);
