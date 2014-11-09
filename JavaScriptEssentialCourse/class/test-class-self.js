/**
 * Created by atran on 11/9/14.
 */
function Person() {
    var self = this;

    self.name = "This is my name";

    self.sayHi = function () {
        console.log("Hello, I'm friendly. " + self.name);
    }

};

var peter = new Person();
peter.sayHi();

console.log(peter.name);
console.log(peter);

function showSomething(callback) {
    callback();
};

showSomething(peter.sayHi);
