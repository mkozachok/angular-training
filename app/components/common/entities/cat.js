
__mainApp.factory('Cat', function() {
	var Cat = 
	{
      "id": 
      {
        value: 0,
        writable: true,
        enumerable: true
      },
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
      ,"uploadedUserId":
      {
        value: '',
        writable: true,
        enumerable: true
      }

  		,"init" : {
			value: 
  			function(name, image, uploadedUserId)
  			{
          this.id = Math.floor(Date.now() / 1000);
  				this.name = name;
  				this.image = image;
  				this.votes = Math.floor((Math.random() * 10) + 1);
          this.uploadedUserId = uploadedUserId;
  			},
  			writable: true,
    		enumerable: true
    	}
	}

	return Cat;
}
)