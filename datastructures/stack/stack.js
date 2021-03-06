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
         var popValue = this.data.pop();
        this.top--;
        return popValue;
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


function sort(){
    
}


module.exports = Stack;

/**
var stack = new Stack();

console.log(stack.push('{'));
console.log(stack.push('}'));
console.log(stack.push('{'));
console.log(stack.push("}"));
console.log(stack.push("{"));

console.log

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
**/

// console.log(stack.seek());
