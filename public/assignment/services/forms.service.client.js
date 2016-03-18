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
            findAllFormsForUser: findAllFormsForUser,
            createFormForUser: createFormForUser,
            deleteFormById: deleteFormById,
            setCurrentForm: setCurrentForm,
            updateForm: updateForm,
            getCurrentForm: getCurrentForm,
            findFormByCredentials: findFormByCredentials,
        };
        return service;

        var currentForm = null;

        function setCurrentForm(form) {
            currentForm = form;
        }

        function getCurrentForm() {
            return currentForm;
        }

        function findAllFormsForUser(userId) {
            var userForms = [];
            for (i = 0; i < forms.length; i++) {
                if (forms[i].userId === userId) {
                    userForms.push(forms[i]);
                }
            }
            return userForms;
         }

        function findFormByCredentials(formname, password, callback) {
            var found = false;
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formname === formname) {
                    if (forms[i].password === password) {
                        callback(forms[i]);
                        found = true;
                    }
                }
            }
            if (!found) {
                callback(null);
            }
        }

        function createFormForUser(userId, form, callback) {
            form._id = (new Date).getTime();
            form.userId = userId;
            forms.push(form);
            callback(form);
        }

        function deleteFormById(formId, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i]._id === formId) {
                    forms.splice(i, 1);
                }
            }
            callback(forms);
        }

        function updateForm(formId, form, callback) {
            var found = false;
            for (var i = 0; i < forms.length; i++) {
                if (forms[i]._id === formId) {
                    forms[i] = form;
                    alert(form.formname);
                    callback(form);
                    break;
                }
            }
            if (!found) {
                callback(null);
            }
        }
    }
})();