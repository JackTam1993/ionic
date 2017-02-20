(function() {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);


    function routeConfig($stateProvider, $urlRouterProvider) {

        var routes, setRoutes;

        routes = [{
                name: 'BusinessLogin',
                ctrl: 'BusinessLoginCtrl',
                url: 'business/login/',
                tpl: 'business/login/login'
            }, {
                name: 'BusinessMainInterface',
                ctrl: 'BusinessMainInterfaceCtrl',
                url: 'business/knowledge',
                tpl: 'business/knowledge/knowledge'
            }, {
                name: 'BusinessItem',
                ctrl: 'BusinessItemCtrl',
                url: 'business/item/:itemName',
                tpl: 'business/item/item'
            }, {
                name: 'changepasswd',
                ctrl: 'changepasswdCtrl',
                url: 'business/changepasswd',
                tpl: 'business/changepasswd/changepasswd'
            }, {
                name: 'jtsf',
                ctrl: 'jtsfCtrl',
                url: 'business/sf/jtsf?doctor_group_id&hospital_id&doctor_id',
                tpl: 'business/sf/jtsf/jtsf'
            }, {
                name: 'gxysf',
                ctrl: 'gxysfCtrl',
                url: 'business/sf/gxysf?doc&doctor_group_id&hospital_id&doctor_id',
                tpl: 'business/sf/gxysf/gxysf'
            }, {
                name: 'tnbsf',
                ctrl: 'tnbsfCtrl',
                url: 'business/sf/tnbsf?doc&doctor_group_id&hospital_id&doctor_id',
                tpl: 'business/sf/tnbsf/tnbsf'
            }, {
                name: 'gxysfls',
                ctrl: 'gxysflsCtrl',
                url: 'business/sf/gxysfls?personId&personName&sex&age&hospital_id?doctor_group_id&doctor_id',
                tpl: 'business/sf/gxysfls/gxysfls',
                cache: 'false'
            }, {
                name: 'tnbsfls',
                ctrl: 'tnbsflsCtrl',
                url: 'business/sf/tnbsfls?personId&personName&sex&age&hospital_id?doctor_group_id&doctor_id',
                tpl: 'business/sf/tnbsfls/tnbsfls',
                cache: 'false'
            }, {
                name: 'myWork',
                ctrl: 'myWorkCtrl',
                url: 'business/myWork?doctor_id&hospital_id&doctor_group_id',
                tpl: 'business/myWork/myWork'
            },{
                name: 'todolist',
                ctrl: 'todolistCtrl',
                url: 'business/todolist',
                tpl: 'business/todolist/todolist'
            },{
                name: 'listdetail',
                ctrl: 'listdetailCtrl',
                url: 'business/listdetail',
                tpl: 'business/listdetail/listdetail'
            },{
                name: 'schedule',
                ctrl: 'scheduleCtrl',
                url: 'business/schedule',
                tpl: 'business/schedule/schedule'
            },{
                name: 'pdf',
                ctrl: 'pdfCtrl',
                url: 'business/pdf/:url',
                tpl: 'business/pdf/pdf'
            }, {
                name: 'sfjlb',
                ctrl: 'sfjlbCtrl',
                url: 'business/sf/sfjlb?personName&personId&sex&times&age&hospital_id&thisDate&doctor_group_id&from&doctor_id',
                tpl: 'business/sf/sfjlb/sfjlb'
            }, {
                name: 'tnbsfjlb',
                ctrl: 'tnbsfjlbCtrl',
                url: 'business/sf/tnbsfjlb?personName&personId&sex&times&age&hospital_id&thisDate&doctor_group_id&from&doctor_id',
                tpl: 'business/sf/tnbsfjlb/tnbsfjlb'
            }, {
                name: 'sign',
                ctrl: 'signCtrl',
                url: 'business/sign?person_name&sex&certifi_num&nation&contact_phone&contact_address&doctor_id&census_register_address&doctor_group_id&neighborhoodCommittee&provinceName&cityName&districtName&streetName&isChild&borndate&guardianCertifi&guardianName',
                tpl: 'business/sign/sign'
            }, {
                name: 'jtcy',
                ctrl: 'jtcyCtrl',
                url: 'business/signManagement/CreateFamily/jtcy?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/CreateFamily/jtcy/jtcy'
            }, {
                name: 'jtcy2',
                ctrl: 'jtcyCtrl2',
                url: 'business/signManagement/CreateFamily/jtcy2?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/CreateFamily/jtcy/jtcy2'
            }, {
                name: 'cjjt',
                ctrl: 'cjjtCtrl',
                url: 'business/signManagement/CreateFamily/cjjt',
                tpl: 'business/signManagement/CreateFamily/cjjt/cjjt'
            },

            {
                name: 'yqyjm',
                ctrl: 'yqyjmCtrl',
                url: 'business/signManagement/familyManagement/yqyjm?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/yqyjm/yqyjm'
            }, {
                name: 'yqyjm2',
                ctrl: 'yqyjmCtrl2',
                url: 'business/signManagement/familyManagement/yqyjm2?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/yqyjm/yqyjm2'
            }, {
                name: 'yqyjm3',
                ctrl: 'yqyjmCtrl3',
                url: 'business/signManagement/familyManagement/yqyjm3?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/yqyjm/yqyjm3'
            }, {
                name: 'jzxx',
                ctrl: 'jzxxCtrl',
                url: 'business/signManagement/familyManagement/jzxx?hospital_id&doctor_group_id&doctor_id&family_id&person_id&treat_date&where&addnew&person_name',
                tpl: 'business/signManagement/familyManagement/jzxx/jzxx'
            }, {
                name: 'jtxx',
                ctrl: 'jtxxCtrl',
                url: 'business/signManagement/familyManagement/jtxx?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/jtxx/jtxx'
            }, {
                name: 'jtxxlb',
                ctrl: 'jtxxlbCtrl',
                url: 'business/signManagement/familyManagement/jtxxlb?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/jtxxlb/jtxxlb'
            }, {
                name: 'jtxxlb2',
                ctrl: 'jtxxlbCtrl2',
                url: 'business/signManagement/familyManagement/jtxxlb2?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/jtxxlb/jtxxlb2'
            }, {
                name: 'jtxxlb3',
                ctrl: 'jtxxlbCtrl3',
                url: 'business/signManagement/familyManagement/jtxxlb3?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/jtxxlb/jtxxlb3'
            }, {
                name: 'jtxxlb4',
                ctrl: 'jtxxlbCtrl4',
                url: 'business/signManagement/familyManagement/jtxxlb4?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where&addInfo&isChild',
                tpl: 'business/signManagement/familyManagement/jtxxlb/jtxxlb4'
            }, {
                name: 'jmxxlb',
                ctrl: 'jmxxlbCtrl',
                url: 'business/signManagement/familyManagement/jmxxlb?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/jmxxlb/jmxxlb'
            }, {
                name: 'wqyjm',
                ctrl: 'wqyjmCtrl',
                url: 'business/signManagement/familyManagement/wqyjm?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/wqyjm/wqyjm'
            }, {
                name: 'wqyjm2',
                ctrl: 'wqyjmCtrl2',
                url: 'business/signManagement/familyManagement/wqyjm2?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/wqyjm/wqyjm2'
            }, {
                name: 'wqyjm3',
                ctrl: 'wqyjmCtrl3',
                url: 'business/signManagement/familyManagement/wqyjm3?hospital_id&doctor_group_id&doctor_id&family_id&person_id&where',
                tpl: 'business/signManagement/familyManagement/wqyjm/wqyjm3'
            }, {
                name: 'qygl',
                ctrl: 'qyglCtrl',
                url: 'business/signManagement/familyManagement/qygl?hospital_id&doctor_group_id&doctor_id',
                tpl: 'business/signManagement/familyManagement/qygl/qygl'
            }
        ];

        setRoutes = function(route) {

            var config, name;
            config = {
                url: "/" + route.url,
                templateUrl: 'script/app/' + route.tpl + '.html',
                controller: route.ctrl
            };
            $stateProvider.state(route.name, config);
            return $stateProvider;
        };


        routes.forEach(function(route) {
            return setRoutes(route);
        });


        //$urlRouterProvider.otherwise('/business/knowledge');

    }
})();
