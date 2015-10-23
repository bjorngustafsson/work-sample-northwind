'use strict';

/* Add ngResource as dependency since Northwind is restful api */
var workSampleAppEmployeeConnectedOrdersService = angular.module('workSampleAppEmployeeConnectedOrdersService', ['ngResource']);

workSampleAppEmployeeConnectedOrdersService.factory('EmployeeConnectedOrdersService', ['$resource',
    function($resource) {
        return $resource("http://services.odata.org/V4/Northwind/Northwind.svc/Employees(:EmployeeID)?$expand=:queryParam", {}, {
            query: {
                method: "GET",
                isArray: false
            }
        });
    }
]);