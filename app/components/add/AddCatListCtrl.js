//'use strict';

__mainApp
.controller('AddCatCtrl', ['$scope', 'myCatsService', 'shareService'
    , function($scope, mcs, share, pid) {
        this.catName = '';
        this.catImage='http://';
        this.result = [];

        
        var self = this;
        this.refreshAddResult = function(response)
        {
            if(typeof response === 'object' && response.hasOwnProperty('result'));
            self.result = response.result;
        }

        this.addCat = function()
        {
            mcs.addCat(self.catName, self.catImage, self.refreshAddResult);
        }

}]);

