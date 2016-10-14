app.controller('BreadcrumbsController', ['$scope', '$routeParams', '$window', 'tiles', function ($scope, $routeParams, $window, tiles) {
    $scope.activetile = $routeParams.tile;
    $scope.counter = counter;

    tiles.success(function (data) {
        $scope.breadcrumbs = data;
    });

    $scope.increaseCounter = function () {
        counter++
        $scope.counter = counter
    }
    $scope.openLink = function () {
        $window.open("http://www.google.com/", "_blank")
    }

    $scope.writeinConsole = function () {
        console.log('Success')
    }

    $scope.addnewItem = function () {
        console.log('Added')
    }

    $scope.getUrl = function () {
        $scope.activetile = $routeParams.tile
    }


}]);