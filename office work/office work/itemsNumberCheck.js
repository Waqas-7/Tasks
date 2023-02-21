Products = ['eggs', 'milk', 'cheese'];
productPrices = [2.89, 3.29, 5.79];
productSold = ['eggs', 'eggs', 'cheese', 'milk']
soldPrice = [2.89, 2.99, 5.97, 3.29];
let count = 0;
for (i = 0; i < Products.length; i++){
    for (j = 0; j < productSold.length; j++){
        if (Products[i] === productSold[j]){
            if(productPrices[i] != soldPrice[j]){
                count++;
            }
        }
    }
}
console.log(count);