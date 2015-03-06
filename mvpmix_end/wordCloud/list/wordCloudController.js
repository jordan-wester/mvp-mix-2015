angular.module('wordCloudModule').controller('WordCloudController', function($scope, $state) {
  var init = function() {
    $scope.newTopic = '';
    $scope.topics = [];

    getDefaultTopics();
  };

  $scope.addTopic = function() {
    if ($scope.newTopic !== undefined && $scope.newTopic !== '') {
      var existingItem = _.findWhere($scope.topics, {
        'text': $scope.newTopic
      });

      if (existingItem) {
        existingItem.weight += 0.1;
      }
      else {
        $scope.topics.push({
          text: $scope.newTopic,
          weight: 1
        });
      }

      $scope.newTopic = '';
    }
  };

  var getDefaultTopics = function() {
    $scope.topics.push({
      text: 'React',
      weight: 1
    });
    $scope.topics.push({
      text: 'AngularJS',
      weight: 1.4
    });
    $scope.topics.push({
      text: 'SenchaJS',
      weight: 0.6
    });
    $scope.topics.push({
      text: 'ASP.Net',
      weight: 0.8
    });
    $scope.topics.push({
      text: 'MongoDB',
      weight: 1.1
    });
    $scope.topics.push({
      text: 'NodeJS',
      weight: 1
    });
    $scope.topics.push({
      text: 'ES6',
      weight: 0.9
    });
    $scope.topics.push({
      text: 'RequireJS',
      weight: 0.9
    });
  };

  init();
});
