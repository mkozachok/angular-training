var app = angular.module('app');

app.service('AuthenticationService', ['UserFactory', function (UserFactory) {
    var service = {
        checkLogin : function (allUsers, userEmail, userPassword) {
           var countOfUsers = allUsers.length;
            for(var i =0; i < countOfUsers; i++)
            {
                if(allUsers[i].email == userEmail)
                    if(allUsers[i].password == userPassword)
                    {
                        return allUsers[i];
                    }
            }
            return false;
        },
        registration : function (userName, userEmail, userPassword) {
            var resource = UserFactory;
            var temp = {name: userName, password: userPassword, email: userEmail};
            resource.save(temp);
        }
    };

    return service;
}
]);
