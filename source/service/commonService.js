

        // http拦截器
        app.factory('tokenInteceptor', ['$rootScope',"$q","$injector",'$cookieStore',
            'localStorageService','$location','loadingService',
            function($rootScope,$q,$injector,$cookieStore,localStorageService,$location,
                     loadingService){
                return {
                    request:function(requestConfig){

                        var accessToken = $cookieStore.get('accessToken');

                        if(accessToken){
                            requestConfig.headers['X-Access-Token'] = accessToken;
                        }

                        return requestConfig;
                    },
                    response:function(responseObject){
                        return responseObject;
                    },
                    requestError:function(rejectReason){
                        return $q.reject(rejection);
                    },
                    responseError:function(responseError){
                        return $q.reject(responseError);
                    }
                };
        }]);
        // 分页
        app.factory('pagninationService', ['$rootScope',
            function($rootScope){
                return {
                    common:function($scope,itemsPerPage){
                        $scope.maxSize      = 7;	 // 页数最多显示7页
                        $scope.currentPage  = 1;     // 当前页数
                        // 每页显示多少条数据,默认10条
                        $scope.itemsPerPage = itemsPerPage ? itemsPerPage : 7;
                    }
                };
        }]);

        //登陆信息状态COOKIES
        app.factory('loginCookies',['$rootScope','$cookieStore',function($rootScope,$cookieStore){

            return{
                getCookies:function($rootScope){
                    var loginMess=$cookieStore.get('loginMess');

                    if(loginMess){
                        $rootScope.ifLogin=true;
                    }else{
                        $rootScope.ifLogin=false;
                    }
                }
            }



        }]);



