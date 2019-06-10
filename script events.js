///<reference path="angular.min.js"/>
 var app = angular.module("app",[])
                     app.controller('emp',['$scope','calcFactory',function($scope,calcFactory){
                        $scope.a=10;
                        $scope.b=20;
                        $scope.doSum=function(){
                            
                        };
                     }]);

    app.factory('calcFactory',['$http','$log',function($http,$log){
       $log.log("instantiating calcFactory");
       var oCalcService={};
       oCalcService.getSum=function(a,b){
           return a+b;
       };
       return oCalcService;
    
 }]);