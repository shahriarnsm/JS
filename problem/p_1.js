function getRandomNum (min, max){
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

console.log(getRandomNum(1, 6));