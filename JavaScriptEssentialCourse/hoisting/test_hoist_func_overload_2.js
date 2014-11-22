/**
 * Created by atran on 11/13/14.
 */
foo();

var a = true;
if (a) {
    function foo() {
        console.log(1);
    }
}
else {
    function foo() {
        console.log(2);
    }
}
