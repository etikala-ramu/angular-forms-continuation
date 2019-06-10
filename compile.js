///<reference path="angular.min.js"/>
 var app = angular.module("app",[]);
                     app.controller('msg',['$scope',function($scope){
                        
                     }]);

    app.directive('message',function(){
       return {
           compile: function(tElement,tAttributes){
                console.log(tAttributes.text + "- In Compile");
                return{
                    pre: function(scope,tElement,tAttributes){
                        console.log(tAttributes.text + "- In Pre");
                    },
                    post: function(scope,tElement,tAttributes){
                        console.log(tAttributes.text + "- In Post");
                    }
                
                };
       },
       controller: function($scope,$attrs,$element){
              console.log($attrs.text +" - In Controller");
       }
    }
 });