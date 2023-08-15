function sum(i){
    if( i === 1){
        return 1;
    }
    return i + sum(i - 1);
}

const result = sum(10);
console.log(result);






function factorial(i){
    if (i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
const result1 = factorial(5);
console.log(result1);