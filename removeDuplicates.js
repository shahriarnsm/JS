const arrayWithDuplicates = [3, 6, 2, 5, 8, 2, 6, 4, 9, 5, 1, 8, 3, 4, 9, 7, 1, 7];

function removeDuplicates(numbers){
    const unique = [];
    for(let i = 0; i < numbers.length; i ++){
        const number = numbers[i];
        if(unique.includes(number) === false){
            unique.push(number);
        }
    }
    return unique;
}

const remove = removeDuplicates(arrayWithDuplicates);
console.log(remove);