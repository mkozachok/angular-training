angular.module("app").factory("UserFactory", function($resource) {
    'use strict';
    return $resource('/users');
});