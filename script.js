///<reference path="angular.min.js"/>
 var myApp = angular
                  .module("myModule",[])
                     .controller("myController",function($scope){
                        var country={
                            Name:"INDIA",
                            Capital:"NEW DELHI",
                            Flag:"india.png",
                        };

 $scope.country=country;
 });