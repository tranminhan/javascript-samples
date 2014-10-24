parking.directive("alert", function(){
    return {
        template: "<div class='alert'>" +
        "<span class='alert-topic'>" +
          "Something went wrong!" +
        "</span>" +
        "<span class='alert-description'>" +
          "You must inform the plate and the color of the car!" +
        "</span>" +
      "</div>"
    };
});

parking.directive("templateUrlAlert", function(){
    return {
        templateUrl: "alert.html"
    };
});