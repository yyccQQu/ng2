'use strict';
angular.module('app').controller('searchCtrl', [ '$scope','$http', function( $scope,$http ){
  $scope.name = '';
  $scope.search = function() {
    $http.get('data/positionList.json?name='+$scope.name).success(function(resp) {
      $scope.positionList = resp;
    });
  };
}]);
