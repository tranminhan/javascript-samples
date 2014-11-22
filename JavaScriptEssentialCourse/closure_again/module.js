/**
 * Created by atran on 11/13/14.
 */
function foo() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another);
    }

    function personalizeMessage(message) {
        something = message;
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother,
        personalizeMessage: personalizeMessage
    }
}

var foo1 = foo();
var foo2 = foo();


foo1.doSomething();
foo2.doSomething();

foo1.personalizeMessage("hack me baby");
foo2.personalizeMessage("I'm boring, really");

foo1.doSomething();
foo2.doSomething();

console.log(foo1);
console.log(foo2);

console.log(foo1 == foo2);
console.log(foo1 === foo2);

