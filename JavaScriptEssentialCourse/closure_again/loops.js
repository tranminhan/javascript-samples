/**
 * Created by atran on 11/13/14.
 */
for (var i = 1; i < 5; i++) {
    (function () {
        var e = i;
        setTimeout(function () {
            console.log(e);
        }, e * 100)
    })();
}

for (var i = 8; i < 12; i++) {
    (function (k) {
        setTimeout(function () {
            console.log(k);
        }, k * 100)
    })(i);
}
