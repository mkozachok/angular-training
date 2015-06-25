'use strict';

angular.module('myApp.catsServices', [
    'ngResource'
  ])

  .service('catsService', function ($resource) {
    var urlBase = '/cats';

    var request = $resource(urlBase, {}, {
      'getData': {
        method: 'GET',
        isArray: true
      },
      'newData': {
        method: 'POST'
      }
    });

    this.getCats = function () {
      return request.getData().$promise;
    };

    this.insertCat = function (cat) {
      return request.newData(cat);
    };
  });
