app.controller('course_resourcesCtrl', ['$scope',function($scope){

    //$scope.data='课程资源'
    $scope.menulist=['全部','文章','图片','视频'];
    $scope.isSelect=0;
    $scope.selectCourse=function(index){
        $scope.isSelect=index;
    };

    $scope.operatelist=['上传','下载','删除','新建'];

    $scope.courseTable=[
        {name:'第一课准备材料',size:'23M',date:'2018-04-05'},
        {name:'第二课准备材料',size:'23M',date:'2018-04-05'},
        {name:'第三课准备材料',size:'23M',date:'2018-04-05'},
        {name:'第四课准备材料',size:'23M',date:'2018-04-05'},
        {name:'第五课准备材料',size:'23M',date:'2018-04-05'}

    ];

    $scope.numList=[1,2,3,4,5,6,7,8,9];

    $scope.isNum=3;

    $scope.selectNum=function(index){
        $scope.isNum=index;
    }
}]);
