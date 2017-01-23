//Implement Queue using Stacks

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


var Queue = function() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.enqueue = enqueue;
    this.dequeue = dequeue;
}

function enqueue(value) {
    if (!this.s1.isfull()) {
        this.s1.push(value);
        return value;
    } else {
        return new Error('Stack overflow');
    }
}

function dequeue() {

    if (this.s1.isempty() && this.s2.isempty()) return new Error('stack underflow Error');

    if (this.s2.isempty()) {

        var length = this.s1.top;

        for (var i = 0; i <= length; i++) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2.pop();
}


var queue = new Queue();

console.log("dequeue =>", queue.dequeue());
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log("dequeue =>", queue.dequeue());
console.log("dequeue =>", queue.dequeue());
console.log("dequeue =>", queue.dequeue());
console.log(queue.enqueue(4));
console.log("dequeue =>", queue.dequeue());
console.log("dequeue =>", queue.dequeue());
