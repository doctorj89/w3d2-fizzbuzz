var avow = require('avow');
var output;

function FizzBuzz(n) {
// output is empty string
output = '';

    // Loops 'n' times
    for (var i = 1; i <= n; i++) {
        if (i % 5 !== 0  && i % 3 !== 0) {
            // i is divisible by neither 3 nor 5
            output += '.';
        } else  if (i % 3 === 0 && i % 5 !== 0) {
            // i is divisible by 3 but not 5
            output += 'Fizz';
        } else if (i % 3 !== 0 && i % 5 === 0) {
            // i is divisible by 5 but not 3
            output += 'Buzz';
        } else if (i % 3 === 0 && i % 5 === 0) {
            // i is divisible by both 3 and 5
            output += 'FizzBuzz';
        }

    }

    // Checks to see if input is a string
    if (typeof n === "string") {
        output = 'You must enter a number';
    }

    return output;  

}

avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));