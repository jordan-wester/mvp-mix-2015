angular.module('shared', []);


angular.module('shared').factory('EventService', function($rootScope, $timeout, $log) {
  var activeEventListeners = {};

  var registerListener = function(eventName, eventHandler, scope) {
    var listener = $rootScope.$on(eventName, eventHandler);

    if (!activeEventListeners[scope.$id]) {
      activeEventListeners[scope.$id] = [];
      scope.$on('$destroy', cleanupEventListeners);
    }

    activeEventListeners[scope.$id].push(listener);
  };

  var throwEvent = function(eventName) {
    $rootScope.$emit.apply($rootScope, arguments);
  };

  var throwEventOnLoad = function(eventName) {
    var args = arguments;
    var maxAttemptLimit = 50;

    $timeout(function() {
      if ($rootScope.$$listeners[eventName]) {
        // construct arguments to pass to $emit so that the function signature remains the same
        $rootScope.$emit.apply($rootScope, args);
      }
      else
        $log.debug(eventName + ' event does not have a listener defined - canceling...');
      }
    });
  };

  var cleanupEventListeners = function(event) {
    angular.forEach(activeEventListeners[event.targetScope.$id], function(listener) {
      $log.info('Cleaning up event listener on scope: ' + event.targetScope.$id);
      listener();
    });

    delete activeEventListeners[event.targetScope.$id];
  };

  return {
    registerListener: registerListener,
    throwEvent: throwEvent,
    throwEventOnLoad: throwEventOnLoad
  };
});

angular.module('main', ['ui.router', 'user', 'product', 'shared'])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['main']);
});
