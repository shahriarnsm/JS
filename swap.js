let first = 25;
let second = 50;
console.log(first, second);
// approch : 1 //
temp = first;
first = second;
second = temp;

// approach :2 // Destructuring 
// [first, second] = [second, first]
console.log( first, second );

