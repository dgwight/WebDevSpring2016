(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {    "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]        },
            {    "_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]        },
            {    "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]        },
            {    "_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {    "_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]        }
        ];

        var service = {
            getAllUsers: getAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            setCurrentUser: setCurrentUser,
            updateUser: updateUser,
            getCurrentUser: getCurrentUser,
            findUserByCredentials: findUserByCredentials,
            isAdmin:isAdmin
        };
        return service;

        var currentUser = null;

        function setCurrentUser(user) {
            currentUser = user;
        }

        function getCurrentUser() {
            return currentUser;
        }

        function isAdmin() {
            if (currentUser == null) {
                return false;
            }
            for (var i = 0; i < currentUser.roles.length; i++) {
                if (currentUser.roles[i] === "admin") {
                    return true;
                }
            }
            return false;
        }

        function getAllUsers() {
            return users;
        }

        function findUserByCredentials(username, password, callback) {
            var found = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    if (users[i].password === password) {
                        callback(users[i]);
                        found = true;
                    }
                }
            }
            if (!found) {
                callback(null);
            }
        }

        function createUser(user, callback) {
            user._id = (new Date).getTime();
            users.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            for (var i = 0; i < users.length; i++) {
                if (users[i]._id === userId) {
                    users.splice(i, 1);
                }
            }
            callback(users);
        }

        function updateUser(userId, user, callback) {
            var found = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i]._id === userId) {
                    users[i] = user;
                    alert(user.username);
                    callback(user);
                    break;
                }
            }
            if (!found) {
                callback(null);
            }
        }
    }
})();