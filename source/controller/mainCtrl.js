/**
 * main模块控制器
 */

	app.controller('mainCtrl', ['$scope','$rootScope','$state',"$location",'$cookieStore','loginCookies',
		function($scope,$rootScope,$state,$location,$cookieStore,loginCookies){


			$scope.menu=[
				{name:'首页',child:[],class:'butE65260',src:"main.homePage"},
				{name:"课程中心",child:['数字化教程','学习单','微课','课程资源'],class:'but97C83E course',src:''},
				{name:'互动学习',child:[],class:'butF3C768'},
				{name:"课程评价",child:['自评','互评','教师评价'],class:"but35B1D1 course"}
			];

			console.log($location.path());


			if($location.path().match(/digitization_course/gi)){
				$rootScope.num=1;
				$scope.type=2;
			}
			if($location.path().match(/worksheets/gi)){
				$rootScope.num=2;
				$scope.type=2;
			}
			if($location.path().match(/wicro_course/gi)){
				$rootScope.num=3;
				$scope.type=2;
			}
			if($location.path().match(/course_resources/gi)){
				$rootScope.num=4;
				$scope.type=2;
			}
			if($location.path().match(/self_evaluate/gi)){
				$rootScope.num=7;
				$scope.type=4;
			}
			if($location.path().match(/mutual_evaluate/gi)){
				$rootScope.num=8;
				$scope.type=4;
			}
			if($location.path().match(/teacher_evaluate/gi)){
				$rootScope.num=9;
				$scope.type=4;
			}

			if($location.path().match(/homePage/gi)){
				$scope.type=1;
			}

			if($location.path().match(/interactive_study/gi)){
				$scope.type=3;
				$rootScope.num=5;
			}
			if($location.path().match(/interactive_watch/gi)){
				$scope.type=3;
				$rootScope.num=6;
			}

	}]);

