angular.module('shared', []);

angular.module('main', ['user', 'product', 'shared'])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['main']);
});
