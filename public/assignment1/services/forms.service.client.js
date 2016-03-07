(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormsService", FormsService);

    function FormsService() {
        var forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234},
        ];

        var service = {
            getAllForms: getAllForms
        };
        return service;

        function getAllForms() {
            return forms;
        }
    }
})();