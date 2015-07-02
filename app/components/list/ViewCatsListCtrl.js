'use strict';
__mainApp
.controller('ViewCatsListCtrl', 
    ['$scope', 'myCatsService', 'shareService', '$location', '$resource' , 'catsList' 
    ,function($scope, mcs, share, $location, $resource, catsList) {
        this.selectedCat = null;
        this.filterBy = '';
        this.cats = share.cats = catsList;
        this.tooltip = [];

        this.result = [];

        
        var self = this;

        this.filterExpression = function(element)
        {
            return element.name.indexOf(share.filterExpression) === 0;
        }

        this.selectCat = function(cat) 
        {
            self.selectedCat = mcs.selectCat(cat);
            mcs.displayCat();
        };

        this.toggle = function() 
        {
          if( true === self.selectedCat.hasOwnProperty('name') )
            {
                self.selectedCat.click++;
            }
        };

        this.voteUp = function() 
        {
                mcs.voteCatUp();
        }

        this.voteDown = function() 
        {
                mcs.voteCatDown();
        }

        $scope.$watch('list.filterBy', function()
        {
             self.tooltip = [];
             if(self.filterBy === '') return;
            for(var catId in self.cats)
            {
                var cat = self.cats[catId];
                if(cat.hasOwnProperty('name') && cat.name.indexOf(self.filterBy) === 0 )
                self.tooltip.push(cat.name);
            }

        });

        this.doFilter = function()
        {
            share.filterExpression = self.filterBy;
        }

        this.changeView = function(route, element)
        {
            share.selectedCat = element;
            $location.path(route+'/'+element.name);
        }

       this.isCatRemovable = function(cat)
       {
            return mcs.isCatRemovable(cat);
        }

        this.refreshAddResult = function(response)
        {
            if(typeof response === 'object' && response.hasOwnProperty('result'));
            self.result = response.result;
        }


        this.removeCat = function(cat)
        {
            mcs.removeCat(cat, self.refreshAddResult);
        }
 

    }]);

