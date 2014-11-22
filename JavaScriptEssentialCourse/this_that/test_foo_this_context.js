/**
 * Created by atran on 11/23/14.
 */
function foo(num) {
    console.log("foo: " + num);
    data.count++;
}

var data = {
    count: 0
};
var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}

console.log(data.count);
