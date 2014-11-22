/**
 * Created by atran on 11/22/14.
 */

// must run this within a browser console
function _(id) {
    this.someProperty = "stuff";
    return this;
}

var myObject = _("1");
console.log(this.someProperty);
console.log(myObject.someProperty);
console.log(this);
console.log(window.someProperty);


var myObject2 = new _("1");
console.log(myObject2.someProperty);
//console.log(window.someProperty);