///<reference path="angular.min.js"/>
 var demoApp = angular.module("demoApp",[])
                     .controller("demoController",function($scope,$location,$anchorScroll){
                      $scope.scrollTo = function(scrollLocation){
                        $location.hash(scrollLocation);
                          $anchorScroll();
                      }
 });