(function() {
    angular.module('app.business')
        .controller('myWorkCtrl', ['$scope', '$http', '$stateParams', '$state', '$rootScope', '$q', myWorkCtrl]);

    function myWorkCtrl($scope, $http, $stateParams, $state, $rootScope, $q) {

        var hospitalId = $stateParams.hospital_id;
        var doctorId = $stateParams.doctor_id;
        var doctorGroupId = $stateParams.doctor_group_id;
        var platform_context_path = $rootScope.platform_context_path;

        var urlSign = platform_context_path + 'yjyb/personpublic/unsign/list?hospitalId=' + hospitalId;
        var urlSuifang = platform_context_path + 'yjyb/mywork/getremindlistapp?doctor_id=' + doctorId + '&sign_type=2&page_type=patient_cont';
        var urlSuifang_gxy = platform_context_path + 'yjyb/mywork/getremindlistapp?doctor_id=' + doctorId + '&sign_type=2&page_type=patient_cont&pkg_type=2';
        var urlSuifang_tnb = platform_context_path + 'yjyb/mywork/getremindlistapp?doctor_id=' + doctorId + '&sign_type=2&page_type=patient_cont&pkg_type=3';
        $scope.show = true;

        $scope.goBack = function() {
                if (iosDevice()) {
                    window.location.href = "gobacktoclass:";
                } else if (androidDevice()) {
                    window.jsinterface.toPrevious();
                }
                // $state.go('knowledge');
            }
            // 搜索框
        $scope.clearBox = function() {
                $scope.searchText = '';
            }
            /*js判断设备类型--start--csk20161013*/
        function androidDevice() {
            if (/(Android)/i.test(navigator.userAgent))
                return true;
        }

        function iosDevice() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))
                return true;
        }
        /*--end--js判断设备类型*/

        $scope.seecontendSign = function() {
            $("#dqy").addClass('color-blue');
            $("#dsf").removeClass('color-blue');

            getInfo(urlSign);
            $scope.show = false;
            console.log(1)
        }
        $scope.seecontendSuifang = function() {
            $("#dsf").addClass('color-blue');
            $("#dqy").removeClass('color-blue');

            getInfo(urlSuifang);
            $scope.show = true;

        }
        $scope.seecontendSuifang_gxy = function() {
            $("#dsf").addClass('color-blue');
            $("#dqy").removeClass('color-blue');
            $("#dqy-cont,#dsf-cont").toggleClass('undis');
            getInfo(urlSuifang_gxy);
            $scope.show = true;
        }
        $scope.seecontendSuifang_tnb = function() {
                $("#dsf").addClass('color-blue');
                $("#dqy").removeClass('color-blue');
                $("#dqy-cont,#dsf-cont").toggleClass('undis');
                getInfo(urlSuifang_tnb);
                $scope.show = true;
            }
            //var doctor_group_id = 40001;
        function getInfo(url) {
            $http.get(url).success(function(response) {
                $scope.myworkDetail = response;
                console.log(response);
            })
        }
        // getInfo(urlSuifang);

        // $scope.doRefresh = function() {
        //     getInfo(urlSuifang);
        //     $scope.$broadcast('scroll.refreshComplete');
        // }

        $scope.gotolist = function() {
            $state.go('todolist');
        }

        $scope.gotoSchedule = function() {
            $state.go('schedule');
        }

        // function getData(id, pkg) {
        //     var person_id = id;
        //     var parent_name = 'O0';
        //     var hospital_id = hospitalId;
        //     var gwb_type = pkg;
        //     var folder = '/home/yjyb/gwb/';
        //     var child_date = '2016-10-13';

        //     var data = {
        //         person_id: person_id,
        //         parent_name: parent_name,
        //         hospital_id: hospital_id,
        //         gwb_type: gwb_type,
        //         folder: folder,
        //         child_date: child_date
        //     };
        //     $http({
        //         method: 'post',
        //         url: platform_context_path + 'yjyb/hospital/gwb/pathlist',
        //         data: data,
        //         cache: false
        //     }).success(function(req) {
        //         if (req.statusCode == 200) {

        //             $scope.doctorList = angular.fromJson(req.result);
        //             $scope.length = $scope.doctorList.length;
                    
        //         }

        //     })

        // }

        $scope.goForDetail = function(name, id, sex, age, pkg) {

            var person_id = id;
            var parent_name = 'O0';
            var hospital_id = hospitalId;
            var gwb_type = pkg;
            var folder = '/home/yjyb/gwb/';
            var child_date = '2016-10-13';

            var data = {
                person_id: person_id,
                parent_name: parent_name,
                hospital_id: hospital_id,
                gwb_type: gwb_type,
                folder: folder,
                child_date: child_date
            };
            $http({
                method: 'post',
                url: platform_context_path + 'yjyb/hospital/gwb/pathlist',
                data: data,
                cache: false
            }).success(function(req) {
                if (req.statusCode == 200) {

                    $scope.doctorList = angular.fromJson(req.result);
                    $scope.length = $scope.doctorList.length;
                    if (pkg == '2') {
                        $state.go('sfjlb', { personName: name, personId: id, sex: sex, times: $scope.length, age: age, hospital_id: hospitalId, doctor_group_id: doctorGroupId, from: 2 ,doctor_id:doctorId})
                    }
                    if (pkg == '3') {
                        $state.go('tnbsfjlb', { personName: name, personId: id, sex: sex, times: $scope.length, age: age, hospital_id: hospitalId, doctor_group_id: doctorGroupId, from: 2 ,doctor_id:doctorId})
                            //console.log(doctor_group_id)
                    }

                }

            })


        }


    }


})();
