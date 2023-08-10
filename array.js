var numbers = [11, 21, 45, 12, 14, 10, 56];

numbers[0]= 77;
// console.log(numbers)

// find index of an elements
var positionIndex= numbers.indexOf(14);
console.log(positionIndex);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b - a
});
// console.log(points.length- 1);


const points_1 = [40, 100, 1, 5, 25, 10];
points_1


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a,b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x<y){
        return - 1;
    }
    if(x>y){
        return 1;
    }
    return 0
  })
  console.log(cars);
  