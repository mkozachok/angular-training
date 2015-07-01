//var app = angular.module('app');
//
//app.factory('userInterceptor', ['$q','$promise','$location', function($q, $promise, $location){
//    return {
//        response: function(response){
//            return $promise.then(
//                function success(response) {
//                    return response;
//                },
//                function error(response) {
//                    if(response.status === 404){
//                        $location.path('#/home');
//                        return $q.reject(response);
//                    }
//                    else{
//                        return $q.reject(response);
//                    }
//                });
//        }
//    };
//}]);