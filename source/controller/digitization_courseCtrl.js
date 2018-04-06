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
                $scope.mainList=$scope.mainList1.slice(0,5);
                break;
            case 2:
                $scope.mainList=$scope.mainList1.slice(5,10);

        }
    };

    $scope.mainList1=[
        {img:'images/img1.png',name:'测量仓鼠记忆力问题1'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题2'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题3'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题4'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题5'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题6'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题7'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题8'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题9'},
        {img:'images/img1.png',name:'测量仓鼠记忆力问题10'}  ];



    $scope.mainList=$scope.mainList1;
}]);

