(function(){
    angular
        .module("FormBuilderApp")
        .controller("CourseEditController", CourseEditController);

    function CourseEditController($scope, $routeParams) {
        alert($routeParams.count);
    }
})();