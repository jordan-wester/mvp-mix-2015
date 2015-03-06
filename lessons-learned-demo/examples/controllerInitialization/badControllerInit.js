angular.module('demo').controller('GoodInitController', function($scope) {
  $scope.initBadController = function() {
    // Could get called multiple times, depending on how the HTML is structured
  };
});
