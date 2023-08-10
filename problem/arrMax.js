function maxInArray (number){
    let largest = number[0];
    for(let i = 0; i < number.length; i ++){
        const elements = number[i];
        if(elements > largest){
            largest = elements;
        }
    }
    return largest;
}

const heights = [150, 120, 140, 160, 144, 153, 168, 152];
const tallest = maxInArray(heights);
console.log(tallest);