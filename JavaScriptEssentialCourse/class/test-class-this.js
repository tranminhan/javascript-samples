/**
 * Created by atran on 11/9/14.
 */
function Person() {

    this.name = "This is my name";

    this.sayHi = function () {
        console.log("Hello, I'm friendly. " + this.name);
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