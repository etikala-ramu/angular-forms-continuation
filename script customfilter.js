///<reference path="angular.min.js"/>
 var app = angular.module("myModule",[])
                  .filter("gender",function(){
                      return function(gender){
                         switch(gender){
                             case 1:
                                return "Male";
                             case 2:
                                return "Female";
                             case 3:
                                return "Not disclosed";
                         }
                      }
                  })
                 .controller("myController",function($scope){
                 var employees=[
                 { name : "Rohit", gender : 1 ,salary : 24000.788},
                 { name : "Sara", gender : 2 ,salary : 18000},
                 { name : "Kohli",  gender : 1 ,salary : 28000},
                 { name : "Luci",  gender : 2 ,salary : 36000},
                 { name : "Todd", gender : 3 ,salary : 27000}
                 ];

 $scope.employees=employees;
 
 });