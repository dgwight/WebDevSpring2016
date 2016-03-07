(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, UserService) {
        $scope.users = UserService.getAllUsers();

        $scope.removeUser = function(index) {
            console.log(index);
            $scope.users.splice(index, 1);
        }
    }
})();