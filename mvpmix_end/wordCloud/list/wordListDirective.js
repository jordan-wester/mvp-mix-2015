angular.module('wordCloudModule').directive('wordList', function() {
  return {
    restrict: 'E',
    templateUrl: '/wordCloud/list/wordListTemplate.html',
    scope: {
      topics: '=topics'
    }
  };
});
