'use strict';

angular
  .module('chatRoomApp', [
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller:"chatCtrl"
      })

      .when("/chat",{
        templateUrl: "views/main.html",
        controller:"chatCtrl"
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
