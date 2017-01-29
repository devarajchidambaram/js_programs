var events = require('events');
// var myEmitter = new events.EventEmitter();
// var util = require('util');


// // console.log(util);

// myEmitter.on('user', function(username){
// 	console.log( username + ' is joined in chat room ');
// });


// for (var i = 0; i < 1; i++) {
// 	myEmitter.emit('user', 'devaraj'+i);
// }


// var User = function(user){
// 	this.user = user;
// }

// util.inherits(User, events.EventEmitter);


// var user1 = new User('devaraj');

// user1.on('chat' , function(user){
// 	console.log( user + " available for chat...:P");
// });


// user1.emit("chat", "deva");

// //console.log("events", myEmitter);

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a) => {
	setImmediate(function(){
		 console.log('an event occurred!',a,this);
	})
 
});
myEmitter.emit('event', 'A');
