/**
 * Created by atran on 11/13/14.
 */
var foo = (function(id) {

    function change() {
        publicAPI.identify = identify_2;
    }

    function identify_1() {
        console.log(id);
    }

    function identify_2() {
        console.log(id.toUpperCase());
    }

    var publicAPI = {
        identify: identify_1,
        change: change
    };

    return publicAPI;
})("foo module");

foo.identify();
foo.change();
foo.identify();