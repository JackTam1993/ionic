(function() {
    angular.module("app.business")
    .controller('gxysfCtrl', ['$scope','$state','gxysfService',gxysfCtrl]);

    function gxysfCtrl($scope,$state,gxysfService){
          $scope.goBack = function () {
            $state.go('jtsf');
        }
        $scope.civilian = gxysfService.civilian;
       
    }
})()