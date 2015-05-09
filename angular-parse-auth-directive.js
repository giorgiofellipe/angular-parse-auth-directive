/*
 * angular-parse-auth-directive v0.0.1
 * (c) 2015 Giorgio Fellipe http://giorgiofellipe.com.br
 * License: MIT
 */

 'use strict';

 angular.module('parse-auth', ['Parse'])
    .directive('parse-auth', function() {
        return {
          restrict: 'A',
          transclude: true,
          scope: {},
          controller: function($scope, $attrs, $element, ParseAuth) {
              $scope.authenticated = false;
              $scope.currentUser = ParseAuth.currentUser;

              $scope.showContent = function() {
                  $scope.$apply(function(){$scope.authenticated = true;});
              }

              if ($scope.currentUser) {
                  $scope.authenticated = true;
              }
          },
          templateUrl: 'views/login.html',
          replace: true
        }
      });