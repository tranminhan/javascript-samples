/**
 * Created by atran on 11/9/14.
 */
var collection = [
    {name: 'test 1'},
    {name: 'test 2'},
    {name: 'test 3'},
    {name: 'test 4'},
]

for (var a in collection) {
    console.log(collection[a]);
}


collection.forEach(function (element, index) {
    console.log('element: ' + element);
    console.log(element);
    console.log('index: ' + index);

    if (index == 1) {
        return;
    }
});

