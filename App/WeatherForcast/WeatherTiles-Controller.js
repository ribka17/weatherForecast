app.controller('WeatherTiles', function ($scope) {
    $scope.city = "Auckland";

    $scope.setTiles = function () {
        getWeather($scope.city);
    }
});

app.directive('weatherTiles', function () {
    return {
        templateUrl: 'App/WeatherForcast/WeatherTile.html',
        link: function (scope, element, attr) {

            getWeather("auckland");
        }
    };
});

