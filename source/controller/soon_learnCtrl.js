/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('soon_learnCtrl', ['$scope',function($scope){
    $scope.data='马上学习';

    $scope.learn_left=['首页','想一想','查一查','议一议','画一画','学一学','做一做','测一测','讲一讲','评一评'];
    $scope.isSelect=1;

    $scope.selectType=function(index){
        $scope.isSelect=index;
    }

}]);
