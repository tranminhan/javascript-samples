/**
 * Created by atran on 11/13/14.
 */
foo();

function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    baz(bar);
}

function baz(fn) {
    a = 10;
    fn();
}