/**
 * Created by junwen on 2016/9/8.
 * each item controller
 */
(function () {
    angular.module("app.business")
        .controller("BusinessItemCtrl",['$scope','$stateParams','$state',BusinessItemCtrl]);
        function BusinessItemCtrl($scope,$stateParams,$state,publicService){
            $scope.itemName = $stateParams.itemName;
            
        }
})();
