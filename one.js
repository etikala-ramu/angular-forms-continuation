///<reference path="angular.min.js"/>
var app = angular.module("app",[]);
app.controller('emp',['$scope','calcFactory',function($scope,calcFactory){
   $scope.a=10;
   $scope.b=20;
   $scope.doSub=function(){
       //synchronous call------->.$scope.sub=calcFactory.getSub($scope.a,$scope.b);
       calcFactory.getSub($scope.a,$scope.b,function(r){
           $scope.sub=r;
       });
   };
}]);
app.factory('calcFactory',['$http','$log',function($http, $log){
$log.log("instantiating calcFactory");
var oCalcService={};
//oCalcService.getSub=function(a,b){
//  return parseInt(a)-parseInt(b);
//};
oCalcService.getSub=function(a,b, cb){
cb(parseInt(a)-parseInt(b));
};
return oCalcService;

}]);