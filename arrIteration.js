const num = [45, 4, 12, 65, 35, 78, 50];
 function myFunction(total, value){
    return total + value;
 }

 // array method
 const newNum = num.reduce(myFunction, 0);
 console.log(newNum);