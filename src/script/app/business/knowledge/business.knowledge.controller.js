/**
 * Created by junwen on 2016/9/7.
 * mainInterface controller
 */
(function () {
    angular.module("app.business")
        .controller("BusinessMainInterfaceCtrl", ['$scope', '$stateParams', '$cookieStore', '$state', '$ionicFilterBar','ionicDatePicker', '$ionicPopup','$ionicModal','$ionicNavBarDelegate','$http','getSecondFilter', BusinessMainInterfaceCtrl]);
    function BusinessMainInterfaceCtrl($scope, $stateParams, $cookieStore, $state, $ionicFilterBar,ionicDatePicker, $ionicPopup,$ionicModal,$ionicNavBarDelegate,$http,getSecondFilter) {
        
        $scope.pdfUrl = '';

        $scope.myName = $stateParams.name == null ? $cookieStore.get('username') : $stateParams.name;
        if ($scope.myName == null) {
            $scope.myName = $cookieStore.get('username');
        }
        $scope.clearCache = function () {
            localStorage.clear();
            $cookieStore.remove('username');
            sessionStorage.clear();
            $state.go("BusinessLogin")
        };
        $scope.gotoPdf = function(pdfurl){
            $state.go('pdf' ,{url: pdfurl});
            console.log(pdfurl)
        };

        var filterBarInstance;

        function getItems() {
            var items = [];
            for (var x = 1; x < 2000; x++) {
                items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
            }
            $scope.items = items;
        }
        getItems();

        function getFirstClassKeshi(parentid){
        $http.get('http://61.28.113.182:2082/yjyb/knowledge/query?parent_id='+parentid).success(function(response){
              $scope.firstClassKeshi = response;
              $scope.firstClassKeshiName = $scope.firstClassKeshi.result[0].directory_name;
              })
        }
        getFirstClassKeshi(0);

        function getSecondClassKeshi(parentid){
        $http.get('http://61.28.113.182:2082/yjyb/knowledge/querychild?parent_id='+parentid).success(function(response){
              $scope.secondClassKeshi = response;
              
              })
        }
        getSecondClassKeshi(44);

        function getThirdClassKeshi(directoryid){
        $http.get('http://61.28.113.182:2082/yjyb/knowledge/querycontent?directory_id='+directoryid).success(function(response){
              $scope.thirdClassKeshi = response;
              })
        }
        getThirdClassKeshi(53);

        $scope.refreshKnowledge = function(e){
              if(e.directory_id == 44){
                   getSecondClassKeshi(44);
                   getThirdClassKeshi(53)
                   $scope.firstClassKeshiName = e.directory_name;
              }
              else {
                getSecondClassKeshi(2);
                getThirdClassKeshi(8);
                $scope.firstClassKeshiName = e.directory_name;
           }
        }
        $scope.refreshThirdKeshi = function(e){
            if(e.directory_id==8){
                getThirdClassKeshi(8)
            }
            else if(e.directory_id==1){
                getThirdClassKeshi(1)
            }
            else if(e.directory_id==4){
                getThirdClassKeshi(4)
            }
            else if(e.directory_id==7){
                getThirdClassKeshi(7)
            }    
        }
        $scope.testFilter = function(e){
            return e.parent_id == 2 || e.parent_id == 44;
        }     

        $scope.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: $scope.items,
                update: function (filteredItems, filterText) {
                    $scope.items = filteredItems;
                    if (filterText) {
                        console.log(filterText);
                    }
                }
            });
        };

        $scope.refreshItems = function () {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function () {
                getItems();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        $scope.goToItemDetail = function (item) {
            $state.go('BusinessItem', {itemName: item.text});
        }

        // $scope.toggleLeft = function () {
        //     $ionicSideMenuDelegate.toggleLeft();
        // };

        $scope.showConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Logout',
                template: '你确定退出吗?',
                buttons:[{
                    text:"取消",
                    type:"button-default",
                    onTap: function (e) {
                       return null;
                    }
                },{
                    text:"确定",
                    type:"button-balanced",
                    onTap: function (e) {
                        $scope.clearCache();
                    }
                }]
            });
        };
        // document.addEventListener("touchmove",function(e){
        // e.preventDefault();
        // });

        //日历控件
        var ipObj1 = {
            callback: function (val) {  //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            },
            disabledDates: [            //Optional
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1), //Optional
            to: new Date(2016, 10, 30), //Optional
            inputDate: new Date(),      //Optional
            mondayFirst: true,          //Optional
            disableWeekdays: [0],       //Optional
            closeOnSelect: false,       //Optional
            templateType: 'popup'       //Optional
        };

        $scope.openDatePicker = function(){
            ionicDatePicker.openDatePicker(ipObj1);
        };
        $scope.openJtsf = function(){
            $state.go("jtsf");
        }

        //modal
        //弹出提示信息
        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal1 = modal;
        });
        $scope.openModal1 = function() {
            $scope.modal1.show();
        };
        $scope.closeModal1 = function() {
            $scope.modal1.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal1.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal1.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal1.removed', function() {
            // Execute action
        });

        $scope.check = false;
        $scope.confirmRoles = function () {
            $scope.check = true;
            $scope.closeModal1();
        }

    }
    BusinessMainInterfaceCtrl.$inject = ['$scope', '$stateParams', '$cookieStore', '$state', '$ionicFilterBar','ionicDatePicker', '$ionicPopup','$ionicModal','$ionicNavBarDelegate','$http'];
})();
