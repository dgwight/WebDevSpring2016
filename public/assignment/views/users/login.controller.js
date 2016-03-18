(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, UserService) {
        $scope.login = function() {
            alert("test");
            //UserService.findUserByCredentials(username, password, setCurrentUser);
        };

        function setCurrentUser(user) {
            UserService.setCurrentUser(user);
        }
    }
})();
