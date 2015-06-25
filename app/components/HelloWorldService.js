angular.module("app").factory("HelloWorldService", function () {

    function getAllUsers() {
        var arrayOfUsers = [];
        var i;
        for (i = 0; i < 10; i++) {
            arrayOfUsers.push({id: i, username: "test " + i});
        }
        return arrayOfUsers;
    }

    return {
        getAllUsers: getAllUsers
    };
});