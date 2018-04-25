

        // http������
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
        // ��ҳ
        app.factory('pagninationService', ['$rootScope',
            function($rootScope){
                return {
                    common:function($scope,itemsPerPage){
                        $scope.maxSize      = 7;	 // ҳ�������ʾ7ҳ
                        $scope.currentPage  = 1;     // ��ǰҳ��
                        // ÿҳ��ʾ����������,Ĭ��10��
                        $scope.itemsPerPage = itemsPerPage ? itemsPerPage : 7;
                    }
                };
        }]);

        //��½��Ϣ״̬COOKIES
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



