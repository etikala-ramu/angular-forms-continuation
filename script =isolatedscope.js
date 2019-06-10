///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      
                      $scope.emp={
                          empno:1001,
                          empname:'Dhoni'
                      };
                      $scope.emp2={
                          empno:1002,
                          empname:'Rohith'
                      }
                      
 }]);
 app.directive('message',function(){
   return{
       templateUrl: 'info-msg.html',
       scope : {
           employee:'='
       }
   }
 });
 app.directive('message2',function(){
    return{
        templateUrl: 'info-msg.html',
        scope : {
            employee:'=oEmp'
        }
    }
  });

