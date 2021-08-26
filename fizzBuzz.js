// Divisable by 3 => Fizz
// Divisable by 5 => Buzz
// Divisable by 3 and 5 => FizzBuzz
// Not devisable by 3 or 5 => input
// Not a number => "Not a number"
'use strict'

let input = +prompt("Enter a Number:", 1);
console.log(fizzBuzz(input));

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return "Not a number";
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return "FizzBuzz";
    
    if (input % 3 === 0) 
        return "Fizz";

    if (input % 5 == 0)
        return "Buzz";

    return input;
}
