(function (){
	angular.module('app.business')
	.controller('changepasswdCtrl', ['$scope','$stateParams','$state',changepasswdCtrl])
	function changepasswdCtrl($scope,$stateParams,$state){
		$scope.goBack = function () {
            $state.go('BusinessLogin');
            }
	}
	changepasswdCtrl.$inject = ['$scope','$stateParams','$state'];
})();