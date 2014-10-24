parking.controller("parkingCtrl", function($scope){
    $scope.cars = [
        {plate: '6MBV006', entrance: new Date(), color: 'Red'},
        {plate: '5BBM299', entrance: new Date(), color: 'Green'},
        {plate: '5AOJ230', entrance: new Date(), color: 'Blue'}
    ];

    $scope.alertTopic = "Hurray, something went wrong baby";
    $scope.alertMessage = "Ooops, what did I do?"

    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

    $scope.park = function(car) 
    {
        car.entrance = new Date();
        $scope.cars.push(angular.copy(car));
        delete $scope.car;
    };

    $scope.remove = function(car) 
    {
        for (var i = 0; i < $scope.cars.length; i++) 
        {
            if ($scope.cars[i].plate == car.plate)
            {
                $scope.cars.splice(i, 1);
            }
        }                   
    };
});