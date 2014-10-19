// this does not work
function makeAdder(context) {
    return (function(context) {
        return function(y) {
            return context.x + y;
        }        
    })(context);
}

var context = { x: 5 }
var add5 = makeAdder(context);

context.x = 10;
var add10 = makeAdder(context);

console.log(add5(10));
console.log(add10(10));
console.log(add10(100));
console.log(add5(100));

console.log(add5 === add10);
console.log(add5 == add10);

console.log(add5(123));
console.log(add10(123));
