'use strict';
__mainApp
.controller('homeCtrl', 
    ['$scope', 'shareService', '$location' , 'PID', function(scope, share, location, pid) {

    	this.PID = pid;
    	this.isUserLogged = share.isUserLogged;
    	this.loggedUser = share.loggedUser;
    }
    ]
    );