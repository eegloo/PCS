
    //        var mockDoc = [{
    //                isReferring: true,
    //                active: true,
    //                firstName: 'Jack',
    //                lastName: 'Johnson',
    //                specialties: [{
    //                    name: 'Dentist'
    //                }],
    //                locations: [{
    //                    address: '1 1st St',
    //                    city: 'New York',
    //                    state: 'NY',
    //                    zip: '10009',
    //                    phone: '(718)555-5555'
    //                }]
    //            }],
    //            referringStr = "referring",
    //            specialistStr = "specialist";
    //
    //        angular.module('csp.services.doctor')
    //            .service('doctorListService', function () {
    //                return mockDoc;
    //            })
    //            .factory('DoctorService', function () {
    //
    //                var Doctor = function () {
    //
    //                    this.locations = [];
    //
    //                    this.addLocation = function (location) {
    //                        this.location.push(location);
    //                    };
    //
    //                    this.removeLocation = function (location) {
    //                        this.locations = _.without(this.locations, location);
    //                    };
    //
    //                    this.setReferring = function () {
    //                        this.type = referringStr;
    //                    };
    //
    //                    this.setSpecialist = function () {
    //                        this.type = specialistStr;
    //                    };
    //
    //                    this.isReferring = this.type === referringStr;
    //
    //                    this.isSpecialist = this.type === specialistStr;
    //                };
    //
    //                Doctor.getById = function () {
    //                    return mockDoc;
    //                };
    //
    //                return Doctor;
    //            });
    //
    //    });
    //}



