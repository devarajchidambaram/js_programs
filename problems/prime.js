function isPrime(input) {

    //Invalid inputs
    if (!input) return new Error('invalid input');

    //Negative number
    if (input < 0) input = -input;

    for (var i = 2; i < input / 2; i++) {
        if (input % i == 0) {
            return false;
        }
    }

    return true;
}



var assert = require('assert');
assert(isPrime(17), '17 not primary number');
assert.equal(isPrime(null), 'Error: invalid input', 'null validation failed');
assert.ok(isPrime(1), '1 is not handled');
assert.equal(isPrime(0), 'Error: invalid input', '0 validation failed');
console.log(isPrime(-12));
