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

        function getAllUsers() {
            return users;
        }


        function findUserByCredentials(username, password, callback) {
            var found = false;
            for (user in users) {
                if (user.username == username) {
                    if (user.password == password) {
                        callback(user);
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
            users.append(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            for (user in users) {
                if (user._id == userId) {
                    users.remove(user);
                }
            }
            callback(users);
        }

        function updateUser(userId, user, callback) {
            deleteUserById(userId);
            createUser(user, callback);
        }


    }
})();