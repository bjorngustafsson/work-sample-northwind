'use strict';

/* Add ngResource as dependency since Northwind is restful api */
var workSampleAppEmployeeListService = angular.module('workSampleAppEmployeeListService', ['ngResource']);

workSampleAppEmployeeListService.factory('EmployeeListService', ['$resource',
    function($resource) {
        return $resource("http://services.odata.org/V4/Northwind/Northwind.svc/Employees", {}, {
            query: {
                method: "GET",
                isArray: false
            }
        });
    }
]);