angular.module('demo').controller('GoodInitController', function($scope) {
  var x;
  var y;

  var init = function() {
    // initialize global variables
    x = 8;
    y = 9;

    $scope.total = 0;

    // declare watch expressions
    $scope.$watch('total', function(newTotal, oldTotal) {

    });
  };

  var privateFunction = function() {
    console.log(x + y);
  };

  $scope.add = function(num1, num2) {

  };

  $scope.subtract = function(num1, num 2) {

  };

  $scope.multiply = function() {

  };

  init();
});
