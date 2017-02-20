/**
 * Created by junwen on 2016/9/7.
 * mainInterface controller
 */
(function() {
    angular.module("app.business")
        .controller("BusinessMainInterfaceCtrl", ['$scope', '$stateParams', '$cookieStore', '$state', '$ionicFilterBar', 'ionicDatePicker', '$ionicPopup', '$ionicModal', '$ionicNavBarDelegate', '$http', 'getSecondFilter', '$rootScope', BusinessMainInterfaceCtrl]);

    function BusinessMainInterfaceCtrl($scope, $stateParams, $cookieStore, $state, $ionicFilterBar, ionicDatePicker, $ionicPopup, $ionicModal, $ionicNavBarDelegate, $http, getSecondFilter, $rootScope) {

        $scope.pdfUrl = '';
        var platform_context_path = $rootScope.platform_context_path;

        $scope.gotoPdf = function(pdfurl) {
            $state.go('pdf', {
                url: pdfurl
            });
            console.log(pdfurl)
        };


        function getFirstClassKeshi(parentid) {
            $http.get(platform_context_path + 'yjyb/knowledge/query?parent_id=' + parentid).success(function(response) {
                $scope.firstClassKeshi = response;
                console.log(response);
                $scope.firstClassKeshiName = $scope.firstClassKeshi.result[0].directory_name;
                $scope.firstClassKeshiParentId = $scope.firstClassKeshi.result[0].directory_id;
                //console.log($scope.firstClassKeshiParentId)
                contentColor();

                $http.get(platform_context_path + 'yjyb/knowledge/querychild?parent_id=' + $scope.firstClassKeshiParentId).success(function(response1) {
                    $scope.secondClassKeshi = response1;
                    $scope.secondClassKeshiParentId = $scope.secondClassKeshi.result[0].directory_id;

                    $http.get(platform_context_path + 'yjyb/knowledge/querycontent?directory_id=' + $scope.secondClassKeshiParentId).success(function(response) {
                        $scope.thirdClassKeshi = response;

                    })
                })
            })

        }
        getFirstClassKeshi(0);

        function getSecondClassKeshi(parentid) {
            $http.get(platform_context_path + 'yjyb/knowledge/querychild?parent_id=' + parentid).success(function(response) {
                $scope.secondClassKeshi = response;
                contentColor();

            })
        }
        //getSecondClassKeshi($scope.firstClassKeshiParentId);

        function getThirdClassKeshi(directoryid) {
            $http.get(platform_context_path + 'yjyb/knowledge/querycontent?directory_id=' + directoryid).success(function(response) {
                $scope.thirdClassKeshi = response;
                // $("#directoryid").css('color', 'red');
                contentColor();
            })
        }
        //getThirdClassKeshi(53);

        $scope.refreshKnowledge = function(e) {
            scrollColor(e.directory_id);
            $http.get(platform_context_path + 'yjyb/knowledge/querychild?parent_id=' + e.directory_id).success(function(response) {
                $scope.secondClassKeshi = response;
                $scope.secondClassKeshiParentId = $scope.secondClassKeshi.result[0].directory_id;
                contentColor();

                $http.get(platform_context_path + 'yjyb/knowledge/querycontent?directory_id=' + $scope.secondClassKeshiParentId).success(function(response) {
                    $scope.thirdClassKeshi = response;
                    // $("#directoryid").css('color', 'red');
                    contentColor();
                })
            })

        }
        $scope.refreshThirdKeshi = function(e) {
            scrollColor(e.directory_id);
            // if (e.directory_id == 8) {
            //     getThirdClassKeshi(8)
            // } else if (e.directory_id == 1) {
            //     getThirdClassKeshi(1)
            // } else if (e.directory_id == 4) {
            //     getThirdClassKeshi(4)
            // } else if (e.directory_id == 7) {
            //     getThirdClassKeshi(7)
            // }
            $http.get(platform_context_path + 'yjyb/knowledge/querycontent?directory_id=' + e.directory_id).success(function(response) {
                    $scope.thirdClassKeshi = response;
                    // $("#directoryid").css('color', 'red');
                    contentColor();
                })

        }



        /*滚动导航字体颜色*/
        function scrollColor(id) {
            var thisId = "#" + id;
            $(thisId + ".btn-scroll").css('color', '#17bddf').siblings().css('color', '#626262');

        }

        function contentColor() {
            $(".ion-scroll-div .btn-scroll").first().addClass('color-blue');
        }


        // $scope.testFilter = function(e) {
        //     return e.parent_id == 2 || e.parent_id == 44;
        // }

        $scope.showFilterBar = function() {
            filterBarInstance = $ionicFilterBar.show({
                items: $scope.items,
                update: function(filteredItems, filterText) {
                    $scope.items = filteredItems;
                    if (filterText) {
                        console.log(filterText);
                    }
                }
            });
        };

        $scope.refreshItems = function() {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function() {
                getItems();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        $scope.goToItemDetail = function(item) {
            $state.go('BusinessItem', {
                itemName: item.text
            });
        }

        // $scope.toggleLeft = function () {
        //     $ionicSideMenuDelegate.toggleLeft();
        // };

        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Logout',
                template: '你确定退出吗?',
                buttons: [{
                    text: "取消",
                    type: "button-default",
                    onTap: function(e) {
                        return null;
                    }
                }, {
                    text: "确定",
                    type: "button-balanced",
                    onTap: function(e) {
                        $scope.clearCache();
                    }
                }]
            });
        };


        //日历控件
        var ipObj1 = {
            callback: function(val) { //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            },
        };

        $scope.openDatePicker = function() {
            ionicDatePicker.openDatePicker(ipObj1);
        };
        $scope.openJtsf = function() {
            $state.go("jtsf");
        }

        $scope.check = false;
        $scope.confirmRoles = function() {
                $scope.check = true;
                $scope.closeModal1();
            }
            // $scope.btnScroll = function() {
            //     $(".bar .btn-scroll").css('color', 'red');
            // }

    }
    BusinessMainInterfaceCtrl.$inject = ['$scope', '$stateParams', '$cookieStore', '$state', '$ionicFilterBar', 'ionicDatePicker', '$ionicPopup', '$ionicModal', '$ionicNavBarDelegate', '$http'];
})();
