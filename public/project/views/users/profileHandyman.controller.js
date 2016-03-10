(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService) {
            $scope.profile =
            {
                username: UserService.getCurrentUser().username,
                password: UserService.getCurrentUser().password,
                firstName: UserService.getCurrentUser().firstName,
                lastName: UserService.getCurrentUser().lastName,
                email: UserService.getCurrentUser().email
            };

        $scope.update = function() {
            var user = {username: profile.username, password: $scope.profile.password,
                firstName: $scope.profile.firstName, lastName: $scope.profile.lastName,
                email: $scope.profile.email};
            UserService.updateUser($scope.currentUser, user, setCurrentUser);
        };

        function setCurrentUser(user) {
            $scope.currentUser = user;
        }
    }
})();