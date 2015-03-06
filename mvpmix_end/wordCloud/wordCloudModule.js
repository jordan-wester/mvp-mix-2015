angular.module('wordCloudModule', ['ui.router', 'angular-jqcloud'])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'wordCloud',
      url: '/wordCloud',
      controller: 'WordCloudController',
      templateUrl: 'wordCloud/list/wordCloud.html'
    });
  });
