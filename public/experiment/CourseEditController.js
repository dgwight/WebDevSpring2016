(function(){
    angular
        .module("ex")
        .controller("CourseEditController", CourseEditController);

    function CourseEditController($scope, $routeParams) {
        alert($routeParams.count);
    }
})();