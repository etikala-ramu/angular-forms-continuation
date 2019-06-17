///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('emp',['$scope',function($scope){
                      $scope.x={
                          a: 10
                      },
                      $scope.y={
                          b: 20
                      },
                      $scope.p={
                        c: 30
                    }
            
        $scope.$watchGroup(['x.a','y.b'],function(newValue,oldValue){
            if(newValue!=oldValue){
              $scope.p.c=$scope.x.a * $scope.y.b;
            }
        });
        
             
 }]);
 