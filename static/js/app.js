var app = angular.module('testApp', ['ngRoute', 'ngSanitize']);

var counter = 3;
localStorage.setItem("counter", counter);

app.config(function ($routeProvider) {
    $routeProvider
       .when('/breadcrumbs/:tile', {
            templateUrl : 'partials/breadcrumbs.html',
            controller  : 'BreadcrumbsController'
        })
    

      .otherwise ({redirectTo: '/'});
})
