angular.module('app').factory('catsFactory', function($resource){
    return $resource('/cats');             
});
