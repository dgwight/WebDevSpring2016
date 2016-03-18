(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, UserService) {
        alert("test");
        $scope.currentUser = UserService.getCurrentUser();
    }
})();