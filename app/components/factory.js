angular.module('app').factory('catsResource', function($resource){
    return $resource('/cats');             
});
