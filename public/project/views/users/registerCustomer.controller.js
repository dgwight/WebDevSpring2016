(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterCController", RegisterCController);

    function RegisterCController($scope, $location, UserService) {
        $scope.register = function(username, password, passwordC, email) {
            if (password == passwordC) {
                $location.url('/profile');
                var user = {username: username, password: password, email: email};
                UserService.createUser(user, setCurrentUser);
            }
        };

        function setCurrentUser(user) {
            UserService.setCurrentUser(user);
        }
    }
})();
