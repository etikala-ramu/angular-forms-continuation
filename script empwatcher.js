///<reference path="angular.min.js"/>
 var app = angular.module('app',[]);
                     app.controller('emp',['$scope',function($scope){
                     $scope.emps=[
                         {empno:'1001',ename: 'Kohli'},
                         {empno:'1002',ename: 'Dhawan'},
                         {empno:'1003',ename: 'Rohit'},
                         {empno:'1004',ename: 'Hardik'},
                     ];
           $scope.addEmp=function(){
               var newEmpno=1000+$scope.emps.length+1;
               var newEname=$scope.newPlayer;
           $scope.emps.push({empno:newEmpno,ename:newEname});
            };
           $scope.modify3rdEmp=function(a){
               $scope.emps[a-1].ename=$scope.modifiedName;
           };
          //$scope.$watch('emps',function(oldValue,newValue){
            // console.log("No. of Employees :"+$scope.emps.length);
          //});
          //$scope.$watchCollection('emps',function(oldValue,newValue){
            //console.log("No. of Employees :"+$scope.emps.length);
         //});
         $scope.$watch('emps',function(oldValue,newValue){
            console.log("Old Emps:"+oldValue);
            console.log("newValue:"+newValue)
            alert("hi");
         }, true);
 }]);
 