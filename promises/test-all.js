/**
 * Created by atran on 11/2/14.
 */
var RSVP = require('rsvp');

function toss() {
    var n = Math.floor(Math.random() * 6) + 1;
    return new RSVP.resolve(n);
}

toss().then(function (toss) {
    console.log(toss);
});

function threeDice() {
    var tosses = [];

    function add(x, y) {
        return x + y;
    }

    for (var i = 0; i < 3; i++) {
        tosses.push(toss());
    }

    return RSVP.all(tosses).then(function (results) {
        return results.reduce(add);
    });
}

function logResults(results) {
    console.log("Rolled " + results + " with three dice");
}

function logErrorMessage(error) {
    console.log("Ooops, " + error.message);
}

threeDice()
    .then(logResults)
    .then(null, logErrorMessage);
