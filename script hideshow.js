///<reference path="angular.min.js"/>
 var app = angular.module("myModule",[])
                 .controller("myController",function($scope){
                 var employees=[
                 { name : "Rohit", gender : "Male" ,city : "Hyderabad",salary : 24000.788},
                 { name : "Dhawan", gender : "Male" ,city : "Mumbai",salary : 18000,},
                 { name : "Kohli",  gender : "Male" ,city : "Bangalore",salary : 28000},
                 { name : "Dhoni",  gender : "Male" ,city : "Goa",salary : 36000,},
                 { name : "Hardik", gender : "Male" ,city : "Chennai",salary : 27000}
                 ];

 $scope.employees=employees;
 
 });