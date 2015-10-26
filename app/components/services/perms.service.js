angular.module('app').factory('permsService', function (authService) {
    var user = authService.getUser() || null;
    function isCatOwner(cat) {
        if (user) {
            return user.name == cat.owner;
        }

        return false;
    };

    return {
        isCatOwner: isCatOwner
    }
});