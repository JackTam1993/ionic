(function (){
	angular.module('app.business')
	.controller('changepasswdCtrl', ['$scope','$stateParams','$state',changepasswdCtrl])
	function changepasswdCtrl($scope,$stateParams,$state,publicService){
		$scope.goBack = function () {
            $state.go('BusinessLogin');
            }
	}
})()