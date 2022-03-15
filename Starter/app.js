var person = {
    firstname: 'John',
    lastname: 'Doe', 
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'em', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}).apply(person, ['en', 'es']);

// Function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying (souds tasty, but spicy)
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));