(function() {
    'use strict';

    angular.module("app")
        .controller("AppCtrl", ['$state', '$rootScope', '$cookieStore', '$cookies', function($state, $rootScope, $cookieStore, $cookies) {
            $rootScope.rows = 8;
            // $rootScope.platform_context_path = 'http://61.28.113.182:2082/';//开发环境
            // $rootScope.platform_context_path = 'http://61.28.113.182:4545/';//测试环境
            $rootScope.platform_context_path = '/';
            $rootScope.relationList = [{
                key: "父亲",
                value: "1",
                order: "0"
            }, {
                key: "母亲",
                value: "2",
                order: "0"
            }, {
                key: "儿子",
                value: "3",
                order: "1"
            }, {
                key: "女儿",
                value: "4",
                order: "1"
            }, {
                key: "岳父",
                value: "5",
                order: "0"
            }, {
                key: "岳母",
                value: "6",
                order: "0"
            }, {
                key: "丈夫",
                value: "7",
                order: "0"
            }, {
                key: "妻子",
                value: "8",
                order: "0"
            }, {
                key: "祖父",
                value: "9",
                order: "0"
            }, {
                key: "祖母",
                value: "10",
                order: "0"
            }, {
                key: "外祖父",
                value: "11",
                order: "0"
            }, {
                key: "外祖母",
                value: "12",
                order: "0"
            }, {
                key: "孙子",
                value: "13",
                order: "1"
            }, {
                key: "孙女",
                value: "14",
                order: "1"
            }, {
                key: "外孙子",
                value: "15",
                order: "1"
            }, {
                key: "外孙女",
                value: "16",
                order: "1"
            }, {
                key: "儿媳",
                value: "17",
                order: "1"
            }, {
                key: "女婿",
                value: "18",
                order: "1"
            }, {
                key: "亲戚",
                value: "19",
                order: "1"
            }, {
                key: "亲家公",
                value: "20",
                order: "0"
            }, {
                key: "亲家婆",
                value: "21",
                order: "0"
            }, {
                key: "曾孙",
                value: "22",
                order: "1"
            }, {
                key: "曾孙女",
                value: "23",
                order: "1"
            }, {
                key: "孙媳",
                value: "24",
                order: "1"
            }, {
                key: "兄弟",
                value: "25",
                order: "1"
            }, {
                key: "姐妹",
                value: "26",
                order: "1"
            }, {
                key: "公公",
                value: "27",
                order: "0"
            }, {
                key: "婆婆",
                value: "28",
                order: "0"
            }, {
                key: "曾外孙",
                value: "29",
                order: "1"
            }, {
                key: "曾外孙女",
                value: "30",
                order: "1"
            }, {
                key: "孙女婿",
                value: "31",
                order: "1"
            }, {
                key: "曾祖父",
                value: "32",
                order: "0"
            }, {
                key: "曾祖母",
                value: "33",
                order: "0"
            }, {
                key: "曾外祖父",
                value: "34",
                order: "0"
            }, {
                key: "曾外祖母",
                value: "35",
                order: "0"
            }, {
                key: "朋友",
                value: "36",
                order: "1"
            }];

            $rootScope.orderList = [{
                value: "1"
            }, {
                value: "2"
            }, {
                value: "3"
            }, {
                value: "4"
            }, {
                value: "5"
            }, {
                value: "6"
            }, {
                value: "7"
            }, {
                value: "8"
            }, {
                value: "9"
            }];

            //if(!angular.isDefined(BusinessLoginService.userInfo()) && window.location.href.indexOf('/#/business/login/')==-1){
            //    window.location.href='/#/business/login/';
            //}
            // if(localStorage.username != undefined && localStorage.username!=null){
            //     $state.go('BusinessMainInterface',{id:localStorage.username});
            // }
            // else{
            //     $state.go('BusinessLogin');
            // }

            /*document.addEventListener("deviceready", function () {

                var type = $cordovaNetwork.getNetwork();

                var isOnline = $cordovaNetwork.isOnline();

                var isOffline = $cordovaNetwork.isOffline();


                // listen for Online event
                $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
                    var onlineState = networkState;
                })

                // listen for Offline event
                $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
                    var offlineState = networkState;
                })

            }, false);*/
        }]);
})();
