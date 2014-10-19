// this does not work
function makeAdder(context) {
    return (function(context) {
        return function(y) {
            return context.x + y;
        }        
    })(context);
}

var context_1 = { x: 5 }
var context_2 = context_1;

var add5 = makeAdder(context_1);
var add10 = makeAdder(context_2);

console.log(add5(10));
console.log(add10(10));
console.log(add10(100));
console.log(add5(100));

context_2.x = 100;

console.log(add5(123));
console.log(add10(123));
