angular.module("app").filter('smile', function() {
    return function(val) {
        if (val > 0) {
            return val + ' :)';
        } else if (val < 0) {
            return val + ' :(';
        }

        return val;
    }
});