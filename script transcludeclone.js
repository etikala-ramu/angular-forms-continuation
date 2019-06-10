///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      
                      
 }]);
 app.directive('message1', function(){
     return{
         templateUrl: 'msg.html',
         transclude: true,
         link : function(scope,iElement,iAttrs,controller,transclude){
            iElement.append(transclude());
      }
    }
 });
 app.directive('message2', function(){
    return{
        templateUrl: 'msg.html',
        transclude: true,
        link : function(scope,iElement,iAttrs,controller,transclude){
             transclude(function(transEl){
                iElement.find('#innerPanel1').append(transEl);
             });
       }
   }
});
