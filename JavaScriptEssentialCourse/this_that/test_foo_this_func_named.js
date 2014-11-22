/**
 * Created by atran on 11/23/14.
 */
function foo(num) {
    console.log("foo: " + num);
    foo.count++;
}

foo.count = 0;
var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}

console.log(foo.count);
console.log(JSON.stringify(foo));