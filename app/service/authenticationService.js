var app = angular.module('app');

app.service('AuthenticationService', ['UserFactory', function (UserFactory) {
    var resource = UserFactory;
    var service = {
        checkLogin : function (allUsers, userEmail, userPassword) {
           var countOfUsers = allUsers.length;
            for(var i =0; i < countOfUsers; i++)
            {
                if(allUsers[i].name == userEmail)
                    if(allUsers[i].password == userPassword)
                    {
                        return allUsers[i];
                    }
            }
            return false;
        },
        registration : function (userData) {

        }
    };

    return service;
}
]);
