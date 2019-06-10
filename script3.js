///<reference path="angular.min.js"/>


 var myApp = angular.module("myModule",[]);
 var myController=function($scope){
       $scope.message="This is my first Angular web page";
 };
myApp.controller("myController",myController);
 
