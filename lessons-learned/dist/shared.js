angular.module('shared', []);

angular.module('shared').factory('EventService', ['$rootScope', function($rootScope) {
  
}]);

angular.module('main', ['ui.router', 'user', 'product', 'shared'])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['main']);
});
