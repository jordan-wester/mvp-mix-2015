angular.module('sharedModule').factory('baseService', function($resource) {
  var sampleBaseMethod = function(test) {
    var x = test;

    return x;
  };

  return {
    sampleBaseMethod: sampleBaseMethod
  };
});
