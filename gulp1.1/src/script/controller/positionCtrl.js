'use strict'

angular.module('app').controller('positionCtrl',['$log','$q','$http','$state','$scope', 'cache',function($log,$q,$http,$state,$scope,cache){
  $scope.isLogin = !!cache.get('name');
  $scope.message = $scope.isLogin?'投个简历':'去登录';

  $log.log('第二个页面') //内置log
  // cache.put("a","b")
  // cache.remove("a")

  /* $http['post/delete/put']('url',{//数据对象}，{//配置对象})
     $http({
        url: '',
        method: '',
        params: {},
        data: {}。。。
     })
  */
  function getPosition() {
    var def = $q.defer();//创建defer函数，延迟加载对象
    $http.get('data/position.json', {
      params: {
        id: $state.params.id
      }
    }).success(function(resp) {
      $scope.position = resp;
      if(resp.posted) {
        $scope.message = '已投递';
      }
      def.resolve(resp);//执行成功返回data数据
    }).error(function(err){
      def.eject(err);//失败返回错误信息
    });
    return def.promise;//=>当getPosition成功执行后 将promise属性返回回去
  }
  function getCompany(id) {
    $http.get('data/company.json?id='+id).success(function(resp){
      $scope.company = resp;
    })
  }
  //异步操作完成之后调用then里面的方法 =》这样方法就变成同步执行了
  getPosition().then(function(obj){
    getCompany(obj.companyId);
  });

  //方法2 => 要当多个函数执行后再执行后面的参数
  /*
    $q.all([fun1(),fun2()]).then(function(result){
      fun都是promise对象，result数组里的下标和fun里面的是对应的
    })

    $timeout(fun(),0) =>将fun 放于js执行队列最后执行
  */
  //全局方法
  $scope.im()

  $scope.go = function() {
    if($scope.message !== '已投递') {
      if($scope.isLogin) {
        $http.post('data/handle.json', {
          id: $scope.position.id
        }).success(function(resp) {
          $log.info(resp);
          $scope.message = '已投递';
        });
      } else {
        $state.go('login');
      }
    }
  }



}])
