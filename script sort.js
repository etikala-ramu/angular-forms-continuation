///<reference path="angular.min.js"/>
 var app = angular.module("myModule",[])
                 .controller("myController",function($scope){
                 var employees=[
                 { name : "Rohit", dateofbirth : new Date("January 20,1980") , gender : "Male" ,salary : 24000.788},
                 { name : "Dhawan", dateofbirth : new Date("Febraury 16,1999") , gender : "Male" ,salary : 18000},
                 { name : "Kohli", dateofbirth : new Date("March 02,2010") , gender : "Male" ,salary : 28000},
                 { name : "Dhoni", dateofbirth : new Date("April 30,2019") , gender : "Male" ,salary : 36000},
                 { name : "Hardik", dateofbirth : new Date("January 11,2018") , gender : "Male" ,salary : 27000}
                 ];

 $scope.employees=employees;
 $scope.sortColumn="name";
 });