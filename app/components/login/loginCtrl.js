'use strict';
__mainApp
.controller('loginCtrl', 
    ['$scope', 'shareService', 'authenticateService', '$location' , function(scope, share, auth, location) {

    	this.result = [];
    	var self =this;

    	this.loginUser = function()
    	{
            var result = auth.authenticateUserByEmail(self.email, self.password);

            if( true === result)
            {
               
                location.path('/');
                return;

            }

            self.result =
            {
                Result: 0,
                Message: 'Check your credentials. Unable to sign in.'
            }

            console.log(self);  

    	}
    }
    ]
    );