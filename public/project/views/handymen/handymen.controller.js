(function(){
    angular
        .module("HandymanApp")
        .controller("HandymenController", HandymenController);

    function HandymenController($scope) {

        $scope.handymen = [
            {
                "username" : "wight.d@husky.neu.edu",
                "password" : "password",
                "firstName" : "dylan",
                "lastName" : "wight",
                "zipcode" : "02120",
                "skill1" : "House Cleaning",
                "rate1"   : "15",
                "skill2" : "Lawn Mowing",
                "rate2"   : "20",
                "skill3" : "Yard Work",
                "rate3"   : "15"
            },
            {
                "username" : "janesmith@aol.com",
                "password" : "password",
                "firstName" : "jane",
                "lastName" : "smith",
                "zipcode" : "02120",
                "skill1" : "House Cleaning",
                "rate1"   : "16",
                "skill2" : "Lawn Mowing",
                "rate2"   : "25",
                "skill3" : "Yard Work",
                "rate3"   : "20"
            },
            {
                "username" : "johnsmith@aol.com",
                "password" : "password",
                "firstName" : "jonathon",
                "lastName" : "smith",
                "zipcode" : "02120",
                "skill1" : "House Cleaning",
                "rate1"   : "16",
                "skill2" : "Lawn Mowing",
                "rate2"   : "25",
                "skill3" : "Yard Work",
                "rate3"   : "20"
            }
        ];

        $scope.addHandyman = addHandyman;
        $scope.removeHandyman = removeHandyman;
        $scope.selectHandyman = selectHandyman;
        $scope.updateHandyman = updateHandyman;

        function addHandyman(handyman) {
            var newHandyman = {
                username   : handyman.username,
                password   : handyman.password,
                firstName  : handyman.firstName,
                lastName   : handyman.lastName,
                zipcode    : handyman.zipcode,
                skill1     : handyman.skill1,
                rate1      : handyman.rate1,
                skill2     : handyman.skill2,
                rate2      : handyman.rate2,
                skill3     : handyman.skill3,
                rate3      : handyman.rate3
            };
            $scope.handymen.push(newHandyman);
        }

        function removeHandyman(handyman) {
            var index = $scope.handymen.indexOf(handyman);
            $scope.handymen.splice(index, 1);
        }

        function selectHandyman(index) {
            $scope.selectedHandymanIndex = index;
            $scope.handyman = {
                username   : $scope.handymen[index].username,
                password   : $scope.handymen[index].password,
                firstName  : $scope.handymen[index].firstName,
                lastName   : $scope.handymen[index].lastName,
                zipcode    : $scope.handymen[index].zipcode,
                skill1     : $scope.handymen[index].skill1,
                rate1      : $scope.handymen[index].rate1,
                skill2     : $scope.handymen[index].skill2,
                rate2      : $scope.handymen[index].rate2,
                skill3     : $scope.handymen[index].skill3,
                rate3      : $scope.handymen[index].rate3
            };
        }

        function updateHandyman(handyman) {
            $scope.handymen[$scope.selectedHandymanIndex] = {
                username   : handyman.username,
                password   : handyman.password,
                firstName  : handyman.firstName,
                lastName   : handyman.lastName,
                zipcode    : handyman.zipcode,
                skill1     : handyman.skill1,
                rate1      : handyman.rate1,
                skill2     : handyman.skill2,
                rate2      : handyman.rate2,
                skill3     : handyman.skill3,
                rate3      : handyman.rate3
            };
        }
    }
})();