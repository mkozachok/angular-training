/**
 * Created by Oleksandr_Zobov on 6/22/15.
 */

 __mainApp.factory('myCatsService', ['$resource', 'shareService', 'Cat', function(provider, share, CatProps)
 {

    var CatsService = function(provider)
    {
    /**
     * @var _provider ngResource
     */
     var _provider = provider;
     var _selectedCat = null;

     //var cats - is now held by the shareService to share amongst controllers instances
    

     var _isCatsObtained = false;
     var _isCatsObtaining = false;

     this.addCat = function (name, image, refreshCallback)
     {
        var catNew = Object.create( Object.prototype , CatProps  );
        catNew.init(name, image);
        var catsCollection = _provider('/addCat', null, {
            'put':{isArray:false, method:'PUT'}
        });
        var self = this;
        var result = catsCollection.put(catNew)
        .$promise
        .then(
         function(response) 
         {          
            _isCatsObtained = false;
            self.getCats(null);
            refreshCallback({'cat': catNew, 'result':response});
        } )  ;
    }
    this.getCats = function(refreshCallback)
    { 
        if(!_isCatsObtained && !_isCatsObtaining) 
        {
            var catsCollection = _provider('/getCats', null, {
                'get':{isArray:true, method:'GET'}
            });
            _isCatsObtaining = true;
            var self = this;
            catsCollection
            .get({})
            .$promise
            .then(function(response)
            {
                _isCatsObtained = true;
                _isCatsObtaining = false;
                share.cats.splice(0, share.cats.length); // share.cats = [] will create a new object instead of updating already in memory
                for (var obj of response)
                {
                    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('click') && obj.hasOwnProperty('votes') )
                    {
                        share.cats.push(obj);    
                    }
                }
                if(refreshCallback != null) refreshCallback(share.cats);
            });
        }
        else
            if(refreshCallback != null) refreshCallback(share.cats);
    }
    this.countCats = function()
    {
        //return share.cats.length;
        return -1;
    }

    this.selectCat = function(cat)
    {
        _selectedCat = cat;
        return _selectedCat;
    }
    this.displayCat = function()
    {
        if(typeof _selectedCat == 'object' && _selectedCat )
            _selectedCat.isViewed = true;
    }
    this.voteCatUp = function()
    {
        if(typeof _selectedCat == 'object' && _selectedCat )
            _selectedCat.votes++;
    }
    this.voteCatDown = function()
    {
        if(typeof _selectedCat == 'object' && _selectedCat && _selectedCat.votes > 0 )
            _selectedCat.votes--;
    }

}

return new CatsService(provider);

}
]
)

