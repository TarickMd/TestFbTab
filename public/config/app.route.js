(function(){
    'use strict';

    angular.module('testTab').config(configFunc);

    function configFunc($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/main.client.view.html"
            })
            .state('a4b5', {
                url: "/a4b5",
                templateUrl: "views/audi-a4-b5.client.view.html"
            })
            .state('a4b6', {
                url: "/a4b6",
                templateUrl: "views/audi-a4-b6.client.view.html"
            })
            .state('a4b7', {
                url: "/a4b7",
                templateUrl: "views/audi-a4-b7.client.view.html"
            });
        $urlRouterProvider.otherwise('/');
    }
})();