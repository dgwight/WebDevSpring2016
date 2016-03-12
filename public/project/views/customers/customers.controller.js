(function(){
    angular
        .module("HandymanApp")
        .controller("CustomersController", CustomersController);

    function CustomersController($scope) {

        $scope.customers = [
            {
                "username" : "dill99pickal@aol.com",
                "password" : "password",
                "firstName" : "dylan",
                "lastName" : "wight",
                "address" : "55 Calumet St.",
                "zipcode" : "02120",
                "creditCard" : "1111222233334444"
            }
        ];

        $scope.addCustomer = addCustomer;
        $scope.removeCustomer = removeCustomer;
        $scope.selectCustomer = selectCustomer;
        $scope.updateCustomer = updateCustomer;

        function addCustomer(customer) {
            var newCustomer = {
                username   : customer.username,
                password   : customer.password,
                firstName  : customer.firstName,
                lastName   : customer.lastName,
                address    : customer.address,
                zipcode    : customer.zipcode,
                creditCard : customer.creditCard
            };
            $scope.customers.push(newCustomer);
        }

        function removeCustomer (customer) {
            var index = $scope.customers.indexOf(customer);
            $scope.customers.splice(index, 1);
        }

        function selectCustomer(index) {
            $scope.selectedCustomerIndex = index;
            $scope.customer = {
                username   : $scope.customers[index].username,
                password   : $scope.customers[index].password,
                firstName  : $scope.customers[index].firstName,
                lastName   : $scope.customers[index].lastName,
                address    : $scope.customers[index].address,
                zipcode    : $scope.customers[index].zipcode,
                creditCard : $scope.customers[index].creditCard
            };
        }

        function updateCustomer(customer) {
            $scope.customers[$scope.selectedCustomerIndex] = {
                username   : customer.username,
                password   : customer.password,
                firstName  : customer.firstName,
                lastName   : customer.lastName,
                address    : customer.address,
                zipcode    : customer.zipcode,
                creditCard : customer.creditCard
            };
        }
    }
})();