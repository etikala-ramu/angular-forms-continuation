///<reference path="angular.min.js"/>
 var myApp = angular.module("myModule",[])
    myApp.controller("myController",function($scope){
                        var employee={
                            firstname : "David",
                            lastname : "Hashtings",
                            gender : "Male",
                        };

 $scope.employee=employee;
 });