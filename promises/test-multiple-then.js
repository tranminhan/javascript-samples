/**
 * Created by atran on 11/2/14.
 */
var RSVP = require('rsvp');

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Starting the program");
function tossASix() {
    return new RSVP.Promise(function(fulfill, reject) {
        var n = dieToss();

        if (n === 6) {
            fulfill(n);
        }
        else {
            reject(n);
        }
    });
};

function tossAndTryAgain(toss) {
    console.log("Tossed a " + toss + ", trying one more time");
    return tossASix();
}

function logSuccess(toss) {
    console.log("Success, tossed a " + toss);
}

function logFailure(toss) {
    console.log("Tossed a " + toss + " .Too bad!");
}

tossASix()
    .then(null, tossAndTryAgain)
    .then(null, tossAndTryAgain)
    .then(logSuccess, logFailure);
