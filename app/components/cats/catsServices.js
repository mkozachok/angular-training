

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
      'updateData': {
        method: 'PUT'
      },
      'deleteData': {
        method: 'DELETE'
      }
    });

    this.getCats = function () {
      return request.getData().$promise;
    };

    this.insertCat = function (cat) {
      return request.newData(cat);
    };

    this.updateCat = function (cat) {
      return request.updateData(cat);
    };

    this.deleteCat = function (id) {
      return request.deleteData({id: id});
    };
  });
