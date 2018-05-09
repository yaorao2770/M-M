/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('course_evaluateCtrl', ['$scope','$location',function($scope,$location){

    $scope.data='课程评价页面';

    $scope.totalItems  = 64;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 3;
	$scope.maxSize = 5;
	$scope.classes = [1,2,3,4,5,6];
	$scope.ages = [1,2,3,4,5,6];
	$scope.times = [
		'不到1学期',
		'大于1学期，小于2学期',
		'大于2学期，小于3学期',
		'大于3学期，小于4学期',
		'大于4学期，小于5学期',
		'大于5学期',
	];
	$scope.entrys = [
		{self:15, mutal:15, teacher:15, total:15},
		{self:15, mutal:15, teacher:15, total:15},
		{self:'', mutal:'', teacher:15, total:15},
		{self:'', mutal:'', teacher:15, total:15}
	];

	$scope.curClasses = 3;;

	$scope.clickImg = false;

	$scope.curLi = 3;
	$scope.clickClasses = function(num,i){
		$scope.curClasses = $scope.curLi = num;
	};

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.teacherBack = function () {
		$location.path('/teacher_evaluate');
	};

	$scope.writeNow = function () {
		$location.path('/teacher_evaluate_write');
	};

	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	};

	// 自评提交
	$scope.save = function(){

	};

	

}]);