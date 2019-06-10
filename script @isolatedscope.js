///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      $scope.a=10;
                      $scope.b=20;

                      $scope.p=40;
                      $scope.q=50;
                      
 }]);
 
 app.directive('message',function(){
  return{
     templateUrl : 'info-msg.html',
     scope: {
           x:'@',
           y:'@'
     },
     controller: function($scope,$element,$attrs){
          $scope.doProcess=function(){
              var r=parseInt($scope.x) + parseInt($scope.y);
              alert("Sum :" + r);
          }
     }
      
  }
 });
 app.directive('message2',function(){
    return{
       templateUrl : 'info-msg.html',
       scope: {
             x:'@m',
             y:'@n'
       },
       controller: function($scope,$element,$attrs){
        $scope.doProcess=function(){
            var r=parseInt($scope.x) + parseInt($scope.y);
            alert("Sum :" + r);
        }
    }
    }
   });