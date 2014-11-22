/**
 * Created by atran on 11/23/14.
 */
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();