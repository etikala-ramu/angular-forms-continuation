///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      
                      $scope.a=10;
                      $scope.b=20;
                      $scope.doSum=function(x,y){
                          var r=parseInt(x) + parseInt(y);
                          alert("Sum :" + r);
                      }
 }]);
 app.directive('message',function(){
     return{
         templateUrl : 'info-msg.html',
         scope:{
             extSum: '&'
         },
         controller : function($scope,$element,$attrs){
             $scope.doProcess=function(){
                 $scope.extSum({m:$scope.p,n:$scope.q});
             }
         }
     }
 });