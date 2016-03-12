(function(){
    angular
        .module("HandymanApp")
        .controller("JobsController", JobsController);

    function JobsController($scope) {

        $scope.jobs = [
            {
                "customer" : "dill99pickal@aol.com",
                "handyman" : "wight.d@husky.neu.edu",
                "date" : new Date(2015, 3, 10),
                "skill" : "House Cleaning",
                "rate" : "15",
                "rating" : "4",
                "review" : "He was okay."
            },
            {
                "customer" : "dill99pickal@aol.com",
                "handyman" : "wight.d@husky.neu.edu",
                "date" : new Date(2015, 3, 8),
                "skill" : "Lawn Mowing",
                "rate" : "20",
                "rating" : "2",
                "review" : "He left patches."
            }
        ];

        $scope.addJob = addJob;
        $scope.removeJob = removeJob;
        $scope.selectJob = selectJob;
        $scope.updateJob = updateJob;

        function addJob(job) {
            var newJob = {
                customer   : job.customer,
                handyman   : job.handyman,
                date       : job.date,
                skill      : job.skill,
                rate       : job.rate,
                rating     : job.rating,
                review     : job.review
            };
            $scope.jobs.push(newJob);
        }

        function removeJob (job) {
            var index = $scope.jobs.indexOf(job);
            $scope.jobs.splice(index, 1);
        }

        function selectJob(index) {
            $scope.selectedJobIndex = index;
            $scope.job = {
                customer   : $scope.jobs[index].customer,
                handyman   : $scope.jobs[index].handyman,
                date       : $scope.jobs[index].date,
                skill      : $scope.jobs[index].skill,
                rate       : $scope.jobs[index].rate,
                rating     : $scope.jobs[index].rating,
                review     : $scope.jobs[index].review
            };
        }

        function updateJob(job) {
            $scope.jobs[$scope.selectedJobIndex] = {
                customer   : job.customer,
                handyman   : job.handyman,
                date       : job.date,
                skill      : job.skill,
                rate       : job.rate,
                rating     : job.rating,
                review     : job.review
            };
        }
    }
})();