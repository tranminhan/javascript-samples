/**
 * Created by atran on 11/15/14.
 */
var http = require('http');

var api_key = 'b48a2571d76d9e04b6066330eccf55ae';
var options = {
    host: 'api.flickr.com',
    path: 'services/rest/?'
        + 'method=flickr.people.getPublicPhotos&'
        + 'user_id=32951986%40N05&'
        + 'extras=url_q&format=json&nojsoncallback=1&'
        + 'api_key=' + api_key
};

//var api_key = 'b48a2571d76d9e04b6066330eccf55ae';
//var method = 'GET';
//var url = 'https://api.flickr.com/services/rest/?'
//        + 'method=flickr.people.getPublicPhotos&'
//        + 'user_id=32951986%40N05&'
//        + 'extras=url_q&format=json&nojsoncallback=1'
//        + 'api_key=' + api_key
//    ;

http.get(options,
    function (error, resp, body) {
        //console.log(error);
        console.log(body);

    }
);