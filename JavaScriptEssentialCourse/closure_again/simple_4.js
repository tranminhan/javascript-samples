/**
 * Created by atran on 11/13/14.
 */
var fn;

function foo() {
    var a = 3;

    function bar() {
        console.log(a);
    }

    fn = bar;
}

function baz() {
    fn();
}

foo();
baz();