
//Check for balanced parentheses in an expression
//Given an expression string exp, write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp. For example, the program should print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

var Stack = function() {
    this.MAX_SIZE = 5;
    this.top = -1;
    this.data = [];
    this.push = push;
    this.pop = pop;
    this.isfull = isfull;
    this.isempty = isempty;
    this.seek = seek;
};

function push(value) {
    if (!this.isfull()) {
        this.data.push(value);
        this.top++;
        return value;
    } else {
        return new Error('stack overflow');
    }

}

function pop() {
    if (!this.isempty()) {
    	this.data.pop();
        this.top--;
        return true;
    } else {
        return new Error('stack underflow');
    }
}

function isempty() {
    if (this.top < 0) {
        return true;
    }

    return false;
}

function isfull() {
    if (this.top === this.MAX_SIZE - 1) {
        return true;
    }
    return false;
}

function seek() {
    if (!this.isempty()) {
        return this.data[this.top];
    } else {
        return new Error('stack underflow');
    }
}



var input = "[({}){()}{}]";

function parseChar(input) {
	
	var stack = new Stack();

	for (var i = 0; i < input.length; i++) {
	

		if(input.charAt(i) === '{' || input.charAt(i) === "[" || input.charAt(i) === "(" ){
			stack.push(input.charAt(i));
			console.log('push ==', input.charAt(i), "stack data", stack.data); 
		}else{
			if((input.charAt(i)  === "}" && stack.seek() === "{") || (input.charAt(i)  === "]" && stack.seek() === "[") || (input.charAt(i)  === ")" && stack.seek() === "(") ) {
				stack.pop();
			}else{
				return false;
			}
		}
	}

	return true;

}

console.log(parseChar(input));
console.log(parseChar("[()]{}{[()()]()}"));
console.log(parseChar("[(])"));
