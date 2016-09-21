(function(){
   angular.module('app.business')
   .controller('pdfCtrl', ['$scope','$sce','$state','$stateParams',pdfCtrl]);
    function pdfCtrl($scope,$sce,$state,$stateParams){
   	     $scope.goBack = function(){
   	     	$state.go('BusinessMainInterface')
   	     }
   	var a = $stateParams.url
   	$scope.paySrc =  $sce.trustAsResourceUrl('http://61.28.113.182:2082/'+a); //URL 为全链接（$sce.trustAsResourceUrl("http://" + url)）
   }
})();