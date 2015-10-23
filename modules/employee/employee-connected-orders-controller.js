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

        EmployeeConnectedOrdersService.query({
            EmployeeID: $routeParams.EmployeeID,
            queryParam: expandOn
        }, function(data) {
            $scope.orders = data.Orders;
        });
    }
]);