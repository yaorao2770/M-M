/**
 * Created by Administrator on 2018/4/27.
 */
app.controller('soon_learn_detailCtrl', ['$scope','$state','$location','$stateParams',
    function($scope,$state,$location,$stateParams){

    console.log($stateParams);



    $scope.name='测量仓鼠体重';
    $scope.menulist=['作业一','作业2'];
    //$scope.isSelect=0;

    switch ($stateParams.type){
        case '0':
            $scope.isSelect=0;
            test();
            break;
        case '1':
            $scope.isSelect=0;
            $scope.course10 = false;
            $scope.course11 = true;
            $scope.course20 = false;
            $scope.course21 = false;
            break;
        case '2':
            $scope.isSelect=1;
            $scope.course10 = false;
            $scope.course11 = false;
            $scope.course20 = true;
            $scope.course21 = false;
            break
        case '3':
            $scope.isSelect=1;
            $scope.course10 = false;
            $scope.course11 = false;
            $scope.course20 = false;
            $scope.course21 = true;
            break;
    }





    function test(){
      $scope.course10 = true;
      $scope.course11 = false;
      $scope.course20 = false;
      $scope.course21 = false;
    };

    $scope.selectCourse=function($index){
        $scope.isSelect=$index;
        if($index==1){  // ��ҵ2
          $scope.course10 = false;
          $scope.course11 = false;
          $scope.course20 = true;
          $scope.course21 = false;
        }else{  // ��ҵ1
          test();
        }
    };

    // 下一页
    $scope.nextPage = function(){

        switch ($scope.isSelect){
            case 0:
                $scope.course10 = false;
                $scope.course11 = true;
                $scope.course20 = false;
                $scope.course21 = false;
                break;
            case 1:
                $scope.course10 = false;
                $scope.course11 = false;
                $scope.course20 = false;
                $scope.course21 = true;
        }



    };

    // 上一页
    $scope.previousPage = function(){
        switch ($scope.isSelect){
            case 0:
                $scope.course10 = true;
                $scope.course11 = false;
                $scope.course20 = false;
                $scope.course21 = false;
                break;
            case 1:
                $scope.course10 = false;
                $scope.course11 = false;
                $scope.course20 = true;
                $scope.course21 = false;
        }

    };

    $scope.courseObj = {
        characters1:['活泼好动','敏感胆小','亲近人类'],
        characters2:['懒惰安静','波澜不惊','不亲近人类'],
        balances:['电子秤','天平秤','吊钩秤'],
        measuringMethod:''


    };





}]);