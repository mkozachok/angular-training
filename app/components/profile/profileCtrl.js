'use strict';
__mainApp
.controller('profileCtrl', 
    ['$scope', 'authenticateService', function(scope, as) {

    	this.result = [];
    	var self =this;

    	this.createProfile = function()
    	{
            as.addProfile(self.name,self.email,self.password);

    		self.result = {
    			Result: 1,
    			Message: "Profile was added successfully!"
    		}

    	}
    }
    ]
    );