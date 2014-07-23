angular.module("TrackResidents")
    .controller("residentController", ["$scope","$location",function ($scope, $location) {
        var Resident = Parse.Object.extend("Resident");
        $scope.result=[];


        $scope.add=function(firstName,lastName,buildingNumber,flatNumber,phoneNum1,phoneNum2){


            var query = new Parse.Query(Resident);
            query.equalTo("firstName", firstName);
            query.equalTo("lastName", lastName);
            query.equalTo("buildingNumber", buildingNumber);
            query.equalTo("flatNumber", flatNumber);

            query.find({
                success: function(results) {
                    if(results.length>0){
                        alert("Duplicate Entry Found");
                    }
                    else{
                        var resident = new Resident()
                        resident.save({
                            firstName:firstName,
                            lastName:lastName,
                            buildingNumber:buildingNumber,
                            flatNumber:flatNumber,
                            phoneNum1:phoneNum1,
                            phoneNum2:phoneNum2
                        },function(){
                            alert("Done");
                        },
                        function(){
                            alert("Error");
                        })
                    }

                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
        $scope.search=function(query){

            var firstNameQuery = new Parse.Query(Resident);
            firstNameQuery.equalTo("firstName", query);
            var lastNameQuery = new Parse.Query(Resident);
            lastNameQuery.equalTo("lastName", query);
            var buildingNameQuery = new Parse.Query(Resident);
            buildingNameQuery.equalTo("buildingNumber", query);
            var flatNumberQuery = new Parse.Query(Resident);
            flatNumberQuery.equalTo("flatNumber", query);


            var orQuery = new Parse.Query.or(firstNameQuery,lastNameQuery,buildingNameQuery,flatNumberQuery);



            orQuery.find({
                success: function(results) {
                    console.dir(results);
                    $scope.result=results;
                },
                error: function(error) {

                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }

    }]);
