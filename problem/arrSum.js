function oddnumber(number){
    var oddNumbers = [];
    var oddLength = number.length;
    for (let i = 0; i < oddLength ; i++){
        if(number[i] % 2 !== 0){
            oddNumbers.push(number[i]);
        }
    }
    console.log(`Odds numbers are: ${oddNumbers}`);
    return oddNumbers;
}

function arrSum(sumNumber){
    var sum = 0;
    var totalLength = sumNumber.length;
    for(let i = 0; i < totalLength; i++){
        sum = sum + sumNumber[i];        
    }
    console.log(`Sum of the odd numbers is: ${sum}`);
    return sum;
}


const someNumber = [1,5,6,85,4,65,45,46];
const odds = oddnumber(someNumber);
const result = arrSum (odds);




