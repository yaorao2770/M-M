/**
 * main模块控制器
 */

	app.controller('mainCtrl', ['$scope','$rootScope','$state',"$location",'$cookieStore','loginCookies',
		function($scope,$rootScope,$state,$location,$cookieStore,loginCookies){



			if($location.path().match(/digitization_course/gi)){
				$rootScope.num=1;
			}
			if($location.path().match(/worksheets/gi)){
				$rootScope.num=2;
			}
			if($location.path().match(/wicro_course/gi)){
				$rootScope.num=3;
			}
			if($location.path().match(/course_resources/gi)){
				$rootScope.num=4;
			}
			if($location.path().match(/self_evaluate/gi)){
				$rootScope.num=5;
			}
			if($location.path().match(/mutual_evaluate/gi)){
				$rootScope.num=6;
			}
			if($location.path().match(/teacher_evaluate/gi)){
				$rootScope.num=7;
			}



	}]);

