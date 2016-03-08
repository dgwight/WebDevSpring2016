(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService) {
        $scope.register = function(username, password, passwordC, email) {
            if (password == passwordC) {
                $location.url('/profile');
                var user = {username: username, password: password, email: email};
                UserService.createUser(user);

            }
        }
    }
})();
