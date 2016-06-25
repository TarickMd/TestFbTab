app.controller('homeController', ['$scope', '$http', function($scope, $http){
    $scope.email = {};
    $scope.subscribe = function() {
        $http.post('/subscribe', $scope.email).success(function(res){
            console.log(res);
        }).error(function(err){
            console.log(err);
        });
    };
}]);