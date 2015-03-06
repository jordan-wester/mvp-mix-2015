

angular.module('demo').controller('PaginationController', function($scope, EventService, BaseService) {
  var init = function() {
    EventService.registerListener(BaseService.events.searchResultCountChanged, onSearchResultCountChanged, $scope);

    // Default page size
    $scope.pageSize = 25;
  };

  var onSearchResultCountChanged = function(event, totalResultCount) {
    // Update number of pages
  };

  $scope.changePageNumber = function(pageNumber) {
    EventService.throwEvent(BaseService.events.paginationDataChanged, {
      from: pageNumber,
      pageSize: $scope.pageSize
    });
  };

  init();
});
