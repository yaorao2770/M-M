

		// 表单失焦验证
        app.directive('ngFocus', function() {
            var FOCUS_CLASS = "ng-focused";
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attrs, ctrl) {
                    ctrl.$focused = false;
                    element.bind('focus', function(evt) {
                        element.addClass(FOCUS_CLASS);
                        scope.$apply(function() {
                            ctrl.$focused = true;
                        });
                    }).bind('blur', function() {
                        element.removeClass(FOCUS_CLASS);
                        scope.$apply(function() {
                            ctrl.$focused = false;
                        })
                    })
                }
            }
        })
        // input 聚焦
        .directive('setFocus', function(){
            return function(scope, element){
                element[0].focus();
            };
        })
