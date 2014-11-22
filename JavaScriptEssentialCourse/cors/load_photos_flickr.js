/**
 * Created by atran on 11/15/14.
 */
function loadPhotos() {
    // secret 3fe3d415bd4efd58
    // key b48a2571d76d9e04b6066330eccf55ae
    var api_key = 'b48a2571d76d9e04b6066330eccf55ae';
    var method = 'GET';
    var url = 'https://api.flickr.com/services/rest/?'
        + 'method=flickr.people.getPublicPhotos&'
        + 'user_id=32951986%40N05&'
        + 'extras=url_q&format=json&nojsoncallback=1&'
        + 'api_key=' + api_key
        ;

    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) {
        console.log("browser does not support CORS");
        return;
    }

    xhr.open();
    xhr.onerror = function() {
        console.log('There was an error');
    };

    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (data.stat == 'ok') {
            console.log("response data: " + data);
        }
    }

    xhr.send();
};

loadPhotos();