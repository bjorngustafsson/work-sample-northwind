"use strict";

var workSampleAppEmployeeConnectedOrdersController = angular.module('workSampleAppEmployeeConnectedOrdersController', []);

workSampleAppEmployeeConnectedOrdersController.controller('EmployeeConnectedOrdersCtrl', [
    '$scope',
    'EmployeeConnectedOrdersService',
    '$routeParams',
    function($scope,
             EmployeeConnectedOrdersService,
             $routeParams
    ) {
        var expandOn = "Orders";
        $scope.loading = true;  //Used for gif animation

        EmployeeConnectedOrdersService.query({
            EmployeeID: $routeParams.EmployeeID,
            queryParam: expandOn
        }, function(data) {
            $scope.loading = false;

            $scope.orders = data.Orders;
            $scope.fullName = data.FirstName + " " + data.LastName;

        });
    }
]);