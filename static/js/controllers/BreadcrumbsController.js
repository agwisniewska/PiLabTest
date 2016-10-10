app.controller('BreadcrumbsController', ['$scope', function($scope) { 
   $scope.breadcrumbs = [
    { 
      img: 'img/the-book-of-trees.jpg',
      title: 'Set: Accounts', 
      content: 'Type: Deposit Age: From 29 years to 80...',


    }, 
    { 
      img: 'img/the-book-of-trees.jpg',
      title: 'Set: Call', 
      content: 'Type: Bussines Number: 509 876 345',
      
    },
    { 
      img: 'img/the-book-of-trees.jpg',
      title: 'Set: Clients', 
      content: 'Name: John Snow',
    }, 
  ]
}]);