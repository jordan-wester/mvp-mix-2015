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
