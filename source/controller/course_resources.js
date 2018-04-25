app.controller('course_resourcesCtrl', ['$scope',function($scope){

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
                $scope.mainList=$scope.mainList1.slice(0,5);
                break;


        }

    };

    $scope.operatelist=['上传','下载','删除','新建'];

    //$scope.courseTable=[
    //    {name:'第一课准备材料',size:'23M',date:'2018-04-05'},
    //    {name:'第二课准备材料',size:'23M',date:'2018-04-05'},
    //    {name:'第三课准备材料',size:'23M',date:'2018-04-05'},
    //    {name:'第四课准备材料',size:'23M',date:'2018-04-05'}
    //
    //
    //];

    $scope.mainList1=[
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题1'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题2'},
        {img:'images/digitization_course/img1.png',name:'定义问题1'},
        {img:'images/digitization_course/img1.png',name:'定义问题2'},
        {img:'images/digitization_course/img1.png',name:'定义问题3'},
        {img:'images/digitization_course/img1.png',name:'定义问题4'},
        {img:'images/digitization_course/img1.png',name:'定义问题5'},
        {img:'images/digitization_course/img1.png',name:'定义问题6'},
        {img:'images/digitization_course/img1.png',name:'定义问题7'},
        {img:'images/digitization_course/img1.png',name:'定义问题8'}  ];

    $scope.mainList= $scope.mainList1;

    $scope.totalItems  = 64;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 3;
    $scope.maxSize = 5;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    }
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    }


}]);
