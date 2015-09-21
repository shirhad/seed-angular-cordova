(function() {

  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'pods/home/home.html',
      controller: 'HomeController'
    });

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
  }

})();
