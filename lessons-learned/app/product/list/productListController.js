angular.module('product').controller('ProductListController', function($scope) {
  var init = function() {
    $scope.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'The 1st product'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'The 2nd product'
      }
    ]
  };

  init();
});
