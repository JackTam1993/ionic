(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);


    function routeConfig($stateProvider, $urlRouterProvider) {

        var routes, setRoutes;

        routes = [
            {name: 'BusinessLogin', ctrl: 'BusinessLoginCtrl', url: 'business/login/', tpl: 'business/login/login'},
            {
                name: 'BusinessMainInterface',
                ctrl: 'BusinessMainInterfaceCtrl',
                url: 'business/knowledge',
                tpl: 'business/knowledge/knowledge'
            },
            {name:'BusinessItem',ctrl:'BusinessItemCtrl',url:'business/item/:itemName',tpl:'business/item/item'},
             {name:'changepasswd',ctrl:'changepasswdCtrl',url:'business/changepasswd/:name',tpl:'business/changepasswd/changepasswd'},
             {name:'jtsf',ctrl:'jtsfCtrl',url:'business/jtsf/:name',tpl:'business/jtsf/jtsf'},
             {name:'gxysf',ctrl:'gxysfCtrl',url:'business/gxysf/:name',tpl:'business/gxysf/gxysf'},
             {name:'pdf',ctrl:'pdfCtrl',url:'business/pdf',tpl:'business/pdf/generic/web/viewer'}
        ];

        setRoutes = function (route) {
            var config, name;
            config = {
                url: "/" + route.url,
                templateUrl: 'script/app/' + route.tpl + '.html',
                controller: route.ctrl
            };
            $stateProvider.state(route.name, config);
            return $stateProvider;
        };


        routes.forEach(function (route) {
            return setRoutes(route);
        });


        $urlRouterProvider.otherwise('/business/knowledge');

    }
})();


