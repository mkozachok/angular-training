

angular.module('myApp.catsServices', [
    'ngResource'
  ])

  .service('catsService', function ($resource) {
    'use strict';

    var request = $resource('/cats', {}, {
      'getData': {
        method: 'GET',
        isArray: true
      },
      'newData': {
        method: 'POST'
      },
      'deleteData': {
        method: 'DELETE'
      }
    });

    var requestDelete = $resource('/delete', {}, {
      'deleteData': {
        method: 'POST'
      }
    });

    this.getCats = function () {
      return request.getData().$promise;
    };

    this.insertCat = function (cat) {
      return request.newData(cat);
    };

    this.deleteCat = function (id) {
      return requestDelete.deleteData({id: id});
    };
  });
