app.controller('worksheetsCtrl', ['$scope','$state','$location',function($scope,$state,$location){

    $scope.courseNum=1;
    $scope.name='测量仓鼠体重';
    $scope.menulist=['作业1','作业2'];
    $scope.isSelect=0;
    test();

    function test(){
      $scope.course10 = true;
      $scope.course11 = false;
      $scope.course20 = false;
      $scope.course21 = false;
    };

    $scope.selectCourse=function($index){
        $scope.isSelect=$index;
        if($index==1){  // 作业2
          $scope.course10 = false;
          $scope.course11 = false;
          $scope.course20 = true;
          $scope.course21 = false;
        }else{  // 作业1
          test();
        }
    };

    // 下一页
    $scope.nextPage = function(){
      $scope.courseNum=2;
      if($scope.course10){
        $scope.course10 = false;
        $scope.course11 = true;
      }else if($scope.course20){
        $scope.course20 = false;
        $scope.course21 = true;
        $scope.course10 = false;
        $scope.course11 = false;
      }
    };

    // 上一页
    $scope.previousPage = function(){
      $scope.courseNum=1;
      if(!$scope.course10){
        $scope.course10 = true;
        $scope.course11 = false;
      }else if(!$scope.course20){
        $scope.course20 = true;
        $scope.course21 = false;
        $scope.course10 = false;
        $scope.course11 = false;
      }
    };

    $scope.courseObj = {
        characters1:['活泼好动','敏感胆小','亲近人类'],
        characters2:['懒惰安静','波澜不惊','不亲近人类'],
        balances:['电子秤','天平秤','吊钩秤'],
        measuringMethod:''
    };

  

   
}]);