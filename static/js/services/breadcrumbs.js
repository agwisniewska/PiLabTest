app.factory('tiles', ['$http', function ($http) {
    return $http.get('http://127.0.0.1:8080/api/breadcrumbs')
        .success(function (data) {
            return data;

        })
        .error(function (err) {
            return err;
        });
}]);