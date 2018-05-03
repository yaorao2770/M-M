/**
 * Created by Administrator on 2018/3/30.
 */
app.controller('wicro_courseCtrl', ['$scope',function($scope){

    $scope.liList=['仓鼠课程主题'];
    $scope.isSelect=0;

    $scope.select_dis=function(index){
        $scope.isSelect=index;

        switch (index) {
            case 0:
                $scope.mainList= $scope.mainList1;
                break;
            case 1:
                $scope.mainList=$scope.mainList1.slice(0,3);
                break;
            case 2:
                $scope.mainList=$scope.mainList1.slice(3,5);
                break;
            case 3:
                $scope.mainList=$scope.mainList1.slice(5,7);

        }
    };

    $scope.mainList1=[
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题1'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题2'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题3'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题4'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题5'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题6'},
        {img:'images/digitization_course/img1.png',name:'测量仓鼠记忆力问题7'},
        ];



    $scope.mainList=$scope.mainList1;

}]);/**
 * Created by Administrator on 2018/3/30.
 */
