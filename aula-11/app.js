'use strict';

var MyApp = angular.module('MyApp', []);
MyApp.controller('formCtrl', function ($scope) {

    $scope.reset = function () {
        $scope.formulario = null;
    };

    $scope.salvar = function () {
        $scope.salvo = $scope.formulario;
    }

});