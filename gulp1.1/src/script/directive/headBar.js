angular.module('app').directive('appHeadBar',[function() {

  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/headBar.html',
    scope: {
      //关于接口
      // @: 直接赋值
        // => aa:'@'    aa=AA
        // => aa:'@acb' acb=AA
      // =: 传入变量 position="pos"
        //=> pp: '='
      // &：传入函数 cc="click()"
        //=> cc: '&'
      text: '@'
    },
    link: function($scope,element,attr){
      $scope.back = function() {
        window.history.back();
      };
      //接收来自于父级companyCtrl.js传过来的值
      $scope.$on('abc',function(event, data) {
        console.log(event, data)
      });
      //向父级广播
      $scope.$emit('cba', {name: 2})
    }
  };

}])
