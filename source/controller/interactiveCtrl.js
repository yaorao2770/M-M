/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('interactiveCtrl', ['$scope','$location',function($scope,$location){

    $scope.data = '互动学习页面';

    $scope.totalItems  = 64;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 3;
	$scope.maxSize = 5;

	$scope.imgUrl = 'images/interactive/avater.png';
	$scope.imgUrlActive = 'images/interactive/avater-active.png';
	$scope.curNum = 0;

	// 点击头像，高亮
	$scope.clickImg = function(i){
		$scope.curNum = i;
	};
	
	$scope.evaluateDetail = function(){
		$location.path('/interactive_study_detail');
	};

	// 问题交流：从详情到首页
	$scope.backInteractive = function(){
		$location.path('/interactive_study');
	};

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	}
	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	}

}]);