(function() {
    'use strict';

    // angular.module("app")
    //     .directive("goClick",['$location',goClick])


    // function goClick($location) {
    //     return function (scope, element, attrs) {
    //         var path;

    //         attrs.$observe('goClick', function (val) {
    //             path = val;
    //         });

    //         element.bind('click', function () {
    //             scope.$apply(function () {
    //                 $location.path(path);
    //             });
    //         });
    //     };
    // }
    angular.module('app')
        .directive('focusInput', ['$ionicScrollDelegate', '$window', '$timeout', '$ionicPosition', function($ionicScrollDelegate, $window, $timeout, $ionicPosition) {
    
            return {
                restrict: 'C',
                scope: false,
                link: function($scope, iElm, iAttrs, controller) {
                    if (ionic.Platform.isIOS()) {
                        iElm.on('focus', function() {
                            var top = $ionicScrollDelegate.getScrollPosition().top;
                            var eleTop = ($ionicPosition.offset(iElm).top) / 2;
                            var realTop = eleTop + top;
                            $ionicScrollDelegate.scrollTo(0, realTop);
                            // $timeout(function() {
                            //     if (!$scope.$last) {
                            //         $ionicScrollDelegate.scrollTo(0, realTop);
                            //     } else {
                            //         try {
                            //             var aim = angular.element(document).find('.scroll')
                            //             aim.css('transform', 'translate3d(0px,' + '-' + realTop + 'px, 0px) scale(1)');
                            //             $timeout(function() {
                            //                 iElm[0].focus();
                            //                 console.log(2);
                            //             }, 100)
                            //         } catch (e) {}

                            //     }
                            // }, 500)
                            // alert(111);
                        })
                    }

                }
            }
        }])



})();
