/**
 * Created by atran on 11/5/14.
 */
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
//
//
//var collection = [
//    {name: 'test 1'},
//    {name: 'test 2'},
//    {name: 'test 3'},
//    {name: 'test 4'},
//    {name: 'test 5'}
//]
//
//var result = collection.findIndex(function test(elem) {
//    console.log(elem);
//    return elem.name === 'test 4';
//});
//
//console.log('result: ' + result);
//
