function wordReverse(str){
    const word = str.split(' ');
    result = [];
    for (let i = word.length - 1; i >= 0; i --){
        element = word[i];
        result.push(element)
        
    }
    // console.log(result);
    const reversed = result.join(' ');
    return reversed;

}


const myString = 'I love Bangladesh but I want to go USA and will do some tech job';
console.log(wordReverse(myString));