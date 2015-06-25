var module = angular.module('app', []);

module.factory('app', []).
service('showAllCats', function(){
	var cats = [{name:"cat1", img:"http://cs11157.vk.me/v11157805/35/YCrKLzDswig.jpg",clicks:0,checked:true,likes:0},
				{name:"cat2",img:"http://s00.yaplakal.com/pics/pics_original/7/9/3/4540397.jpg",clicks:0,checked:true,likes:0},
				{name:"cat3",img:"http://pink-elephant.tk/wp-content/uploads/2014/11/%D1%81%D1%84%D0%B5.jpg",clicks:0,checked:true,likes:0},
				{name:"cat4",img:"http://cdn.cutestpaw.com/wp-content/uploads/2012/08/Snoopy-009.jpg",clicks:0,checked:true,likes:0},
				{name:"cat5",img:"http://upload.wikimedia.org/wikipedia/commons/4/4c/Push_van_cat.jpg",clicks:0,checked:true,likes:0}];
	return {
		getProperty: function(){
			return cats;
		},
		setProperty: function(value) {
			cats = value;
		}
	};

});

module.filter('wordsFilter', function(showAllCats) {
	return function(input, searchExpression) {
		var filtered = [];
	    var items = showAllCats.getProperty();
	    angular.forEach(items, function(obj) {
     		if(searchExpression){
    			if(obj.name == searchExpression){
    				filtered.push(obj);
    			}    
    		}
    	});
    	if(typeof searchExpression === 'undefined' || searchExpression === ''){
    		filtered = items;
    		return items;
    	}
    return filtered;
  };
});

module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddCat', {
        templateUrl: 'partials/addNewPartial.html',
        controller: 'addCat'
    }).
      when('/ShowCats', {
        templateUrl: 'partials/allCats.html',
        controller: 'Cat'
      });
}]);

module.controller('addCat', function($scope, showAllCats){
	$scope.add = function(name,img){
		$scope.cat = {name: name, img:img};
		$scope.cats = showAllCats.getProperty();
		$scope.cats.push($scope.cat);
		showAllCats.setProperty($scope.cats);
	};
});

module.controller('Cat', function($scope, showAllCats, $http) {
	
$http.get("/partials/data.json")
  .success(function (response) {$scope.names = response.records;});
  console.log($scope.names);


	$scope.cats = showAllCats.getProperty();

	$scope.currentObj = "";

	$scope.catClicked = function(x){
		x.clicks ++;
		$scope.currentObj = x;
		x.checked = false;
	};
	$scope.like = function(x){
		x.likes ++;
	};
	$scope.disLike = function(x){
		x.likes --;
	};
});