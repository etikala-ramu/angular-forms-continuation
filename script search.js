///<reference path="angular.min.js"/>
 var app = angular.module("myModule",[])
                 .controller("myController",function($scope){
                 var employees=[
                 { name : "Rohit", gender : "Male" ,salary : 24000.788,city : "Hyderabad"},
                 { name : "Dhawan", gender : "Male" ,salary : 18000,city : "Mumbai"},
                 { name : "Kohli",  gender : "Male" ,salary : 28000,city : "Bangalore"},
                 { name : "Dhoni",  gender : "Male" ,salary : 36000,city : "Goa"},
                 { name : "Hardik", gender : "Male" ,salary : 27000,city : "Chennai"}
                 ];

 $scope.employees=employees;
 
 });