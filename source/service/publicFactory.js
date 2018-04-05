


    /*************文档管理表********************/
   app.constant('dataUrl', "http://120.55.50.8:5000/api/")





        //公用提示框
        .factory('publicAlert',function(){

            return {
                Alert:function(text){
                    $.alert({
                        icon: 'glyphicon glyphicon-bullhorn',
                        title: '提示!',
                        content: text,
                        animation: 'rotateY',
                        closeAnimation: 'scale',
                        buttons:{
                            'OK':{
                                btnClass:"btn-blue"
                            }
                        }
                    //animationBounce: 1.5
                    })
                }
            }
        });



