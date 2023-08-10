// inch to feet
function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}
// console.log(`I am ${inchToFeet(60)} feet`);


// miles to kilometers

function milesToKilometers(miles){
    const kilometers = miles * 1.609;
    return kilometers;
}
var miles = 50;
// var kilometers = milesToKilometers(miles);
console.log(miles,'miles =', milesToKilometers(miles),'Kilometers');

//Taka to Doller
function takaToDoller(taka){
    const doller = taka/100;
    return doller;    
}
const taka = 540;

// console.log(`${taka}tk = ${takaToDoller(taka)}USD`);
