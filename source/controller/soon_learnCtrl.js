/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('soon_learnCtrl', ['$scope',function($scope){
    $scope.data='马上学习';

    $scope.learn_left=['首页','想一想','查一查','议一议','学一学','测一测','讲一讲','评一评'];

    sessionStorage.select?$scope.isSelect=sessionStorage.select:$scope.isSelect=0;

    $scope.selectType=function(index){
        $scope.isSelect=index;

        sessionStorage.select=index;
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

        console.log($scope.isSelect);

        if($scope.isSelect<7){
            $scope.isSelect=$scope.isSelect+1;
        }


        //console.log($scope.isSelect);
    }

}]);
