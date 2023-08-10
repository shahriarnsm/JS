const cars = ["A", "B", "C", "D", "E"];

// const n = 5;

for(let i = 1; i <= cars.length; i++){
    // console.log(i);
}

// console.log('I am Done');

// program to display the sum of natural numbers
let sum = 0;
const n = 100;

for(let i = 1; i <= 100; i ++){
    sum += i;
}
// console.log(sum);


// Calculate the sum of all the numbers in the following array

var numbersArray = [1,13,22,123,49];

var sum1 = 0;
for (let i = 0; i < numbersArray.length; i ++){
    sum1 += numbersArray[i];
}
// console.log(`The sum is ${sum1}`);


// to Loop Through an Array to Check for Odd and Even Numbers

let numbers =  [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var oddNumbers = [];
var evenNumbers = [];

for (var i = 0 ; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }else{
        oddNumbers.push(numbers[i]);
    }
}
console.log(`These are the even numbers ${evenNumbers}`);
console.log(`These are the odd numbers ${oddNumbers}`);


// for in
const person = {fname:"John", lname:"Doe", age:25};

for (let x in person){
    // console.log(person[x]);
}


// forin in array
const arr = [45, 4, 9, 16, 25];
for(let nums in arr){
    // console.log(arr[nums]);
    
}


// for of forLoop
let a = "Bangladesh"
for(let x of a){
    // console.log(x);
}


//while loop

let j = 0;
let text = "";
while (j < 10) {
    text += "The number is \n" + j;
    j++;
}
// console.log(text);