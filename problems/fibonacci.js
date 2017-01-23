function Fibonacci(n){

	var x =0, y=1, temp;
	var fib = [];

	for (var i = 0; i < n; i++) {
		// console.log(x);
		fib.push(x);
		temp = x;
		x = x + y;
		y = temp;
	}

	return fib;

}


var assert = require('assert');

assert(Fibonacci(null),  'null error');
assert(Fibonacci(0),  '0 not accepting');
assert(Fibonacci(),  'undefined value not accepting');
assert.deepEqual(Fibonacci(10) , [0,1,1,2,3,5,8,13,21,34]);
Fibonacci(10000);