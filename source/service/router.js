
		app.config(['$stateProvider','$urlRouterProvider','$httpProvider','$locationProvider',
			function($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider){

				if(!$httpProvider.defaults.headers.get){
					$httpProvider.defaults.headers.get = {};
				}

				// 禁止IE对ajax的缓存（解决ng框架在IE下不打开控制器功能就不能正常使用问题）
				$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
				$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
				$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

				$httpProvider.defaults.withCredentials = false;
				$httpProvider.defaults.headers.common = { 'Access-Control-Allow-Origin' : '*' };

				$urlRouterProvider.otherwise('/homePage');

				$stateProvider
					.state('main', {
						url: '^/main',
						templateUrl: 'templates/main.html',
						controller: 'mainCtrl'
					})

					//首页
					.state('main.homePage', {
						url: '^/homePage',
						views: {
							'content@main': {
								templateUrl: 'templates/homePage.html',
								controller: 'homePageCtrl'
							}

						}
					})

					//互动学习  -- 问题交流
					.state('main.interactive_study', {
						url: '^/interactive_study',
						views: {
							'content@main': {
								templateUrl: 'templates/interactive_study.html',
								controller: 'interactiveCtrl'
							}

						}
					})

					.state('main.interactive_study_logs', {
						url: '^/interactive_study_logs',
						views: {
							'content@main': {
								templateUrl: 'templates/interactive_study_logs.html',
								controller: 'interactiveCtrl'
							}

						}
					})

					.state('main.interactive_study_detail', {
						url: '^/interactive_study_detail',
						views: {
							'content@main': {
								templateUrl: 'templates/interactive_study_detail.html',
								controller: 'interactiveCtrl'
							}

						}
					})

					.state('main.interactive_study_new', {
						url: '^/interactive_study_new',
						views: {
							'content@main': {
								templateUrl: 'templates/interactive_study_new.html',
								controller: 'interactiveCtrl'
							}

						}
					})

					//互动学习  -- 仓鼠观察
					.state('main.interactive_watch', {
						url: '^/interactive_watch',
						views: {
							'content@main': {
								templateUrl: 'templates/interactive_watch.html',
								controller: 'interactiveCtrl'
							}

						}
					})

					//课程评价	--- 自评
					.state('main.self_evaluate', {
						url: '^/self_evaluate',
						views: {
							'content@main': {
								templateUrl: 'templates/course_evaluate_self.html',
								controller: 'course_evaluateCtrl'
							}
						}
					})

					//课程评价	--- 互评
					.state('main.mutual_evaluate', {
						url: '^/mutual_evaluate',
						views: {
							'content@main': {
								templateUrl: 'templates/course_evaluate_mutual.html',
								controller: 'course_evaluateCtrl'
							}
						}
					})

					//课程评价	--- 课程总表
					.state('main.teacher_evaluate', {
						url: '^/teacher_evaluate',
						views: {
							'content@main': {
								templateUrl: 'templates/course_evaluate_teacher.html',
								controller: 'course_evaluateCtrl'
							}
						}
					})

					//  --- 教师评价
					.state('main.teacher_evaluate_write', {
						url: '^/teacher_evaluate_write',
						views: {
							'content@main': {
								templateUrl: 'templates/course_evaluate_teacher_write.html',
								controller: 'course_evaluateCtrl'
							}
						}
					})

					//数字化教程
					.state('main.digitization_course', {
						url: '^/digitization_course',
						views: {
							'content@main': {
								templateUrl: 'templates/digitization_course.html',
								controller: 'digitization_courseCtrl'
							}

						}
					})

					// 学习单
					.state('main.worksheets', {
						url: '^/worksheets',
						views: {
							'content@main': {
								templateUrl: 'templates/worksheets.html',
								controller: 'worksheetsCtrl'
							}
						}
					})
					// 学习单 -- 作业1
					.state('main.worksheets.work1', {
						url: '^/work1',
						views: {
							'content@main': {
								templateUrl: 'templates/worksheets.html',
								controller: 'worksheetsCtrl'
							}
						}
					})
					.state('main.worksheets.work2', {
						url: '^/work2',
						views: {
							'content@main': {
								templateUrl: 'templates/worksheets.html',
								controller: 'worksheetsCtrl'
							}
						}
					})

					//微课
					.state('main.wicro_course', {
						url: '^/wicro_course',
						views: {
							'content@main': {
								templateUrl: 'templates/wicro_course.html',
								controller: 'wicro_courseCtrl'
							}

						}
					})

					//课程资源
					.state('main.course_resources', {
						url: '^/course_resources',
						views: {
							'content@main': {
								templateUrl: 'templates/course_resources.html',
								controller: 'course_resourcesCtrl'
							}

						}
					})


					//课程资源查看
					.state('main.course_resources_detail', {
						url: '^/course_resources_detail/:id',
						views: {
							'content@main': {
								templateUrl: 'templates/course_resources_detail.html',
								controller: 'course_resources_detailCtrl'
							}

						}
					})

					//马上学习
					.state('main.soon_learn', {
						url: '^/soon_learn',
						views: {
							'content@main': {
								templateUrl: 'templates/soon_learn.html',
								controller: 'soon_learnCtrl'
							}

						}
					})

					//学习详情
					//马上学习
					.state('main.soon_learn_detail', {
						url: '^/soon_learn_detail',
						views: {
							'content@main': {
								templateUrl: 'templates/soon_learn_detail.html',
								controller: 'soon_learn_detailCtrl'
							}

						}
					})
			}]);

