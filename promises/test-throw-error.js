/**
 * Created by atran on 11/2/14.
 */
var RSVP = require('rsvp');

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}

var tossTable = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
};

function toss() {
    return new RSVP.Promise(function (fulfill, reject) {
        var n = dieToss();
        fulfill(n);
    })
};

function logAndTossAgain(toss) {
    var tossToWord = tossTable[toss];
    console.log("Tossed a " + tossToWord.toUpperCase() + ".");

}

function logError(error) {
    console.log("Ooops, " + error.message)
}

toss()
    .then(logAndTossAgain)
    .then(logAndTossAgain)
    .then(logAndTossAgain)
    .then(null, logError);
