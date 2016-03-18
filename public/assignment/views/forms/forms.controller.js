(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);

    function FormsController($scope, FormsService) {
        $scope.forms = FormsService.findAllFormsForUser(currentUser);

        function setForms(userForms) {
            forms = userForms;
        }

        $scope.deleteUserbyId = function(user) {
            UserService.deleteUserById(user._id);
        }

        $scope.createUser = function(user) {
            var newUser = {
                username   : user.username,
                password   : user.password,
                roles      : user.roles,
            };
            alert(user.username);
            UserService.createUser(newUser, created);
        };

        $scope.selectUser = function(selectedUser) {
            $scope.user = {
                _id        : selectedUser._id,
                username   : selectedUser.username,
                password   : selectedUser.password,
                roles      : selectedUser.roles
            };
        };

        $scope.updateUser = function(updatedUser) {
            var updatedUser = {
                _id        : updatedUser._id,
                username   : updatedUser.username,
                password   : updatedUser.password,
                roles      : updatedUser.roles
            };
            UserService.updateUser(updatedUser._id, updatedUser, created);
        };

        function created(user) {
            $scope.user = {
                username   : "",
                password   : "",
                roles      : "",
            };
        }

        $scope.testAlert = function() {
            alert("test");
        };
    }
})();