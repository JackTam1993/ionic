(function(){
   angular.module('app.business')
   .service('publicService', ['$scope','$state'])
   function publicService($scope,$state){
            $scope.goBack = function (a) {
            $state.go(a);
            }
   }
})()