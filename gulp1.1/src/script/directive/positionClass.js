'use strict'
angular.module('app').directive('appPositionClass', [function(){
  return{
    restrict: "A",
    replace: true,
    scope: {
      com: '='
    },
    templateUrl: 'view/template/positionClass.html',
    link: function($scope) {
      $scope.showPositionList = function(idx) {
        $scope.positionList = $scope.com.positionClass[idx].positionList;
        $scope.isActive = idx;
      }
      //常用函数 $watch/$on/$broadcast/$emit/
      // $digest(脏检查，更新数据) => http://www.angularjs.cn/A0a6 理解$watch ，$apply 和 $digest --- 理解数据绑定过程
      $scope.$watch('com', function(newVal){
        if(newVal) $scope.showPositionList(0);
      });
    }
  }
}])
