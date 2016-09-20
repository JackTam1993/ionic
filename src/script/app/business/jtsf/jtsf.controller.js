(function(){
   angular.module('app.business')
   .controller('jtsfCtrl', ['$scope','$state',jtsfCtrl])
   function jtsfCtrl($scope,$state,jtsfCtrl){
        $scope.goBack = function () {
            $state.go('BusinessMainInterface');
        }
        $scope.openGxysf = function () {
            $state.go('gxysf');
        }
   }
   jtsfCtrl.$inject = ['$scope','$state'];
})();