app.controller('worksheetsCtrl', ['$scope','$state','$location',function($scope,$state,$location){

    //$scope.courseNum=1;
    //$scope.name='测量仓鼠体重';
    //$scope.menulist=['作业1','作业2'];
    //$scope.isSelect=0;
    //test();
    //
    //function test(){
    //  $scope.course10 = true;
    //  $scope.course11 = false;
    //  $scope.course20 = false;
    //  $scope.course21 = false;
    //};
    //
    //$scope.selectCourse=function($index){
    //    $scope.isSelect=$index;
    //    if($index==1){  // 作业2
    //      $scope.course10 = false;
    //      $scope.course11 = false;
    //      $scope.course20 = true;
    //      $scope.course21 = false;
    //    }else{  // 作业1
    //      test();
    //    }
    //};
    //
    //// 下一页
    //$scope.nextPage = function(){
    //  $scope.courseNum=2;
    //  if($scope.course10){
    //    $scope.course10 = false;
    //    $scope.course11 = true;
    //  }else if($scope.course20){
    //    $scope.course20 = false;
    //    $scope.course21 = true;
    //    $scope.course10 = false;
    //    $scope.course11 = false;
    //  }
    //};
    //
    //// 上一页
    //$scope.previousPage = function(){
    //  $scope.courseNum=1;
    //  if(!$scope.course10){
    //    $scope.course10 = true;
    //    $scope.course11 = false;
    //  }else if(!$scope.course20){
    //    $scope.course20 = true;
    //    $scope.course21 = false;
    //    $scope.course10 = false;
    //    $scope.course11 = false;
    //  }
    //};
    //
    //$scope.courseObj = {
    //    characters1:['活泼好动','敏感胆小','亲近人类'],
    //    characters2:['懒惰安静','波澜不惊','不亲近人类'],
    //    balances:['电子秤','天平秤','吊钩秤'],
    //    measuringMethod:''
    //};



    $scope.num=2;
    $scope.name='测量仓鼠体重';

    $scope.workList1=[
        {name:'第8课测量仓鼠体重(3)',workType:'课程作业',submitTime:"2018-04-11",status:0,complateTime:null},
        {name:'第7课测量仓鼠体重(2)',workType:'课程作业',submitTime:"2018-04-11",status:0,complateTime:null},
        {name:'第6课测量仓鼠体重(1)',workType:'课程作业',submitTime:"2018-04-11",status:0,complateTime:null},
        {name:'第5课测量记忆(3)',workType:'课程作业',submitTime:"2018-04-11",status:1,complateTime:'2018-04-11'},
        {name:'第4课测量仓鼠(2)',workType:'课程作业',submitTime:"2018-04-11",status:1,complateTime:'2018-04-11'},
        {name:'第3课测量仓鼠体重(1)',workType:'课程作业',submitTime:"2018-04-11",status:1,complateTime:'2018-04-11'},
        {name:'第2课测量仓鼠(2)',workType:'课程作业',submitTime:"2018-04-11",status:1,complateTime:'2018-04-11'},
        {name:'第1课测量仓鼠体重(1)',workType:'课程作业',submitTime:"2018-04-11",status:1,complateTime:'2018-04-11'}
    ];

    $scope.menulist=['作业任务','作业评价'];

    $scope.isSelect=0;
    $scope.selectCourse=function($index){
        $scope.isSelect=$index;
    }

    $scope.workList= $scope.workList=$scope.workList1.filter(function(el,index){
        return index<4
    });
    $scope.totalItems  = 8;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 4;
    $scope.maxSize = 5;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;

    };

    $scope.changePage=function(){
        console.log($scope.currentPage);

        if($scope.currentPage==1){
            $scope.workList=$scope.workList1.filter(function(el,index){
                return index<4
            });


        }else if($scope.currentPage==2){
            console.log($scope.workList1);
            $scope.workList=$scope.workList1.filter(function(el,index){
                return index>4|| index==4
            });
        }

    };


    $scope.goLearning=function(){
        $state.go('main.soon_learn_detail')
    }

}]);