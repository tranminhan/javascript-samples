/**
 * Created by atran on 11/12/14.
 */
foo();

console.log(foo);

var foo = 1;
console.log(foo);

function foo() {
    console.log("function foo");
}

console.log(foo);

var foo = function() {
    console.log("function expression foo");
}

console.log(foo);