const arr = [-4,3,-9,0,4,1];
let positiveNubmers = 0;
let negativeNumbers = 0;
let zero = 0;
for(i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        positiveNubmers++;
    } else if (arr[i] < 0){
        negativeNumbers++;
    } else {
        zero++;
    }
} 
console.log(`proportion of positive values : ${positiveNubmers / arr.length} 
proportion of negative values : ${negativeNumbers / arr.length}
proportion of zero : ${zero / arr.length}`);

