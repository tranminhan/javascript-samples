/**
 * Created by atran on 11/15/14.
 */
foo();

var a = false;
if (a) {
    function foo() {
        console.log(1);
    }
}
else {
    function foo() {
        console.log(123);
    }
}