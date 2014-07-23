angular.module("TrackResidents")
    .controller("userController", function ($scope,  $location) {

        $scope.authenticate = function (username, password) {

            Parse.User.logIn(username, password, {
                success: function(user) {
                    $location.path("/main");
                    $scope.sessionUser=user
                },
                error: function(user, error) {
                    console.log(error);
                    $scope.authenticationError = error;
                }
            });

        }
        $scope.logout = function () {

            Parse.User.logOut();
            delete $scope.sessionUser;
            $location.path("/login");

        }
    });
