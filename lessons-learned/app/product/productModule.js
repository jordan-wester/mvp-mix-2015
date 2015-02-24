angular.module('product', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('productList', {
        url: '/products',
        controller: 'ProductListController',
        templateUrl: 'app/product/list/productList.html'
      })
  });
