angular.module('app').service('searchService', ['$filter', function($filter) {
    'use strict';

    var search = function(item, searchText) {
        if (searchText.length < 3) {
            return true;
        }
        if (item.name.toLowerCase().indexOf(searchText)!=-1) {
            return true;
        }
        return false;
    };  

    var service = {

        performSearch: function(cats, searchText) {
           var myCatsFiltered = $filter('filter')(cats, function (item) {
                return search(item, searchText);
           });
               
           return myCatsFiltered;
        }
    };

    return service;   
}]);