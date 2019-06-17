
 var app = angular.module('app',[]);
                     app.controller('emp',['$scope','$rootScope',function($scope,$rootScope){
        $scope.a=10;
        $scope.b=20;
        $scope.s=0;

       $scope.calcSum=function(){
              $scope.s=parseInt($scope.a)+parseInt($scope.b);
       };
       
 }]);
 var btnClick=function(){
       var $scope = angular.element($("#div1")).scope();
       $scope.s=parseInt($scope.a)+parseInt($scope.b);
       $scope.$apply();
}