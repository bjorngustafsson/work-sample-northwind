"use strict";

var workSampleAppEmployeeListController = angular.module('workSampleAppEmployeeListController', []);

/* Name the controller to EmployeeListCtrl */
workSampleAppEmployeeListController.controller('EmployeeListCtrl', ['$scope', 'EmployeeListService',
    function($scope, EmployeeListService) {

        EmployeeListService.query({}, function(data) { //callback
            $scope.employees = data.value;  //In json response employees is in array called values
        });

    }
]);