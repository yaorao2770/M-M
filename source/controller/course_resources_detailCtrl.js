/**
 * Created by Administrator on 2018/4/26.
 */
app.controller('course_resources_detailCtrl', ['$scope','$stateParams',function($scope,$stateParams){

    $scope.data='��Դ����';

    console.log($stateParams.id);

    switch ($stateParams.id){


        case '0':
            $scope.title='动物称体重';
            $scope.select=0;

            console.log('jinl');
            break;
        case '1':
            $scope.title='称体重';
            $scope.select=1;
            break;
        case '2':
            $scope.title='为什么称体重';
            $scope.select=2;
            break;
        case '3':
            $scope.title='不停车预检系统';
            $scope.select=3;
            break;
    }




}]);