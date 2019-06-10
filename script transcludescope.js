///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('sample',['$scope',function($scope){
                      $scope.a={
                          x: 10
                         // y:30
                      }
                      
 }]);
 //shared scope
app.directive('message1',function(){
    return{
        templateUrl:'msg.html',
        transclude: true,
        controller: function($scope,$element,$attrs){
             $scope.b={
                 y: 30
             }
        }
    }
});
//inherited scope
app.directive('message2',function(){
    return{
        templateUrl:'msg.html',
        transclude: true,
        scope: true,
        controller: function($scope,$element,$attrs){
             $scope.b={
                 y: 30
             }
        }
    }
});
//isolated scope
app.directive('message3',function(){
    return{
        templateUrl:'msg.html',
        transclude: true,
        scope: {},
        controller: function($scope,$element,$attrs){
            $scope.b={
                 y: 30
             }
        }
    }
});
//manually transclusion scope
app.directive('message4',function(){
    return{
        templateUrl:'msg2.html',
        transclude: true,
        scope: {},
        controller: function($scope,$element,$attrs,$transclude){
             $scope.b={
                 y: 30
             };
          $transclude(function(transEl){
           // $transScope.b={};
           // $transScope.b.y=$scope.b.y;
            $element.find('#innerPanel').append(transEl);
          });
        }
    }
});
//custom transclusion scope
//app.directive('message5',function(){
  //  return{
    //    templateUrl:'msg2.html',
      //  transclude: true,
        //scope: {},
        //controller: function($scope,$element,$attrs,$transclude){
          //   $scope.b={
            //     y: 30
             //};
            //var customScope=$scope.$new(true);
            //customScope.a={
              //  x:100
            //};
            //customScope.b={
              //  y:200
            //};
          //$transclude(customScope,function(transEl){
            //$element.find('#innerPanel').append(transEl);
          //});
        //}
    //}
//});