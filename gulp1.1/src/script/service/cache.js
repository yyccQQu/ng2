'use strict';
angular.module('app').service('cache', ['$cookies', function($cookies){
	//用factory可以创建私有属性和对象，service不可以。
  //服务（service） 和 服务工厂（factory）
  //'服务'=> 单例、懒加载、共用函数
  //常用内置服务 $http/$q/$timeout/$interval/$rootScope
    this.put = function(key, value){
      $cookies.put(key, value);
    };
    this.get = function(key) {
      return $cookies.get(key);
    };
    this.remove = function(key) {
      $cookies.remove(key);
    };
}]);
