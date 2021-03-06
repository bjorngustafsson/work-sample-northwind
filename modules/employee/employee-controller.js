"use strict";

var workSampleAppEmployeeListController = angular.module('workSampleAppEmployeeListController', []);

/* Name the controller to EmployeeListCtrl */
workSampleAppEmployeeListController.controller('EmployeeListCtrl', [
    '$scope',
    'EmployeeListService',
    '$filter',
    function($scope,
             EmployeeListService,
             $filter
    ) {
        $scope.loading = true;  //Used for gif animation

        EmployeeListService.query({}, function(data) {
            $scope.loading = false;
            $scope.employees = data.value; //In json response employees is in array called values

            //Show first employee on load.
            $scope.selectedEmployee = $scope.employees[0];
            $scope.selectedEmployee.isActive = true;

            removePrefixFromEncodedPhoto();
        });

        $scope.selectEmployee = function(id) {
            /*since request already contains employee details, no need to make another api request */

            /*use angular filter to find clicked employee*/
            var found = $filter('filter')($scope.employees, {EmployeeID: id}, true);

            if (found.length) {
                $scope.selectedEmployee = found[0];
            } else {
                alert("Chosen employee not found");
            }
            removePrefixFromEncodedPhoto();

            angular.forEach($scope.employees, function(value, key){
                $scope.employees[key].isActive = (value.EmployeeID === id) ? true : false;
            });
        };

        function removePrefixFromEncodedPhoto() {
            /*remove prefix that comes from OLE DB to be able to show encoded img*/
            $scope.selectedEmployee.Photo = $scope.selectedEmployee.Photo.replace('FRwvAAIAAAANAA4AFAAhAP////9CaXRtYXAgSW1hZ2UAUGFpbnQuUGljdHVyZQABBQAAAgAAAAcAAABQQnJ1c2gAAAAAAAAAAAAgVAAA', '');
            $scope.imgSource = "data:image/bmp;base64, " + $scope.selectedEmployee.Photo;

        }

    }
]);