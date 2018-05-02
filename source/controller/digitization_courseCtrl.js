app.controller('digitization_courseCtrl', ['$scope',function($scope){

    $scope.liList=['全部','上学期','下学期'];

    $scope.isSelect=0;

    $scope.select_dis=function(index){
        $scope.isSelect=index;

        switch (index) {
            case 0:
                $scope.mainList= $scope.mainList1;
                break;
            case 1:
                $scope.mainList=$scope.mainList1.slice(0,4);
                break;
            case 2:
                $scope.mainList=$scope.mainList1.slice(4,7);

        }
    };

    $scope.mainList1=[
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重1'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重2'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重3'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重4'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重5'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重6'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠体重7'},

    ]


    $scope.mainList=$scope.mainList1;

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

