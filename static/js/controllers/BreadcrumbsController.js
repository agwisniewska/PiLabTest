app.controller('BreadcrumbsController', ['$scope', '$routeParams','$window', function($scope, $routeParams, $window) { 
   $scope.activetile = $routeParams.tile;
   $scope.counter = counter;

   
    $scope.increaseCounter = function() {
      counter++
      $scope.counter = counter
    }
    $scope.openLink = function() {
      $window.open("http://www.google.com/", "_blank")
    }

    $scope.writeinConsole = function() {
      console.log('Success')
    }

    $scope.addnewItem = function() {
        console.log('Added')
    }

    $scope.getUrl = function() {
      $scope.activetile = $routeParams.tile
    }
    

   $scope.breadcrumbs = [
    { 
      name: 'accounts',
      class: 'a',
      icon: 'briefcase',
      title: 'Account',
      titletext: 'Set: Accounts', 
      content: 'Type: Deposit',
      additional: 'Age: From 29 years to 80...',
      href: '/#/breadcrumbs/accounts',
      function: $scope.writeinConsole,
      template: 'You are on accounts page. Check console!',

    }, 
    { 
      name: 'calls',
      class: 'b',
      icon: 'phone',
      title: 'Calls',
      titletext: 'Set: Call', 
      content: 'Type: Bussines',
      additional: 'Number: 509 876 345',
      href: '/#/breadcrumbs/calls',
      function: $scope.openLink,
      template: 'You are on calls page',
    },
    { 
      name: 'clients',
      class: 'c',
      icon: 'user',
      title: 'Clients',
      titletext: 'Set: Clients', 
      content: 'Name: John Snow',
      additional: '',
      href: '/#/breadcrumbs/clients',
      function: $scope.addnewItem,
      template: 'You are on clients page',
    }, 
     { 
      name: 'details',
      class: 'b',
      icon: 'info',
      title: 'Details',
      titletext: 'Set: Details', 
      content: 'Details: Add new collection',
      additional: '',
      href: '/#/breadcrumbs/details',
      function: $scope.getUrl,
      template: 'You are on details page',
    },  
    { 
      name: 'steps',
      class: 'a',
      icon: 'step-forward',
      title: 'Steps',
      titletext: 'Set: Steps', 
      content: 'Info: New steps',
      additional: '',
      href: '/#/breadcrumbs/steps',
      function: $scope.increaseCounter,
      template: 'You are on steps page',
    }, 
  ]
}]);