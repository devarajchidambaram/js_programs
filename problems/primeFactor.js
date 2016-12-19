function primeFactor(num){

   let divisor = 2;
   let factors = [];

	while(num > 2){
		 if(num  % divisor === 0){
		 	num = num / divisor;
		 	factors.push(divisor);
		 }else{
		 	divisor++;
		 }
	}

	console.log(factors);
	return factors;
}


const assert = require('assert');
assert.deepEqual(primeFactor(26),  [2,13],  'error' )
assert.deepEqual(primeFactor(36), [2,2,3,3], '');
assert(primeFactor(a))