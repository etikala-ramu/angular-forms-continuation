///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      
                      
 }]);
 app.directive('message1',function(){
     return{
         templateUrl : 'msg1.html'
         }
 });
    //using transclude
 app.directive('message2',function(){
     return {
         templateUrl: 'msg2.html',
         transclude: true
     }
 });
   //using link function
 app.directive('message3',function(){
    return {
        templateUrl: 'msg3.html',
        transclude: true,
        link : function(scope,iElement,iAttrs,controller,transclude){
              var content=transclude();
              iElement.find("#innerPanel").append(content);
        }
    }
});
  // using directive controller
  //app.directive('message4',function(){
    //  return{
      //  templateUrl: 'msg4.html',
        //  transclude: true,
          //controller : function($scope,$element,$attrs,$transclude){
            //  var content=$transclude();
              //$element.find("#control").append(content);
          //}
      //}
  //});
  // using my own transclude i.e myTransclude
  app.directive('message4',function(){
    return {
        templateUrl: 'msg4.html',
        transclude: true
    }
});
 app.directive('myTransclude',function(){
     return{
            link : function(scope,iElement,iAttrs,controller,transclude){
            iElement.append(transclude());
      }
     }
 });

   
 