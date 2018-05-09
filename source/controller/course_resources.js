app.controller('course_resourcesCtrl', ['$scope','$state',function($scope,$state){

    //$scope.data='课程资源'
    $scope.menulist=['拓展阅读','佳作赏析'];
    $scope.isSelect=0;
    $scope.selectCourse=function(index){
        $scope.isSelect=index;
        switch (index) {
            case 0:
                $scope.mainList= $scope.mainList1;
                break;
            case 1:
                $scope.mainList=$scope.mainList1.slice(0,2);
                break;


        }

    };

    $scope.operatelist=['上传','下载','删除','新建'];



    $scope.mainList1=[
        {img:'images/digitization_course/img1.png',name:'给动物称体重的方法'},
        {img:'images/digitization_course/img1.png',name:'立夏习俗——称体重'},
        {img:'images/digitization_course/img1.png',name:'为什么要给动物测量体长体重'},
        {img:'images/digitization_course/img1.png',name:'不停车预检系统'}
         ];

    $scope.mainList= $scope.mainList1;


    $scope.res_menuList=['菜单一','菜单二','菜单三','菜单四'];

    $scope.isSelectmenu=0;

    $scope.selectMenu=function($index){
        $scope.isSelectmenu=$index;
    }
    //
    //$scope.totalItems  = $scope.mainList1.length;
    //$scope.currentPage = 1;
    //$scope.itemsPerPage = 8;
    //$scope.maxSize = 5;
    //
    //$scope.setPage = function (pageNo) {
    //    $scope.currentPage = pageNo;
    //};
    //$scope.pageChanged = function() {
    //    $log.log('Page changed to: ' + $scope.currentPage);
    //};
    ////
    //
    $scope.resource_detail=function(index){

        $state.go('main.course_resources_detail',{id:index});
    }


}]);
