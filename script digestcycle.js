///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('emp',['$scope','$rootScope',function($scope,$rootScope){
        $scope.a=10;
        $scope.b=20;
        $scope.c=30;

    $scope.$watch('a',function(newValue,oldValue){
       if(newValue!=oldValue){
            console.log("a modified to " + newValue);
       }
    });
    $scope.$watch('b',function(newValue,oldValue){
        if(newValue!=oldValue){
             console.log("b modified to " + newValue);
        }
     });
     $scope.$watch('c',function(newValue,oldValue){
        if(newValue!=oldValue){
             console.log("c modified to " + newValue);
             if($scope.c>30){
                 $scope.a=1000;
             }
        }
     });
     $rootScope.$watch(function(){
         console.log("--digest iteration started--");
     });
 }]);
 