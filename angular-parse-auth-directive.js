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

              //There will be need to get some attributes from the element such as
              //login view path and register view path
              // $attrs.loginViewPath
              // $attrs.registerViewPath

              $scope.showContent = function() {
                  $scope.$apply(function(){$scope.authenticated = true;});
              }

              if ($scope.currentUser) {
                  $scope.authenticated = true;
              }
          },
          replace: true
        }
      });