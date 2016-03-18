(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, UserService) {
        $scope.$location = $location;
        $scope.currentUser = function() {
            return UserService.getCurrentUser();
        }
        $scope.isAdmin = function() {
            return UserService.isAdmin();
        }
        $scope.logout = function() {
            UserService.setCurrentUser(null);
            $location.url('/login');
        }
    }
})();

