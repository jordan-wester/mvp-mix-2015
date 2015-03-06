angular
  .module('sharedModule', ['ngResource', 'ui.router', 'wordCloudModule'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Configure Html5 url mode
    $locationProvider.html5Mode(true);

    // Set fallback route
    $urlRouterProvider.otherwise('/notFound');

    // Configure the shared routes
    $stateProvider.state({
      name: 'notFound',
      url: '/notFound',
      templateUrl: 'shared/notFound.html'
    }).state({
      name: 'accessDenied',
      url: '/accessDenied',
      templateUrl: 'shared/accessDenied.html'
    });
  });
