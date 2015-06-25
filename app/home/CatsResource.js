angular.module("app").factory("KittyFactory", function($resource) {
    'use strict';
    return $resource('/cat');
});