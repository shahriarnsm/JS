// factirial using for loop
function factorial(number){
    let result = 1;
    for(let i = number ; i >= 1; i--){
        result = result * i;
    }
    return result;
}
 const result = factorial(6);
 console.log(result);


 
/// factorial using while loop
function factiorial1(number1){
    let i = number1;
    output = 1;
    while(i>=1){
        output = output * i;
        i--;
    }
    return output;
}

const num = factiorial1(5);
console.log(num);