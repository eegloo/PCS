'use strict';
//TODO: error handling
//TODO: asynch handling
//module already declared
angular.module('csp.doctors.ctrl')

.controller(
    'doctorEditCtrl', [
        '$scope',
        '$log',
        '$modalInstance',
        'doctor',
        'specialties',
        'locationService',
        function($scope, $log, $modalInstance, doctor, specialties, Location) {

            //header text
            $scope.headerText = doctor ? 'Edit Doctor' : 'New Doctor';

            $scope.$log = $log;

            $scope.doctor = doctor;

            $scope.specialties = specialties;

            $scope.location = new Location();

            $scope.save = function () {
                 $modalInstance.close($scope.doctor);
            };

            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.addLocation = function () {
                doctor.addLocation(location);
                $scope.location = new Location();
            };

            $scope.deleteLocation = function () {
                doctor.removeLocation(location);
            };


        }]);