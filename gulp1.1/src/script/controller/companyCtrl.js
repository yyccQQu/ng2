'use strict';
angular.module('app').controller('companyCtrl', ['$http', '$state', '$scope', function($http, $state, $scope){
  $http.get('data/company.json?id='+$state.params.id).success(function(resp){
    $scope.company = resp;
    $scope.$broadcast('abc',{id:3});
  });
  //事件广播
  //$scope.$broadcast('abc',{id:3}) =>将该方法放于ajax请求之后很可能会造成，广播之后页面未加载，对应指令并未初始化完成
  //故将其放于ajax请求中，当延时处理。
  // => 发出事件之后需要考虑事件接收方是否初始化完成
  //接收子级参数，
  $scope.$on('cba',function(event,data) {
    console.log(event,data)
  })
}]);
