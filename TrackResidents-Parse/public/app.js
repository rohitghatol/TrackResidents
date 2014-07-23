angular.module("TrackResidents", ["ngRoute", "ngResource","parse-angular"])
    .config(function ($routeProvider) {


        $routeProvider.when("/login", {
            templateUrl: "views/login.html"
        });

        $routeProvider.when("/main", {
            templateUrl: "views/main.html"
        });

        $routeProvider.otherwise({
            redirectTo: "/login"
        });
    })
    .run(function($rootScope,$location) {
        Parse.initialize("APP_ID", "APP_JS_SECRET");
        $rootScope.sessionUser = Parse.User.current();
        $location.path($rootScope.sessionUser!=null?"/main":"/login");


    });