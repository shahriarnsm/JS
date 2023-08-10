function reverseString(text){
    reversed = '';
    for( let i = text.length - 1; i >= 0 ; i --){
        const element = text[i];
        reversed += element;
    }
    return reversed;
}

const myString = 'I Love Bangladesh';
const reversedString = reverseString(myString);
console.log(reversedString);