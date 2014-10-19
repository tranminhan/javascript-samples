function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(10));
console.log(add10(100));

var value = "test string ";
var addX = makeAdder(value);

value += "1 ";
var addY = makeAdder(value);
console.log(addX(123));
console.log(addY(456));
console.log(addX(456));