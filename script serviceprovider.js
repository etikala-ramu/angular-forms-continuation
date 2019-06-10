///<reference path="angular.min.js"/>
 var app = angular.module("app",[]);
                     app.controller('emp',['$scope','calcService',function($scope,calcService){
                        $scope.a=10;
                        $scope.b=20;
                        $scope.doSum=function(){
                           //snychronous call-------> $scope.sum=calcService.getSum($scope.a,$scope.b);
                            calcService.getSum($scope.a,$scope.b,function(r){
                                $scope.sum=r;
                            });
                        };
                     }]);

    app.provider('calcService', function(){
        this.$get=['$log',function($log){
       $log.log("instantiating calcService");
       var oCalcService={};
      // oCalcService.getSum=function(a,b){
        //   return parseInt(a)+parseInt(b);
       //};
       oCalcService.getSum=function(a,b, cb){
        cb(parseInt(a)+parseInt(b));
       };
       return oCalcService;
        }];
 });
 app.config(['calcServiceProvider',function(calcServiceProvider){

 }]);