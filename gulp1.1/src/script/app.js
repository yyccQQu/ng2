'use strict'

angular.module('app',['ui.router', 'ngCookies', 'validation', 'ngAnimate']).run(['$rootScope',function($rootScope){
  //run 初始化执行
  // 全局都有im方法
  $rootScope.im = function() {
    console.log('xyd')
  }
}]);
