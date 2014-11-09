/**
 * Created by atran on 11/5/14.
 */
var collection = [{name: 'test 1'}, {name: 'test 2'}]

var result = collection.every(function test(elem){
    console.log(elem);
    return elem.name === 'test 4';
});

console.log('result: ' + result);
