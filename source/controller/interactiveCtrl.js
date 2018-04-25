/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('interactiveCtrl', ['$scope',function($scope){

    $scope.data = '互动学习页面';

    $scope.totalItems  = 64;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 3;
	$scope.maxSize = 5;

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	}
	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	}

}]);