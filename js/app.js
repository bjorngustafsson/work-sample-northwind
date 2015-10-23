'use strict';

/*Create the base module, use routes from start in case we want to add more views than just employees  */
var baseAppModule = angular.module('workSampleApp', [
    'ngRoute',
    'workSampleAppEmployeeListController',
    'workSampleAppEmployeeListService'
]);

baseAppModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/employees', {
                templateUrl: '/modules/employee/employee.html',
                controller: 'EmployeeListCtrl'
            }).
            when('/', {
                templateUrl: '/modules/employee/employee.html',
                controller: 'EmployeeListCtrl'
            }).
            otherwise({
                redirectTo: '/employees'
            });
    }]);