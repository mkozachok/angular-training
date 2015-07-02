
__mainApp.factory('Cat', function() {
	var Cat = 
	{
    	"click": {
    		value: 0,
    		writable: true,
    		enumerable: true
    	}
    	,"name": {
        	value: '',
        	writable: true,
    		enumerable: true
    	}
    	,"image": {
    		value: '',
    		writable: true,
    		enumerable: true
  		}
    	,"isViewed": {
    		value: false,
    		writable: true,
    		enumerable: true
  		}
    	,"isActive": {
    		value: true,
    		writable: true,
    		enumerable: true
  		}
    	,"votes": {
    		value: 0,
    		writable: true,
    		enumerable: true
  		}
      ,"uploadedUser":
      {
        value: '',
        writable: true,
        enumerable: true
      }

  		,"init" : {
			value: 
  			function(name, image)
  			{
  				this.name = name + ' ' + Math.floor(Date.now() / 1000);
  				this.image = image;
  				this.votes = Math.floor((Math.random() * 10) + 1);
  			},
  			writable: true,
    		enumerable: true
    	}
	}

	return Cat;
}
)