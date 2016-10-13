var app = angular.module('testApp', ['ngRoute', 'ngSanitize']);

var counter = 3;

app.config(function ($routeProvider) {
    $routeProvider
       .when('/breadcrumbs/:tile', {
            templateUrl : 'partials/breadcrumbs.html',
            controller  : 'BreadcrumbsController'
        })
    

      .otherwise ({redirectTo: '/breadcrumbs/accounts'});
})
