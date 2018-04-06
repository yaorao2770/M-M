/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('course_evaluateCtrl', ['$scope',function($scope){

    $scope.data='课程评价页面';

    $scope.totalItems  = 64;
	$scope.currentPage = 3;
	$scope.itemsPerPage = 3;
	$scope.maxSize = 5;

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	}
	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	}

	$scope.imgUrl = 'images/evaluate/avater.png';
	$scope.imgUrlActive = 'images/evaluate/avater-active.png';
	$scope.curNum = 0;

	// 点击头像，高亮
	$scope.clickImg = function(i){
		$scope.curNum = i;
		// $scope.imgUrlActive = 'images/evaluate/avater-active.png';
	};

}]);