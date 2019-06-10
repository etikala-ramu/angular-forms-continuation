///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      $scope.a=10;
                      $scope.b=20;

                      $scope.p=40;
                      $scope.q=50;
                      
 }]);
 
 app.directive('message',function(){
  return{
     templateUrl : 'info-msg.html',
     scope: {
           a:'@',
           b:'@'
     }
      
  }
 });