///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      $scope.a=10;
                      $scope.b=20;
                      $scope.changeValueB=function(){
                            $scope.b=100;
                      }
                      
 }]);
