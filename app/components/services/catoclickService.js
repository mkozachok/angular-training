/**
 * Created by Oleksandr_Zobov on 6/22/15.
 */

__mainApp.CatsService = function(_provider)
{
    var provider = _provider;
    var selectedCat = null;
    var cats = [];

    var isCatsObtained = false;
    var isCatsObtaining = false;
    this.addCat = function (name, image)
    {
        var seed = Math.floor((Math.random() * 255) + 1);
        console.log('addCat isCatsObtained '+isCatsObtained +' isCatsObtaining '+isCatsObtaining + ' ' +seed);

        var cat = Object.create(__mainApp.Cat);
        cat.Cat(name, image);
        //this.cats.push(cat);
         var catsCollection = provider('/addCat', null, {
                'put':{isArray:false, method:'PUT'}
            });

         var self = this;

         var result = catsCollection.put(cat, function(response) {
                console.log('Cat putted!  '+self.isCatsObtained +' isCatsObtaining '+self.isCatsObtaining + ' ' +seed);
                console.log( JSON.stringify(response) );
                result = response;
                self.isCatsObtained = false;
                self.getCats();

            } )  ;

        console.log('addCat Return isCatsObtained '+isCatsObtained +' isCatsObtaining '+isCatsObtaining + ' ' +seed);
        console.log(JSON.stringify(result) );

        return {'cat':cat, 'result':result };
    }
   this.getCats = function(__refreshValue)
    { 
        var seed = Math.floor((Math.random() * 255) + 1);
        console.log('getCats isCatsObtained '+isCatsObtained +' isCatsObtaining '+isCatsObtaining + ' ' +seed);
        if(!isCatsObtained && !isCatsObtaining) 
        {
            console.log('Requesting provider '+ ' ' +seed);

            var catsCollection = provider('/getCats', null, {
                'get':{isArray:true, method:'GET'}
            });
            isCatsObtaining = true;
  
            var self = this;
            cats = catsCollection
            .get({})
            .$promise
            .then(function(response)
                  {
                    console.dir(response);
                    self.cats = response;
                    self.isCatsObtained = true;
                    self.isCatsObtaining = false;
                     console.log('Cats obtained! isCatsObtained '+isCatsObtained +' isCatsObtaining '+ isCatsObtaining + ' ' +seed);
                     var catsResponse = [];
                     for (var obj of response)
                     {
                        if (obj.name && obj.click && obj.votes)
                        {
                            catsResponse.push(obj);    
                        }
                     }
                    __refreshValue = catsResponse;
                  });

        }
        console.log('getCats Return isCatsObtained '+isCatsObtained +' isCatsObtaining '+isCatsObtaining + ' ' +seed);
        return this.cats;
    }
    this.countCats = function()
    {
        return cats.length;
    }

    this.selectCat = function(cat)
    {
        selectedCat = cat;
        return selectedCat;
    }
    this.displayCat = function()
    {
        if(typeof selectedCat == 'object' && selectedCat )
            selectedCat.isViewed = true;
    }
    this.voteCatUp = function()
    {
        if(typeof selectedCat == 'object' && selectedCat )
            selectedCat.votes++;
    }
    this.voteCatDown = function()
    {
        if(typeof selectedCat == 'object' && selectedCat && selectedCat.votes > 0 )
            selectedCat.votes--;
    }

}

__mainApp.factory('myCatsService', ['$resource', function($resource) {
    return new __mainApp.CatsService($resource);

} ] );
