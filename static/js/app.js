var app = angular.module('testApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
       .when('/breadcrumbs', {
            templateUrl : 'partials/breadcrumbs.html',
            controller  : 'BreadcrumbsController'
        })
      .otherwise ({redirectTo: '/'});
})
