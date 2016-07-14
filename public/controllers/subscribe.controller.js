(function(){
    'use strict';

    angular.module('testTab').controller('subscribeController', subscribeController);

    subscribeController.$inject = ['$http'];

    function subscribeController($http) {
        var scope = this;
        scope.test = 'hallo';
        scope.email = {};
        scope.preloader = false;

        scope.sendMail = function () {
            scope.preloader = true;
            scope.successMessage = '';
            scope.errorMessage = '';
            $http.post('/subscribe', scope.email).success(function (res) {
                scope.preloader = false;
                scope.success = res.success;
                if (res.success) {
                    scope.successMessage = res.message;
                } else {
                    scope.errorMessage = res.message;
                }
                scope.email.subscribeMe = '';
            }).error(function (err) {
                console.log(err);
            });
        };

        $('.carousel').carousel({
            interval: 5000
        });
    }
})();