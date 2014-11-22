/**
 * Created by atran on 11/13/14.
 */
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}

var baz = foo();
console.log(baz);
baz();