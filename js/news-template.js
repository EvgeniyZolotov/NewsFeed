FeedApp.controller('NewsTemplateController', function($scope) {

	$scope.wrapText = false;
	$scope.photoPresent = false;
	$scope.videoPresent = false;
	$scope.wrapThreshold = 1300;

	$scope.init = function(newsContent) {
		$scope.wrapText = $scope.needTextWrapping(newsContent.body);
		$scope.photoPresent = newsContent.image.length != 0;
		$scope.videoPresent = newsContent.video.length != 0;
	}
	
	$scope.needTextWrapping = function(newsText) {
		if (newsText.length > $scope.wrapThreshold) {
			return true;
		}
		return false;
	};

	$scope.shortenedBody = function(newsText) {
		var part = newsText.substr(0, $scope.wrapThreshold)
		var res = part.concat(" ... ");
		return res;
	};

	$scope.wrapClick = function() {
		$scope.wrapText = !$scope.wrapText;
	};
})
.directive('newsTemplate', function () {
	return {
		restrict: 'AE',
  		scope : {
   			newsContent: '='
   		},
		templateUrl: 'html/news-template.html'
	};
});

FeedApp.controller('ModalController', function ($scope, $modalInstance, imgUrl) {
	$scope.imgUrl = imgUrl;

	$scope.close = function() {
		$modalInstance.close();
	}
})