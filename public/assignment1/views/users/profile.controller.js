(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService) {
            $scope.user =
            {
                _id: UserService.getCurrentUser()._id,
                username: UserService.getCurrentUser().username,
                password: UserService.getCurrentUser().password,
                firstName: UserService.getCurrentUser().firstName,
                lastName: UserService.getCurrentUser().lastName,
                email: UserService.getCurrentUser().email
            };

        $scope.update = function(user) {
             UserService.updateUser(user._id, user, setCurrentUser);
        };

        function setCurrentUser(user) {
            $scope.setCurrentUser(user);
        }
    }
})();