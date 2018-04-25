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

    $scope.imgList=[
        {src:'images/digitization_course/chayicha.png'},
        {src:'images/digitization_course/yiyiyi.png'},
        {src:'images/digitization_course/huayihua.png'},
        {src:'images/digitization_course/xueyixue.png'},
        {src:'images/digitization_course/zuoyizuo.png'},
        {src:'images/digitization_course/ceyice.png'},
        {src:'images/digitization_course/jiangyijiang.png'},
        {src:'images/digitization_course/pingyiping.png'}
    ];


    $scope.goPrevious=function(){
        if($scope.isSelect>0){
            $scope.isSelect=$scope.isSelect-1;
        }

     //console.log($scope.isSelect);
    };
    $scope.goNext=function(){

        if($scope.isSelect<9){
            $scope.isSelect=$scope.isSelect+1;
        }


        //console.log($scope.isSelect);
    }

}]);
