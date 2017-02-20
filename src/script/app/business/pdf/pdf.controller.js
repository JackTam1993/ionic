(function() {
    angular.module('app.business')
        .controller('pdfCtrl', ['$scope', '$sce', '$state', '$stateParams', '$rootScope', pdfCtrl]);

    function pdfCtrl($scope, $sce, $state, $stateParams, $rootScope) {

        var platform_context_path = $rootScope.platform_context_path;
        var a = $stateParams.url;
        
        $scope.goBack = function() {
            $state.go('BusinessMainInterface'); 
        }

       //$scope.paySrc = 'generic/web/viewer.html?file='+ platform_context_path + a;

        if (iosDevice()) {
            // if(a.slice(-8, -5) == '668' || a.slice(-8,-5) == '256' || a.slice(-8, -5) == '064'){
            //     $scope.paySrc = $sce.trustAsResourceUrl(platform_context_path + 'generic/web/blank.html');
            // }
            // else{
            //$scope.paySrc = $sce.trustAsResourceUrl(platform_context_path + a);
            $scope.paySrc = 'generic/web/viewer.html?file='+ platform_context_path + a;
            console.log($scope.paySrc);
            $scope.showOrNot = true;
        // }
        }
        else if (androidDevice()) {
            $scope.paySrc = 'generic/web/viewer.html?file='+ platform_context_path + a;
            $scope.showOrNot = false;
                }
        
        function androidDevice() {
            if (/(Android)/i.test(navigator.userAgent))
                return true;
        }

        function iosDevice() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))
                return true;
        }
        //console.log($scope.paySrc);
        //$scope.paySrc = $sce.trustAsResourceUrl('http://61.28.113.182:2082/uploadfile/orginal/2016/9/21/img330219239253462280.pdf')
        //$scope.paySrc = $sce.trustAsResourceUrl(platform_context_path + a); //URL 为全链接（$sce.trustAsResourceUrl("http://" + url)）
    }
})();
