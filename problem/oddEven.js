function oddEven(number){
    const remainder = number % 2; 
    if (remainder == 0){
        console.log( number, ' is an Even number');
        
    }
    else{
        console.log(number, 'is a odd number');
    }
}
//  const myNumber = 13;
oddEven(50);