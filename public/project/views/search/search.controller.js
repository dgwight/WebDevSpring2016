(function(){
    angular
        .module("HandymanApp")
        .controller("FormsController", FormsController);

    function FormsController($scope, FormsService) {
        $scope.forms = FormsService.getAllForms();

        $scope.removeForm = function(index) {
            console.log(index);
            $scope.forms.splice(index, 1);
        }
    }
})();
