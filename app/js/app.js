'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gallery', {templateUrl: 'partials/gallery-partial.html', controller: 'GalleryCtrl'});
    $routeProvider.otherwise({redirectTo: '/gallery'});
  }]);
