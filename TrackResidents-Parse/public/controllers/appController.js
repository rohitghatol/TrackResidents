angular.module("TrackResidents")
    .controller("appController", function ($scope, $location) {

        $scope.logout = function (username, password) {

            Parse.User.logOut();
            delete $scope.sessionUser;

        }
    });
