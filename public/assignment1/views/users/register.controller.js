(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService) {
        $scope.register = function(username, password, passwordC, email) {
            if (password == passwordC) {
                $location.url('/profile');
                var user = {username: username, password: password, email: email};
                UserService.createUser(user, setCurrentUser);
            }
        };

        $scope.login = function(loginUsername, loginPassword) {
            UserService.findUserByCredentials(loginUsername, loginPassword, setCurrentUser);
            alert(newUser.username);
        };

        function setCurrentUser(user) {
            if (user != null) {
                UserService.setCurrentUser(user);
                $location.url('/profile');
            }
        }
    }
})();
