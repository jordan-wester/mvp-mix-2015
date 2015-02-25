angular.module('product', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('productList', {
        url: '/products',
        controller: 'ProductListController',
        templateUrl: 'app/product/list/productList.html'
      })
  }]);

angular.module('product').controller('ProductListController', ['$scope', function($scope) {
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
}]);

angular.module('product').directive('mvpProductList', function() {
  return {
    restrict: 'E',
    controller: 'ProductListController',

    scope: {
      products: '='
    },
    link: function(scope, elem, attr) {
      scope.$watch('products', function(newProducts, prevProducts) {
        if (newProducts !== prevProducts) {
          // Take appropriate action
          // ex. Recalculate sub total, taxes, shipping costs, etc.
        }
      });
    }


  }
});

