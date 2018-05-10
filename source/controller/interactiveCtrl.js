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

	$scope.words = [
		{words:'你好棒啊！', time:'1分钟前'},
		{words:'我要向你学习', time:'10分钟前'},
	];

	// 点击头像，高亮
	$scope.clickImg = function(i){
		$scope.curNum = i;
	};
	
	// 问题交流日志页
	$scope.evaluateLogs = function(){
		$location.path('/interactive_study_logs');
	};

	// 问题交流详情页
	$scope.evaluateDetail = function(i){
		$location.path('/interactive_study_detail');
	};

	// 问题交流：从详情到首页
	$scope.backInteractive = function(){
		$location.path('/interactive_study');
	};

	// 发帖
	$scope.newCard = function(){
		$location.path('/interactive_study_new');
	};

	// 提交留言
	$scope.saveWords = function(word){
		$scope.word = '';
		$scope.words.push({
			words: word,
			time: '刚刚'
		});
	};

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	}
	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	}

}]);