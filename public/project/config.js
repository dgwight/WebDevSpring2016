(function(){
    angular
        .module("HandymanApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/registerCustomer", {
                templateUrl: "views/users/registerCustomer.view.html",
                controller: "RegisterCustomerController"
            })
            .when("/registerHandyman", {
                templateUrl: "views/users/registerHandyman.view.html",
                controller: "RegisterHandymanController"
            })
            .when("/profileHandyman", {
                templateUrl: "views/profile/profileHandyman.view.html",
                controller: "ProfileHandymanController"
            })
            .when("/hire", {
                templateUrl: "views/hire/hire.view.html",
            })
            .when("/search", {
                templateUrl: "views/search/search.view.html",
                controller: "SearchController"
            })
            .when("/customers", {
                templateUrl: "views/customers/customers.view.html",
                controller: "CustomersController"
            })
            .when("/handymen", {
                templateUrl: "views/handymen/handymen.view.html",
                controller: "HandymenController"
            })
            .when("/jobs", {
                templateUrl: "views/jobs/jobs.view.html",
                controller: "JobsController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();
