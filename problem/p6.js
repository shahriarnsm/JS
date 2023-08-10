// return the duplicates num..............
const num = [1, 5, 4, 5, 4, 7, 20, 45, 7, 8, 63];

const duplicates = num.filter(function(value, index, array){
    return array.indexOf(value) !== index;
});

console.log(duplicates);