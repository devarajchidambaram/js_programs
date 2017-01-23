function findGCD(num1, num2) {

    var gcd = 1,
        i = 2;

    if (!num1 || !num2) return 'wrong input';
    if (num1 < 0) num1 = -num1;
    if (num2 < 0) num2 = -num2;


    while (i < num1 && i < num2) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }

        i++;
    }

    //console.log(gcd);
    return gcd;

}


console.log(findGCD(-48, 24000));
console.log(findGCD(0, 0));


var assert = require('assert');
assert(findGCD(48, 24));
