angular.module('app').service('sortMethodService', ['$filter', function($filter) {
    'use strict';
    var myOptions =  [
        {sort: '-name', value: 'name DESC'}, 
        {sort: 'name', value: 'name ASC'}, 
        {sort: '-likes', value: 'likes'}
    ];

    var service = {
        change: function(cats, sortMethod) {
            var sort;
            for(var opt in myOptions) {
                if(myOptions[opt].value == sortMethod) {
                    sort = myOptions[opt].sort;
                }
            }
            var myCatsFiltered = $filter('orderBy')(cats, sort); 
            return myCatsFiltered;
        },
        myOptions: myOptions

    };

    return service;
    
}]);