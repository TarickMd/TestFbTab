app.controller('homeController', ['$scope', '$http', function($scope, $http){
    $scope.email = {};
    $scope.subscribe = function() {
        $http.post('/subscribe', $scope.email).success(function(res){
            $scope.email.subscribeMe = '';
        }).error(function(err){
            console.log(err);
        });
    };
    $('.carousel').carousel({
        interval: 5000
    });
}]);