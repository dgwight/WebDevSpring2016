(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, UserService) {
        $scope.users = UserService.getAllUsers();

        $scope.deleteUserbyId = function(user) {
            UserService.deleteUserById(user._id);
        }

        $scope.createUser = function(user) {
            UserService.deleteUserById(user._id);
        }
    }
})();