/**
 * Created by atran on 11/23/14.
 */
function foo() {
    this.a = 2;
    bar();
}

function bar() {
    console.log(this.a);
}

foo();
console.log(this);
console.log(this.a);
