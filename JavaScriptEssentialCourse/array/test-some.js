/**
 * Created by atran on 11/5/14.
 */
var collection = [
    {name: 'test 1'},
    {name: 'test 2'},
    {name: 'test 3'}
]

var result = collection.some(function test(elem) {
    console.log(elem);
    return elem.name === 'test 2';
});

function check(value) {
    var result = collection.some(function test(elem) {
        return elem.name === value;
    });
    return result;
}

console.log(check('test 1'));
console.log(check('test 2'));
console.log(check('test 3'));