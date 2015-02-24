angular.module('demo').controller('ExampleController', function($rootScope, $scope, ExampleService) {
  var eventListener;

  var init = function() {

    $rootScope.$broadcast('eventName', arg1, arg2);

    var eventListener = $rootScope.$on('eventName', function(event, arg1, arg2) {
      // handle event
    });

    $scope.$on('$destroy', function() {
      eventListener();
    });

    loadData();
  };

  var eventHandler = function(event, arg1, arg2) {

  };

  var loadData = function() {
    var data = [
      // Test Data
    ];

    $rootScope.$emit(ExampleService.events.dataLoaded, data);
  };

  init();
});
