FeedApp.controller('NewsController', function ($scope, NewsControllerFct) {
	$scope.newsOffset = 0;
	$scope.newsPerPage = 5;
	$scope.news_list = NewsControllerFct.news_list();

	// Show previous 'newsPerPage' news
	$scope.prevN = function() {
		if ($scope.prevDisabled()) {
			return;
		}

		$scope.newsOffset -= $scope.newsPerPage;
	}

	// Show next 'newsPerPage' news
	$scope.nextN = function() {
		if ($scope.nextDisabled()) {
			return;
		}
		$scope.newsOffset += $scope.newsPerPage;
	}

	// Disable 'Previous' button if no previous news at the moment
	$scope.prevDisabled = function() {
		return ($scope.newsOffset == 0) ? true : false;
	}

	// Disable 'Next' button if no more news has left
	$scope.nextDisabled = function() {
		return ($scope.newsOffset >= $scope.news_list.length
				|| $scope.newsOffset  + $scope.newsPerPage >= $scope.news_list.length) ? true : false;
	}
})
.directive('newsFeed', function() {
  	return {

   		templateUrl: 'html/news-feed.html'
	};
});
