var Stack = require('./stack');

var s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);

console.log('====', s1.data);

var insert = function(value){
	if(s1.isempty()){
		s1.push(value)
	}else{
      var pop = s1.pop();
      insert(value);
      s1.push(pop);
	}
}



var recursion =  function(){

	if(!s1.isempty()){
		var pop = s1.pop();
		recursion();
		//console.log(pop)
		//s1.push(pop);
		insert(pop);
	}

}


recursion();
console.log(s1.data);
console.log('seek======', s1.seek());
s1.pop();
console.log('seek======', s1.seek());
s1.pop();
console.log('seek======', s1.seek());
s1.pop();
console.log('seek======', s1.seek());
s1.pop();
console.log('seek======', s1.seek());











