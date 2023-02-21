let result= '';
let val = 0;
let count =5;
let v ='';
for (i = 0; i < 5; i++){
    val++;
    count--;
    for(j = 0; j < 5; j++){
        if (j >= count){
            result = result+val
        } else {
            result = result +'.';
        } 
    } 
    console.log(result);
    result='';
}
