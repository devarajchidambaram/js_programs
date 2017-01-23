


function recursion(a){

	if(a > 0 ){
		console.log("=====================", a);
		recursion(a-1);
	   console.log("=====================", a);
	   recursion(a-1);

	}

}

recursion(3, 0);