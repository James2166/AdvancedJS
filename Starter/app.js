// A function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

//A function expression, they're different
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// Using an Immediately Invoked Function Expression or IIFE
var greeting = function(name) {

    return 'Hello ' + name;

}('John');

console.log(greeting);

var firstname = 'John';

(function(name) {

    var greeting = 'Inside IIFE: Hello'
    console.log(greeting + " " + name);

}(firstname)); // IIFE






