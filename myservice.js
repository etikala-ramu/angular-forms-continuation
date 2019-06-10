var app = angular.module("app",[]);
    app.factory('calcFactory',['$http','$log',function($http, $log){
       $log.log("instantiating calcFactory");
       var oCalcService={};
       //oCalcService.getSum=function(a,b){
         //  return parseInt(a)+parseInt(b);
       //};
       oCalcService.getSum=function(a,b, cb){
              cb(parseInt(a)+parseInt(b));
       };
       return oCalcService;
    
 }]);