/**
 * Created by atran on 11/22/14.
 */
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "An Tran"
}

var kyle = {
    name: "Kyle"
}

console.log(identify.call(me));
console.log(identify.call(kyle));

speak.call(me);
speak.call(kyle);