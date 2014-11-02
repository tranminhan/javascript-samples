var RSVP = require('rsvp');

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Starting the program");

var promise = new RSVP.Promise(function (fulfill, reject) {
    var n = dieToss();

    if (n === 6) {
        fulfill(n);
    }
    else {
        reject(n);
    }

    console.log("End of server processing");
});

promise.then(
    function resolve(toss) {
        console.log("Yeahhh, threw a "  + toss + ".");
    },
    function reject(toss) {
        console.log("Oh, no threw a " + toss);
    }
);
console.log("End of the program");