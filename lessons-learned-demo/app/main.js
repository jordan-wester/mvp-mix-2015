angular.module('main', ['ui.router', 'user', 'product', 'shared'])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['main']);
});
