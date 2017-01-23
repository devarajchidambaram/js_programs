function FindZeros(n){

	//I dont know how its works
	//But I want trace the algorithm
	count = 0;

	while(n > 0){

		count += Math.floor(n/10);
		n = n/10;
	}

	console.log(count);

}

FindZeros(120);