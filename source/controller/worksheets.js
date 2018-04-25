app.controller('worksheetsCtrl', ['$scope',function($scope){

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

    }
}]);/**
 * Created by Administrator on 2018/3/30.
 */
