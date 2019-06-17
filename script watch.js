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
                    },
                    $scope.o={
                        d:40,
                        e:50,
                        f:60
                    }
            $scope.updateC=function(){
            $scope.y.b=$scope.x.a * 4;
            };
        $scope.$watch('p.c',function(newValue,oldValue){
            if(newValue!=oldValue){
              console.log("updated C to " + newValue);
            }
        });
             //$scope.$watch('o',function(newValue,oldValue){
               //  if(newValue!=oldValue){
                 //    $scope.o.f=$scope.o.d * $scope.o.e;
                 //}
            // },true);
             
 }]);
 