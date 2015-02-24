


angular.module('product').factory('ProductService', function(BaseService) {
  var productEvents = {
    quantityChanged: 'product.quantityChanged'
  };

  return {
    events: angular.extend(BaseService.events, productEvents)
  };
});
