const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countitems (sentence){
    let count = 0;
    const letter = Array.from(sentence);

    letter.forEach(function(value){
        if(vowels.includes(value)){

            count ++;
        }
    })
    return count;
}

console.log(countitems("I love Bangladesh, i live in Dhaka"));