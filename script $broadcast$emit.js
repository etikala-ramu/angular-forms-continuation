
 var app = angular.module('app',[]);
    app.controller('calc1',['$scope','$rootScope',function($scope,$rootScope){
        $scope.a=10;
        $scope.b=20;
        
 }]);
 app.controller('calc2',['$scope','$rootScope',function($scope,$rootScope){
    $scope.c=30;
    $scope.d=40;
    
}]);
app.controller('child1calc1',['$scope','$rootScope',function($scope,$rootScope){
        
        
 }]);