 'use strict';


// Declare app level module which depends on views, and components
var __mainApp = angular.module('app', [
   'ui.router',
   'ngResource',
   'ngMessages',
   'ngStorage'
])
.config(['$urlRouterProvider', '$stateProvider', function (urp, sp) {
       sp
       		.state('home', 
       		{
       			url: '/',
       			views:
       			{
       				"homePage":
       				{
                  controller: 'homeCtrl',
                  controllerAs: 'home',
       				    templateUrl: 'templates/home/home.html'	
       				},
       				"aboutPage@home":
       				{		            	
        		        template: 'Home page',
        		    }
       			}

       		} )
    		
    		.state('home.about',{
               
               url: 'about',
               views:
       			{
       				"homePage":
       				{
                  controller: 'homeCtrl',
                  controllerAs: 'home',
       				    templateUrl: 'templates/home/home.html'	
       				},

       				"aboutPage":
       				{		            	
        		        template: '<h1>Cat0Clicker Angular ngApp</h1>',
        		    }
        		}
            })

            .state('listCats',
            {
            	url: '/listCats',
            	views: {
              "homePage":
              {
                  controller: 'homeCtrl',
                  controllerAs: 'home',
                  templateUrl: 'templates/home/home.html'  
              },
            		"listCats":
            		{
            	   		controller: 'ViewCatsListCtrl',
                		templateUrl: 'templates/list/listView.html',
                		controllerAs: 'list'	
            		}
	        	},
	        	resolve:
	        	{
	        		catsService: 'myCatsService',
              share: 'shareService',
	        		catsList: function(catsService)
	        		{
                console.log('State resolution');
	        			return catsService.obtainCats() ;
	        		}
	        	},
            onEnter: function(share,  $timeout, $state)
              {
                  if(true !== share.isUserLogged)
                  {
                    console.log('Not logged user');
                      $timeout(function(){ 
                        $state.go('login');
                      
                    });
                    return false;
                  }
                  return true;
              },



            })

            .state('editCat',
            {
            	url: '/editCat/:routeParam',
            	views: {
              "homePage":
              {
                  controller: 'homeCtrl',
                  controllerAs: 'home',
                  templateUrl: 'templates/home/home.html'  
              },
            		"editCat":
            		{
            	   		controller: 'EditCatCtrl',
                		templateUrl: 'templates/edit/editView.html',
                		controllerAs: 'edit'	
            		}
	        	},
            resolve:
            {
              catsService: 'myCatsService',
              share: 'shareService',
            },
            onEnter: function(share,  $timeout, $state)
              {
                  if(true !== share.isUserLogged)
                  {
                    console.log('Not logged user');
                      $timeout(function(){ 
                        $state.go('login');
                      
                    });
                    return false;
                  }
                  return true;
              },


            })
            .state('addCat',
            {
            	url: '/addCat',
            	views: {
              "homePage":
              {
                  controller: 'homeCtrl',
                  controllerAs: 'home',
                  templateUrl: 'templates/home/home.html'  
              },
            		"addCat":
            		{
            	   		controller: 'AddCatCtrl',
                		templateUrl: 'templates/add/addView.html',
                		controllerAs: 'add'	
            		}
	        	},
            resolve:
            {
              catsService: 'myCatsService',
              share: 'shareService',
            },
            onEnter: function(share,  $timeout, $state)
              {
                  if(true !== share.isUserLogged)
                  {
                    console.log('Not logged user');
                      $timeout(function(){ 
                        $state.go('login');
                      
                    });
                    return false;
                  }
                  return true;
              },

            })
            .state('createProfile',
            {
            	url: '/createProfile',
            	views: {
              "homePage":
              {
                  controller: 'homeCtrl',
                  controllerAs: 'home',
                  templateUrl: 'templates/home/home.html'  
              },
            		"profile":
            		{
                		templateUrl: 'templates/profile/profile.html',
                		controllerAs: 'profile'	
            		}
	        	}

            })

            .state('login',
            {
              url: '/login',
              views: {
                "login":
                {
                    /*controller: 'ProfileCtrl',*/
                    templateUrl: 'templates/login/login.html',
                    controllerAs: 'login' 
                }
            }

            })

      ;

            urp.otherwise('/');
            
    }    
    ]
    );
