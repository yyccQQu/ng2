'use strict'

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //关于 路由
  // '/main'：只匹配'/main'
  // '/main/:id'、'/user/{id}'：匹配 '/main/1234'或者'/main/'
  // '/message?before&after'=>'queryString'方式：非rest传参
  // 单页面跳转 $state.go('main', {id: concat.id},{location:'replace'}//跳转的时候消除当前的路径)
  // 获取参数： $state.parmas.id === $StateParams.id 前者是$state的parmas属性，后者是$StateParmas服务的params属性
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('position',{
    url: '/position/:id',
    templateUrl: "view/position.html",
    controller: 'positionCtrl'
  }).state('company',{
    url: '/company/:id',
    templateUrl: 'view/company.html',
    controller: 'companyCtrl'
  }).state('search', {
    url: '/search',
    templateUrl: 'view/search.html',
    controller: 'searchCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  }).state('register', {
    url: '/register',
    templateUrl: 'view/register.html',
    controller: 'registerCtrl'
  }).state('me', {
    url: '/me',
    templateUrl: 'view/me.html',
    controller: 'meCtrl'
  })

  $urlRouterProvider.otherwise('main');
}])
