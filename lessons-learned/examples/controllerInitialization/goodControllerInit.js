angular.module('demo').controller('GoodInitController', function($scope) {
  var x;
  var y;
  $scope.total = 0;

  $scope.add = function(num1, num2) {

  };

  $scope.subtract = function(num1, num 2) {

  };

  x = 8;

  $scope.multiply = function() {

  };

  y = 9;
  $scope.$watch('total', function(newTotal, oldTotal) {

  });

  var privateFunction = function() {
    console.log(x + y);
  };

  ...
});
