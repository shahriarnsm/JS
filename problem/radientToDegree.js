function radientToDegree(radient){

    let pi = Math.PI;
    if (isNaN(radient)){
        return "plz enter a valid number";        
    }
    else{
        result = radient* (180/pi);
        return result;
    }
}
const radientcal = radientToDegree(1);
console.log(radientcal);